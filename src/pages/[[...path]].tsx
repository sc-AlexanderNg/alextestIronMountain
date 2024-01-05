import {
  ComponentPropsContext,
  EditingComponentPlaceholder,
  Item,
  RenderingType,
  SitecoreContext,
  StaticPath,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { GetStaticPaths, GetStaticProps } from 'next';

import Layout from 'src/Layout';
import NotFound from 'src/NotFound';
import { SitecorePageProps } from 'lib/page-props';
import { componentBuilder } from 'temp/componentBuilder';
import { handleEditorFastRefresh } from '@sitecore-jss/sitecore-jss-nextjs/utils';
import { sitecorePagePropsFactory } from 'lib/page-props-factory';
import { sitemapFetcher } from 'lib/sitemap-fetcher';
import { useEffect } from 'react';
// eslint-disable-next-line sort-imports
import { getLocale, getLocaleReverse } from 'src/helpers/LocaleHelper';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

type RevalidationProps = Item & {
  fields: { Value: { value: string } };
};

const SitecorePage = ({
  notFound,
  componentProps,
  layoutData,
  headLinks,
}: SitecorePageProps): JSX.Element => {
  useEffect(() => {
    // Since Sitecore editors do not support Fast Refresh, need to refresh editor chromes after Fast Refresh finished
    handleEditorFastRefresh();
  }, []);

  if (notFound || !layoutData.sitecore.route) {
    // Shouldn't hit this (as long as 'notFound' is being returned below), but just to be safe
    return <NotFound />;
  }

  const isEditing = layoutData.sitecore.context.pageEditing;
  const isComponentRendering =
    layoutData.sitecore.context.renderingType === RenderingType.Component;

  return (
    <ComponentPropsContext value={componentProps}>
      <SitecoreContext
        componentFactory={componentBuilder.getComponentFactory({ isEditing })}
        layoutData={layoutData}
      >
        {/*
          Sitecore Pages supports component rendering to avoid refreshing the entire page during component editing.
          If you are using Experience Editor only, this logic can be removed, Layout can be left.
        */}
        {isComponentRendering ? (
          <EditingComponentPlaceholder rendering={layoutData.sitecore.route} />
        ) : (
          <Layout layoutData={layoutData} headLinks={headLinks} />
        )}
      </SitecoreContext>
    </ComponentPropsContext>
  );
};

/////////////////////////////////////////////////////////////////////
/// LocaleRewrite:
/// 1. Remove the unsupported (en-ae) locale and replace it with the supported one (en-ai) when fetching pages
/// 2. Once we fetch all pages, we need to re-apply the unsupported locale so it writes to the file system correctly
/// 3. Re-add the the unsupported (en-ai) locale to context
/////////////////////////////////////////////////////////////////////

// This function gets called at build and export time to determine
// pages for SSG ("paths", as tokenized array).
export const getStaticPaths: GetStaticPaths = async (context) => {
  // Fallback, along with revalidate in getStaticProps (below),
  // enables Incremental Static Regeneration. This allows us to
  // leave certain (or all) paths empty if desired and static pages
  // will be generated on request (development mode in this example).
  // Alternatively, the entire sitemap could be pre-rendered
  // ahead of time (non-development mode in this example).
  // See https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration

  const paths: StaticPath[] = [];
  let fallback: boolean | 'blocking' = 'blocking';

  // Note: Next.js runs export in production mode
  if (
    process.env.NODE_ENV !== 'development' &&
    process.env.DISABLE_SSG_FETCH === 'false'
  ) {
    try {
      let dirtyPaths: StaticPath[] = [];

      if (context.locales) {
        for (let i = 0; i < context.locales?.length; i++) {
          context.locales[i] = getLocale(context.locales[i]);
        }
      }

      dirtyPaths = await sitemapFetcher.fetch(context);

      dirtyPaths.forEach((p) => {
        //Sitename first, first segment after
        if (p.params.path.length > 1) {
          if (p.params.path[1].toLocaleLowerCase() === 'presentation') {
            // eslint-disable-next-line no-console
            console.log(
              `Purging Presenatation Route: ${p.params.path.join('/')}`
            );

            return;
          }
        }

        const oldLocale = p.locale;
        const newLocale = getLocaleReverse(oldLocale);

        if (oldLocale !== newLocale) {
          p.locale = newLocale;
        }

        paths.push(p);
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Error occurred while fetching static paths');

      // eslint-disable-next-line no-console
      console.log(error);
    }

    fallback = process.env.EXPORT_MODE ? false : fallback;

    if (context.locales) {
      for (let i = 0; i < context.locales?.length; i++) {
        context.locales[i] = getLocaleReverse(context.locales[i]);
      }
    }
  }

  return {
    paths,
    fallback,
  };
};

/////////////////////////////////////////////////////////////////////
/// LocaleRewrite:
/// 1. When fetching the page, we need to fetch for the unsupported (en-ai) rather than the context (en-ae)
/////////////////////////////////////////////////////////////////////

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation (or fallback) is enabled and a new request comes in.
export const getStaticProps: GetStaticProps = async (context) => {
  const maxAttempts = 5;

  let currentAttempt = 1;

  let done = false;

  let props = null;

  while (!done) {
    try {
      context.locale = getLocale(context.locale);
      props = await sitecorePagePropsFactory.create(context);
      done = true;
    } catch (e) {
      console.error((e as Error).message);

      currentAttempt++;

      await sleep(2000);

      //Short out after 5 attemps
      if (currentAttempt > maxAttempts) {
        done = true;
        console.error('Could not fetch page props. Failing afer 5 attempts.');
      }
    }
  }

  if (!props) {
    throw `Could not fetch page props. `;
  }

  if (process.env.REDIR_RESOURCES_CATCHALL === 'true') {
    if (props.notFound) {
      if (context?.params?.path) {
        //We need to remove the site name
        const path = context.params.path?.slice(1) as string[];

        const locale = getLocaleReverse(context.locale);

        const url = path.join('/').toString().toLowerCase() as string;

        //all 404 resources go to /resources
        if (url.startsWith('resources') && url !== 'resources') {
          return {
            props,
            redirect: {
              destination:
                locale === 'en' ? '/resources' : `/${locale}/resources`,
              permanent: false,
            },
          };
        }
      }
    }
  }

  let revalidateMins = 30;

  //If we're in a dynamci mode, we need to parse the settings from the route
  if (process.env.ISR_MODE === 'dynamic') {
    if (props.layoutData.sitecore.route?.fields?.RevalidationPriority) {
      const rvProps = props.layoutData.sitecore.route.fields
        .RevalidationPriority as RevalidationProps;

      if (rvProps?.fields?.Value) {
        revalidateMins = parseInt(rvProps.fields.Value.value);
      }
    }
  } else if (process.env.ISR_STATIC_DEFAULT) {
    revalidateMins = parseInt(process.env.ISR_STATIC_DEFAULT);
  }

  //If we've gotten this far and have no valid value, we're gonna set an absolute base
  if (isNaN(revalidateMins) || revalidateMins < 30) revalidateMins = 30;

  // if (!props.layoutData?.sitecore?.route) {
  //   const path = '/_404';

  //   // Update the layout from Sitecore
  //   props = await sitecorePagePropsFactory.create({
  //     ...context,
  //     params: { ...context.params, path },
  //   });
  // }

  //If for some reason (maybe in dev) we need to use this...it should be set. It should NEVER be set in production
  if (process.env.ISR_INSTANT === 'DO-NOT-EVER-USE') {
    return {
      props,
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 5 seconds
      revalidate: 5,
      notFound: props.notFound, // Returns custom 404 page with a status code of 404 when true
    };
  }

  return {
    props,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: revalidateMins * 60,
    notFound: props.notFound, // Returns custom 404 page with a status code of 404 when true
  };
};

export default SitecorePage;
