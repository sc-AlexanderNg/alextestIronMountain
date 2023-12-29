// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const RELATED_RESOURCES_GQL = `
query  {
  RelatedResources: search(
    where: {
      AND: [
        { name: "_language", value: "__LANG__", operator: EQ }
        { name: "_templates", value: "__RESOURCE_TEMPLATE__", operator: EQ }
        { name: "_path", value: "__MY_ID__", operator: NCONTAINS }
        {
          OR: [__TAGFILTER__]
        }
      ]
    }
    first: 3
    orderBy: { name: "resourceDate", direction: DESC }
  ) {
    results {
      url {
        path
      }
      ... on ResourcePage {
        contentType {
          jsonValue
        }
        image {
          jsonValue
        }
        displayDate {
          value
        }
        isPremium {
          value
        }
        pageTitle {
          jsonValue
        }
        resourceDate {
          jsonValue
        }
        shortTitle {
          jsonValue
        }
        shortDescription {
          jsonValue
        }
        longDescription {
          jsonValue
        }
      }
      ... on _MetaData {
        metaPageTitle {
          jsonValue
        }
        metaPageDescription {
          jsonValue
        }
      }
    }
  }
}`;
