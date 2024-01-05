import {
  ErrorPages,
  GraphQLErrorPagesService,
  SitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from 'src/Layout';
import { SitecorePageProps } from 'lib/page-props';
import { componentBuilder } from 'temp/componentBuilder';
import config from 'temp/config';
import { siteResolver } from 'lib/site-resolver';
// eslint-disable-next-line sort-imports
import { getLocale } from 'src/helpers/LocaleHelper';

/**
 * Rendered in case if we have 500 error
 */
const ServerError = (): JSX.Element => (
  <>
    <Head>
      <title>500: Server Error</title>
    </Head>
    <div style={{ padding: 10 }}>
      <h1>500 Internal Server Error</h1>
      <p>
        There is a problem with the resource you are looking for, and it cannot
        be displayed.
      </p>
      <a href="/">Go to the Home page</a>
    </div>
  </>
);

const Custom500 = (props: SitecorePageProps): JSX.Element => {
  if (!(props && props.layoutData)) {
    return <ServerError />;
  }

  return (
    <SitecoreContext
      componentFactory={componentBuilder.getComponentFactory()}
      layoutData={props.layoutData}
    >
      <Layout layoutData={props.layoutData} headLinks={props.headLinks} />
    </SitecoreContext>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const site = siteResolver.getByName(config.jssAppName);
  const errorPagesService = new GraphQLErrorPagesService({
    endpoint: config.graphQLEndpoint,
    apiKey: config.sitecoreApiKey,
    siteName: site.name,
    language:
      getLocale(context.locale) ||
      context.defaultLocale ||
      config.defaultLanguage,
  });
  let resultErrorPages: ErrorPages | null = null;

  if (process.env.DISABLE_SSG_FETCH === 'false') {
    try {
      resultErrorPages = await errorPagesService.fetchErrorPages();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Error occurred while fetching error pages');

      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  return {
    props: {
      headLinks: [],
      layoutData: resultErrorPages?.serverErrorPage?.rendered || null,
    },
  };
};

export default Custom500;
