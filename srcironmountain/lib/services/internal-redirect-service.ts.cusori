// eslint-disable-next-line n/no-extraneous-import
import { Cache, CacheClass } from 'memory-cache';

import {
  CacheClient,
  CacheOptions,
  GraphQLClient,
  GraphQLRequestClient,
  debug,
} from '@sitecore-jss/sitecore-jss';

export type InternalRedirectInfo = {
  source: string;
  target: string;
};

// The default query for request redirects of site
const defaultQuery = /* GraphQL */ `
  query SearchQuery(
    $language: String = "en"
    $pageTemplate: String = "C9A85525-7478-4D41-BD60-1EFD616E8AB8"
    $hasRedirect: String = "1"
  ) {
    search(
      where: {
        AND: [
          { name: "_language", value: $language, operator: EQ }
          { name: "_templates", value: $pageTemplate, operator: CONTAINS }
          { name: "hasRedirect", value: $hasRedirect, operator: EQ }
        ]
      }
    ) {
      results {
        url {
          path
        }
        ... on Page_c9a8552574784d41bd601efd616e8ab8 {
          pageRedirect {
            url
          }
        }
      }
    }
  }
`;

/**
 * Needing to add Memory Client in here. For some reason, this cannot be leveraged from the base project
 *
 */
export class MemoryCacheClient<T> implements CacheClient<T> {
  private cache: CacheClass<string, T>;

  /**
   * Initializes a new instance of @see MemoryCacheClient using the provided @see CacheOptions
   * @param {CacheOptions} options Configuration options
   */
  constructor(public options: CacheOptions) {
    this.cache = new Cache();

    this.options.cacheTimeout = (this.options.cacheTimeout ?? 60) * 1000;

    if (this.options.cacheEnabled === undefined) {
      this.options.cacheEnabled = true;
    }
  }

  /**
   * Retrieves a value from the cache.
   * @template T The type of data being cached.
   * @param {string} key The cache key.
   * @returns The cache value as {T}, or null if the specified key is not found in the cache.
   */
  getCacheValue(key: string): T | null {
    return this.options.cacheEnabled ? this.cache.get(key) : null;
  }

  /**
   * Adds a value to the cache for the specified cache key.
   * @template T The type of data being cached.
   * @param {string} key The cache key.
   * @param {T} value The value to cache.
   * @returns The value added to the cache.
   */
  setCacheValue(key: string, value: T): T {
    return this.options.cacheEnabled
      ? this.cache.put(key, value, this.options.cacheTimeout)
      : value;
  }
}

export type GraphQLInternalRedirectsServiceConfig = CacheOptions & {
  /**
   * Your Graphql endpoint
   */
  endpoint: string;
  /**
   * The API key to use for authentication
   */
  apiKey: string;
  /**
   * Override fetch method. Uses 'GraphQLRequestClient' default otherwise.
   */
  fetch?: typeof fetch;
};

/**
 * The schema of data returned in response to redirects array request
 */
export type RedirectsQueryResult = {
  search: {
    results: [{ url: { path: string }; pageRedirect: { url: string } }];
  };
};

/**
 *  The GraphQLRedirectsService class is used to query the JSS redirects using Graphql endpoint
 */
export class GraphQLInternalRedirectsService {
  private graphQLClient: GraphQLClient;
  private cache: CacheClient<InternalRedirectInfo[]>;

  protected get query(): string {
    return defaultQuery;
  }

  /**
   * Creates an instance of graphQL redirects service with the provided options
   * @param {GraphQLInternalRedirectsServiceConfig} options instance
   */
  constructor(private options: GraphQLInternalRedirectsServiceConfig) {
    this.graphQLClient = this.getGraphQLClient();
    this.cache = this.getCacheClient();
  }

  /**
   * Fetch an array of redirects from API
   * @param {string} language
   * @returns Promise<RedirectInfo[]>
   * @throws {Error} if the siteName is empty.
   */
  async fetchRedirects(language: string): Promise<InternalRedirectInfo[]> {
    if (!language) {
      language = 'en';
    }

    //Locales come in with 'en-au' but we need to use 'en-AU'
    if (language !== 'en') {
      language = language.replace(
        language.substring(2),
        language.substring(2).toUpperCase()
      );
    }

    const cacheKey = `internal-redirects-${language}`;
    let data = this.cache.getCacheValue(cacheKey);

    if (!data) {
      const queryData = await this.graphQLClient.request<RedirectsQueryResult>(
        this.query,
        {
          language,
        }
      );

      const mappedRedirs: InternalRedirectInfo[] = [];

      queryData.search.results.forEach((r) => {
        mappedRedirs.push({
          source: r.url.path,
          target: r.pageRedirect.url,
        } as InternalRedirectInfo);
      });
      data = mappedRedirs;

      this.cache.setCacheValue(cacheKey, data);
    }

    return data || [];
  }

  /**
   * Gets a GraphQL client that can make requests to the API. Uses graphql-request as the default
   * library for fetching graphql data (@see GraphQLRequestClient). Override this method if you
   * want to use something else.
   * @returns {GraphQLClient} implementation
   */
  protected getGraphQLClient(): GraphQLClient {
    return new GraphQLRequestClient(this.options.endpoint, {
      apiKey: this.options.apiKey,
      debugger: debug.redirects,
      fetch: this.options.fetch,
    });
  }

  /**
   * Gets cache client implementation
   * Override this method if custom cache needs to be used
   * @returns CacheClient instance
   */

  protected getCacheClient(): CacheClient<InternalRedirectInfo[]> {
    return new MemoryCacheClient<InternalRedirectInfo[]>({
      cacheEnabled: this.options.cacheEnabled ?? true,
      cacheTimeout: this.options.cacheTimeout ?? 10,
    } as CacheOptions);
  }
}
