import {
  ErrorPages,
  GraphQLErrorPagesService,
  SitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { GetStaticProps } from 'next';
import Layout from 'src/Layout';
import NotFound from 'src/NotFound';
import { SitecorePageProps } from 'lib/page-props';
import { componentBuilder } from 'temp/componentBuilder';
import config from 'temp/config';
import { siteResolver } from 'lib/site-resolver';
// eslint-disable-next-line sort-imports
import { getLocale } from 'src/helpers/LocaleHelper';

const Custom404 = (props: SitecorePageProps): JSX.Element => {
  if (!(props && props.layoutData)) {
    return <NotFound />;
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
    language: getLocale(context.locale) || config.defaultLanguage,
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
      layoutData: resultErrorPages?.notFoundPage?.rendered || null,
    },
  };
};

export default Custom404;
