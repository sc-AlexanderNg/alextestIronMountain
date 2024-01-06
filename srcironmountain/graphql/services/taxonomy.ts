import config from '../../temp/config';

export type TagFilter = {
  tagname: string;
  filterValues: string[];
};
type PageInfo = {
  endCursor: string;
  hasNext: boolean;
};

export type FilteredListingData<T> = {
  data?: {
    search: {
      results: T[];
      pageInfo: PageInfo;
      total: number;
    };
  };
  errormsg?: string;
};

export type FilteredListingPredicateOptions = {
  requiredTemplates: string[]; //resourcepage, etc
  tagFilters?: TagFilter[]; //solutions
  optionalPath?: string; //optional root location
  contextItemName?: string;
  contextLanguage?: string;
  first?: number;
  after?: string;
  resultTemplateDataGraphql?: string;
  openQuery?: string;
};

export const getListing: <T>(
  options: FilteredListingPredicateOptions
) => Promise<FilteredListingData<T>> = (
  options: FilteredListingPredicateOptions
) => {
  const {
    requiredTemplates, //resourcepage, etc
    tagFilters, //solutions
    optionalPath, //optional root location
    contextItemName, //exclude current Item from realtedQuery
    contextLanguage, //context item current language
    first,
    after,
    resultTemplateDataGraphql,
    openQuery,
  } = options;

  // require template filters
  let requiredTemplatesQuery = '';

  if (requiredTemplates?.length) {
    requiredTemplates.forEach(
      (template) =>
        (requiredTemplatesQuery = `${requiredTemplatesQuery}
        {
          name: "_templates"
          value: "${template}"
          operator: CONTAINS
        }`)
    );
  }

  // require tags filters
  let tagsQuery = '';

  if (tagFilters?.some((tagFilter) => tagFilter.filterValues.length > 0)) {
    let tagsQueries = '';

    tagFilters?.forEach(({ tagname, filterValues }) => {
      if (tagname && filterValues.length > 0) {
        filterValues.forEach((value) => {
          tagsQueries = `${tagsQueries}
        {
          name: "${tagname}_sm"
          value: "${value}"
          operator: CONTAINS
        }`;
        });
      }
    });

    tagsQuery = `{OR: [${tagsQueries}]}`;
  }

  // require rootitem path filters
  let optionalPathsQuery = '';

  if (optionalPath !== '') {
    optionalPathsQuery = `{
      name: "_path"
      value: "${optionalPath}"
      operator: CONTAINS
    }`;
  }

  // require to exclude current item from related collection
  let excludeContextItemQuery = '';

  if (contextItemName !== '') {
    excludeContextItemQuery = `{
      name: "_name"
      value: "${contextItemName}"
      operator: NEQ
    }`;
  }

  // require for language filter
  let languageItemQuery = '';

  if (contextLanguage !== '') {
    languageItemQuery = `{
      name: "_language"
      value: "${contextLanguage}"
      operator: EQ
    }`;
  }

  return fetch(`${config.sitecoreApiHost}${config.graphQLEndpointPath}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      sc_apikey: config.sitecoreApiKey,
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      query: `
      query RetrieveContentItems($first: Int = 12, $after: String = "") {
        search(
          first: $first
          after: $after
          ${openQuery}
          where: {
            AND: [
              ${requiredTemplatesQuery}
              ${excludeContextItemQuery}
              ${languageItemQuery}
              ${optionalPathsQuery}
              ${tagsQuery}
           ]
          }
        ) {
          results {
            ${resultTemplateDataGraphql}
          }
          pageInfo {
            hasNext
            endCursor
          }
          total
        }
      }
    `,
      variables: { first, after },
    }),
  }).then((response: Response) => {
    const data = response.json();

    return data;
  });
};
