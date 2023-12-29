/* eslint-disable @next/next/no-sync-scripts */
/**
 * This Layout is needed for Starter Kit.
 */

import {
  Field,
  HTMLLink,
  ImageField,
  LayoutServiceData,
  LinkField,
  Placeholder,
  TextField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import ScriptList, {
  ScriptListLocation,
} from 'components/ScriptList/ScriptList';

import Head from 'next/head';
import Scripts from 'src/Scripts';
import { TagField } from './types/TagField';
import { getPublicUrl } from './helpers/URLHelper';
import { useEffect } from 'react';
import { useI18n } from 'next-localization';
import { useRef } from 'react';
import { useRouter } from 'next/router';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
let publicUrl = getPublicUrl();

type CheckField = {
  value: boolean;
};

interface LayoutProps {
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];
}

type CategoryField = {
  fields: {
    'Category Name': TextField;
  };
};

interface RouteFields {
  [key: string]: unknown;
  name: Field;
  MetaPageTitle?: Field;
  MetaPageDescription?: Field;
  OpenGraphTitle?: Field;
  OpenGraphDescription?: Field;
  OpenGraphType?: Field;
  OpenGraphSiteName?: Field;
  OpenGraphImageUrl?: ImageField;
  PageTitle?: Field;
  ShortDescription?: Field;
  ContentType?: TagField;
  ResourceImage?: ImageField;
  SearchResultType?: TagField;
  Professions?: TagField[];
  Solutions?: TagField[];
  Industries?: TagField[];
  RecommendedTopics?: TagField[];
  AreaOfInterest?: TagField;
  MetaNoIndex: CheckField;
  MetaNoFollow: CheckField;
  MetaCanonicalUrl?: LinkField;
  ExcludeFromSiteSearch: CheckField;
  SearchBoost?: TagField;
  IsPremium?: CheckField;
  EventType?: TagField;
  IsFeatured?: CheckField;
  Image?: ImageField;
  Category?: CategoryField;
  'Sub Category'?: TagField;
  'Use Case'?: TagField[];
  Brand?: TagField;
  'Product Image'?: ImageField;
  PageRedirect?: LinkField;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function firstValue(defVal: string, ...args: any[]) {
  for (let i = 0; i < arguments.length; i++) {
    if (args[i]?.value ?? '' != '') return args[i]?.value?.toString();
  }

  return defVal;
}

function extractSingleTag(field?: TagField) {
  return field?.fields?.Value?.value?.toString();
}

function extractMultiTag(fields?: TagField[]) {
  if (fields) {
    for (let i = 0; i < fields.length; i++) {
      return fields.map((f) => f.fields?.Value?.value?.toString()).join('|');
    }
  }

  return '';
}

const Layout = ({ layoutData, headLinks }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const { sitecoreContext } = useSitecoreContext();
  const fields = route?.fields as RouteFields;
  const isPageEditing = layoutData.sitecore.context.pageEditing;
  const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';

  useEffect(() => {
    document?.body?.scrollTo(0, 0);
  }, [route]);

  useEffect(() => {
    const anchorid = `richtext-anchor-link`;
    const buttonid = `richtext-button-link`;
    const anchors = document.body.querySelectorAll('[data-rte] a[href]');
    const buttons = document.body.querySelectorAll('[data-rte] button');

    [...anchors].forEach((element: HTMLAnchorElement) => {
      element.dataset.clickableId = anchorid;

      if (element.href) {
        element.dataset.clickableHref = element.href;
      }

      if (element.textContent) {
        element.dataset.clickableText = element.textContent;
      }
    });

    [...buttons].forEach((element: HTMLButtonElement) => {
      element.dataset.clickableId = buttonid;

      if (element.textContent) {
        element.dataset.clickableText = element.textContent;
      }
    });
  });

  //console.debug('Fields', fields);
  const itemName = route?.name.toString() ?? '';

  let canonical = '';

  let itemPath = String(sitecoreContext.itemPath);

  itemPath = itemPath.length > 0 ? itemPath.substring(1) : itemPath;

  if (publicUrl.endsWith('/')) {
    publicUrl = publicUrl.substring(1);
  }

  if (fields.MetaCanonicalUrl?.value?.href === '') {
    canonical = `${publicUrl}/${itemPath}`;
  } else {
    canonical = `${publicUrl}${fields?.MetaCanonicalUrl?.value?.href}`;
  }

  if (canonical.endsWith('/'))
    canonical = canonical.substring(0, canonical.length - 1);

  let pageRedirect = '';

  if (
    fields.PageRedirect?.value?.href &&
    fields.PageRedirect?.value?.href !== ''
  ) {
    if (fields.PageRedirect?.value?.href?.startsWith('/')) {
      pageRedirect = `${publicUrl}${fields.PageRedirect?.value?.href}`;
    } else {
      pageRedirect = fields.PageRedirect?.value?.href;
    }
  }

  const { t } = useI18n() || {};

  const titelAppendLabel = t
    ? t('global-page-title-suffix')
    : ' | Iron Mountain';

  const organizationSchemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'Iron Mountain',
    alternateName: 'Iron Mountain',
    url: 'https://www.ironmountain.com/',
    logo: 'https://media.ironmountain.com/-/media/images/iron-mountain/icons/Global/logo-iron-mountain.svg?rev=8b582b0e4f844fbdb185c70b95e932d5&sc_lang=en',
    sameAs: [
      'https://www.facebook.com/ironmountain',
      'https://twitter.com/ironmountain',
      'https://www.youtube.com/user/ironmountain',
      'https://www.linkedin.com/company/iron-mountain/',
    ],
  };

  const metaTitle =
    firstValue(itemName, fields?.MetaPageTitle, fields?.PageTitle) +
    titelAppendLabel;

  const ogImageUrl = fields?.Image?.value?.src
    ? fields.Image.value.src
    : fields?.OpenGraphImageUrl?.value?.src?.toString();

  const suppliesImageUrl = fields?.['Product Image']?.value?.src
    ? fields['Product Image'].value.src
    : fields?.OpenGraphImageUrl?.value?.src?.toString();

  // const router = useRouter();

  // useEffect(() => {
  //   router.push(`${router.pathname}#top"`);
  // }, [router]);

  const backToTopRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    document?.body?.addEventListener('scroll', () => {
      if (document?.body.scrollTop >= 2000) {
        backToTopRef?.current?.classList?.add('active');
      } else {
        backToTopRef?.current?.classList?.remove('active');
      }
    });
  }, []);

  useEffect(() => {
    const headerStickyData =
      document.querySelector<HTMLHeadElement>('[data-is-sticky]');

    const hasPageNav =
      document.querySelector<HTMLDivElement>('[data-is-pagenav]');

    const hasResourceNav = document.querySelector('[data-is-resource-header]');

    const hasSearchHeader = document.querySelector('[data-is-search]');

    const hasOtherNav = hasPageNav
      ? true
      : hasResourceNav
      ? true
      : hasSearchHeader
      ? true
      : null;

    if (headerStickyData && hasOtherNav && headerStickyData.dataset.isSticky) {
      if (headerStickyData.dataset) {
        hasSearchHeader
          ? (headerStickyData.dataset.isSticky = 'partial')
          : (headerStickyData.dataset.isSticky = 'false');
      }
    } else if (headerStickyData && !hasOtherNav) {
      headerStickyData.dataset.isSticky = 'true';
    }
  }, [route]);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).dataLayer.push({
        event: 'VirtualPageView',
        page: url,
        title: document.title,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  if (pageRedirect && pageRedirect !== '') {
    return (
      <Head>
        <meta http-equiv="refresh" content={`0; url=${pageRedirect} `} />
      </Head>
    );
  }

  return (
    <>
      <Scripts />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchemaMarkup),
        }}
      />
      <ScriptList location={ScriptListLocation.HEAD} />
      <Head>
        <script src="/static-assets/js/utm-set.js" async></script>
        <title>{metaTitle}</title>
        <meta
          name="description"
          content={firstValue(
            '',
            fields?.MetaPageDescription,
            fields?.ShortDescription
          )}
        />
        <meta name="referrer" content="no-referrer-when-downgrade"></meta>
        <link rel="icon" href={`${publicUrl}/static-assets/favicon.png`} />
        <meta
          property="og:title"
          content={firstValue(
            itemName,
            fields?.OpenGraphTitle,
            fields?.MetaPageTitle,
            fields?.PageTitle
          )}
        />
        <meta
          property="og:description"
          content={firstValue(
            '',
            fields?.OpenGraphDescription,
            fields?.MetaPageDescription,
            fields?.ShortDescription
          )}
        />
        <meta
          property="og:type"
          content={firstValue('website', fields?.OpenGraphType)}
        />
        <meta
          property="og:url"
          content={publicUrl + sitecoreContext.itemPath}
        />
        <meta property="og:image" content={ogImageUrl} />
        <link rel="canonical" href={canonical} />

        <meta
          property="im:title"
          content={firstValue(
            itemName,
            fields?.MetaPageTitle,
            fields?.PageTitle
          )}
        />

        {fields?.SearchResultType ? (
          <meta
            property="im:searchresulttype"
            content={extractSingleTag(fields?.SearchResultType)}
          />
        ) : null}
        {fields?.Professions ? (
          <meta
            property="im:professions"
            content={extractMultiTag(fields?.Professions)}
          />
        ) : null}
        {fields?.Solutions ? (
          <meta
            property="im:solutions"
            content={extractMultiTag(fields?.Solutions)}
          />
        ) : null}
        {fields?.Industries ? (
          <meta
            property="im:industries"
            content={extractMultiTag(fields?.Industries)}
          />
        ) : null}
        {fields?.RecommendedTopics ? (
          <meta
            property="im:topics"
            content={extractMultiTag(fields?.RecommendedTopics)}
          />
        ) : null}
        {fields?.AreaOfInterest ? (
          <meta
            property="im:areaofinterest"
            content={extractSingleTag(fields?.AreaOfInterest)}
          />
        ) : null}
        {fields?.ContentType ? (
          <meta
            property="im:contenttype"
            content={extractSingleTag(fields?.ContentType)}
          />
        ) : null}
        {fields?.IsPremium?.value ? (
          <meta
            property="im:premiumcontent"
            content={fields?.IsPremium.value.toString()}
          />
        ) : null}
        {fields?.EventType ? (
          <meta
            property="im:eventtype"
            content={extractSingleTag(fields?.EventType)}
          />
        ) : null}
        {fields?.IsFeatured?.value ? (
          <meta
            property="im:eventfeatured"
            content={fields?.IsFeatured.value.toString()}
          />
        ) : null}
        {(() => {
          if (fields?.MetaNoIndex?.value && fields?.MetaNoFollow?.value) {
            return <meta name="robots" content="noindex,nofollow" />;
          }

          if (fields?.MetaNoIndex?.value) {
            return <meta name="robots" content="noindex" />;
          }

          if (fields?.MetaNoFollow?.value) {
            return <meta name="robots" content="nofollow" />;
          }

          return null;
        })()}
        {fields?.ExcludeFromSiteSearch?.value ? (
          <meta name="Algolia crawler" content="noindex" />
        ) : null}
        {fields?.SearchBoost ? (
          <meta
            property="im:searchboosting"
            content={extractSingleTag(fields?.SearchBoost)}
          />
        ) : null}
        {fields?.Category ? (
          <meta
            property="im:suppliescategory"
            content={fields?.Category?.fields[
              'Category Name'
            ].value?.toString()}
          />
        ) : null}
        {fields?.['Sub Category'] ? (
          <meta
            property="im:suppliessubcategory"
            content={extractSingleTag(fields?.['Sub Category'])}
          />
        ) : null}
        {fields?.Brand ? (
          <meta
            property="im:suppliesbrand"
            content={extractSingleTag(fields?.Brand)}
          />
        ) : null}
        {fields?.['Use Case'] ? (
          <meta
            property="im:suppliesusecase"
            content={extractMultiTag(fields?.['Use Case'])}
          />
        ) : null}
        <meta property="im:suppliesimage" content={suppliesImageUrl} />
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
      </Head>

      <ScriptList location={ScriptListLocation.BODY} />
      {/* root placeholder for the app, which we add components to using route data */}
      <div id="top" className={mainClassPageEditing}>
        <header className="sticky-header" data-is-sticky="true">
          <div id="header">
            {route && <Placeholder name="headless-header" rendering={route} />}
          </div>
        </header>
        <main>
          <a
            ref={backToTopRef}
            data-clickable-id="backtotop-details"
            data-clickable-text="back-to-top"
            data-clickable-href="top"
            href="#top"
            className="to-top-btn"
          ></a>
          <div id="content" className="content">
            {route && <Placeholder name="headless-main" rendering={route} />}
          </div>
        </main>
        <footer>
          <div id="footer">
            {route && <Placeholder name="headless-footer" rendering={route} />}
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
