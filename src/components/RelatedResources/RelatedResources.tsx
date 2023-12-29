import {
  ComponentParams,
  ComponentRendering,
  Field,
  GetStaticComponentProps,
  GraphQLRequestClient,
  Item,
  LayoutServiceData,
  LinkField,
  useComponentProps,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import FeaturedCards, {
  TargetItem,
} from 'components/FeaturedCards/FeaturedCards';
import { RELATED_RESOURCES_GQL } from './RelatedResourcesQueryTemplate';
import config from 'temp/config';
import { getLocale } from 'src/helpers/LocaleHelper';
import { useI18n } from 'next-localization';

interface ComponentProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    Title: Field<string>;
    Button: LinkField;
    Cards: TargetItem[];
  };
}

export type QueryData = {
  RelatedResources: {
    results: TargetItem[];
  };
};

const RelatedResources = (props: ComponentProps): JSX.Element => {
  const { t } = useI18n() || {};
  const landingLinkUrl = t
    ? t('related-resources-landing-link-url')
    : '/resources';

  const landingLinkText = t
    ? t('related-resources-landing-link-text')
    : 'View More Resources';

  const componentTitle = t ? t('related-resources-title') : 'Related Resources';

  const data = useComponentProps<QueryData>(props.rendering.uid);

  const relatedResources = data?.RelatedResources.results as TargetItem[];

  if (relatedResources) {
    const fcProps = {
      data: {
        fields: {
          headline: { jsonValue: { value: componentTitle } },
          button: {
            jsonValue: {
              value: { href: landingLinkUrl, text: landingLinkText },
            },
          },
          cards: { targetItems: relatedResources },
        },
      },
    };

    return (
      <FeaturedCards
        params={props.params}
        fields={fcProps}
        rendering={props.rendering}
      />
    );
  }

  return <></>;
};

export const getStaticProps: GetStaticComponentProps = async (
  _rendering: ComponentRendering,
  layoutData: LayoutServiceData
) => {
  const graphQLClient = new GraphQLRequestClient(config.graphQLEndpoint, {
    apiKey: config.sitecoreApiKey,
  });

  let query = RELATED_RESOURCES_GQL;

  let dynamicQuery = '';

  //WE need fields, first!
  if (layoutData.sitecore.route?.fields) {
    const solutions = layoutData.sitecore.route.fields.Solutions as Item[];
    const recommendedTopics = layoutData.sitecore.route.fields
      .RecommendedTopics as Item[];

    //We need solutions second
    if (solutions?.length) {
      solutions.forEach(
        (s) =>
          (dynamicQuery += `{name: "solutions" value: "${s.id}" operator: CONTAINS}`)
      );
    } else if (recommendedTopics?.length) {
      recommendedTopics.forEach(
        (s) =>
          (dynamicQuery += `{name: "recommendedTopics" value: "${s.id}" operator: CONTAINS}`)
      );
    }

    if (dynamicQuery !== '') {
      const lang = layoutData.sitecore.context.language
        ? getLocale(layoutData.sitecore.context.language)
        : '';

      const template = layoutData.sitecore.route?.templateId
        ? layoutData.sitecore.route?.templateId
        : '';

      const myId = layoutData.sitecore.route?.itemId
        ? layoutData.sitecore.route?.itemId
        : '';

      query = query.replace('__TAGFILTER__', dynamicQuery);
      query = query.replace('__LANG__', lang);
      query = query.replace('__RESOURCE_TEMPLATE__', template);
      query = query.replace('__MY_ID__', myId);

      const res = await graphQLClient.request<QueryData>(query);

      return res;
    }
  }

  return null;
};

export default withDatasourceCheck()<ComponentProps>(RelatedResources);
