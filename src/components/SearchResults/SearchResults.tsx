/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-rest-params */
import { Hit as AlgoliaHit, SearchClient } from 'instantsearch.js';
import {
  Configure,
  CurrentRefinements,
  InfiniteHits,
  InstantSearch,
  RefinementList,
  SearchBox,
  Stats,
} from 'react-instantsearch-hooks-web';
import {
  Placeholder,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { useEffect, useRef, useState } from 'react';
import { ComponentWithContextProps } from '../../lib/component-props';
import { SendEventForHits } from 'instantsearch.js/es/lib/utils';
import algoliasearch from 'algoliasearch/lite';
import classNames from 'classnames';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import { history } from 'instantsearch.js/es/lib/routers';
import { motion } from 'framer-motion';
import styles from './SearchResults.module.css';
import { useI18n } from 'next-localization';

type HitResult = {
  hit: AlgoliaHit<{
    url: string;
    name?: string;
    title?: string;
    description?: string;
    im_searchresulttype?: string;
    im_contenttype?: string;
  }>;
  sendEvent: SendEventForHits;
};

function Hit({ hit, sendEvent }: HitResult) {
  return (
    <a
      href={hit.url}
      onClick={() => sendEvent('click', hit, 'Result Clicked')}
      data-insights-object-id={hit.objectID}
      data-insights-position={hit.__position}
      data-insights-query-id={hit.__queryID}
    >
      <div className={styles.card}>
        {(hit.im_searchresulttype || hit.im_contenttype) && (
          <ul className={styles['type-list']}>
            {hit.im_searchresulttype && <li>{hit.im_searchresulttype}</li>}
            {hit.im_contenttype && <li>{hit.im_contenttype}</li>}
          </ul>
        )}
        {hit.title && (
          <h3 className={classNames('btn-tertiary', styles.title)}>
            {hit.title}
          </h3>
        )}
        {hit.description && (
          <p className={styles.description}>{hit.description}</p>
        )}
      </div>
    </a>
  );
}

type SearchResultsProps = ComponentWithContextProps & {
  fields: {
    InstanceID: TextField;
    APIKey: TextField;
    IndexName: TextField;
  };
};

const SearchResults = (props: SearchResultsProps): JSX.Element => {
  const instanceId = props?.fields?.InstanceID?.value
    ? props?.fields?.InstanceID?.value.toString()
    : '';

  const apiKey = props?.fields?.APIKey?.value
    ? props?.fields?.APIKey?.value.toString()
    : '';

  const indexName = props?.fields?.IndexName?.value
    ? props?.fields?.IndexName?.value.toString()
    : '';

  const algoliaClient = algoliasearch(instanceId, apiKey);

  const searchClient = {
    ...algoliaClient,
    search(requests) {
      const newRequests = requests.map((request) => {
        // test for empty string and change request parameter: analytics
        if (!request?.params?.query || request.params.query.length === 0) {
          (request.params as any).analytics = false;
        }

        return request;
      });

      return algoliaClient.search(newRequests);
    },
  } as SearchClient;

  const routing = {
    router: history(),
    stateMapping: {
      stateToRoute(uiState: { [x: string]: any }) {
        const state = uiState[indexName];

        return {
          q: state.query,
          searchresulttype: state.refinementList?.im_searchresulttype,
        };
      },
      routeToState(routeState: { q: any; searchresulttype: any }) {
        return {
          [indexName]: {
            query: routeState.q,
            refinementList: {
              im_searchresulttype: routeState.searchresulttype,
            },
          },
        };
      },
    },
  };

  // let isFirst = true;

  // useEffect(() => {
  //   function track(
  //     fn: { apply: (arg0: any, arg1: IArguments) => any },
  //     handler: { (): void; (): void; apply?: any },
  //     before?: undefined
  //   ) {
  //     return function interceptor(this: any) {
  //       if (before) {
  //         handler.apply(this, arguments);

  //         return fn.apply(this, arguments);
  //       }

  //       const result = fn.apply(this, arguments);

  //       handler.apply(this, arguments);

  //       return result;
  //     };
  //   }

  //   function handler() {
  //     if (isFirst) {
  //       isFirst = false;

  //       return;
  //     }

  //     // (window as any).dataLayer.push({
  //     //   event: 'AlgoliaSearch',
  //     //   page: window.location.pathname + window.location.search,
  //     // });
  //   }

  //   // Assign listeners
  //   window.history.pushState = track(window.history.pushState, handler);
  //   window.history.replaceState = track(window.history.replaceState, handler);
  //   window.addEventListener('popstate', handler);
  // }, []);

  const { t } = useI18n() || {};
  const resultTypeLabel = t ? t('search-result-type') : 'Result Type';
  const queryLabel = t ? t('search-prompt') : 'Search Query';
  const showMoreLabel = t ? t('search-load-more') : 'Load More';
  const resultsForLabel = t ? t('search-results-for') : 'results';
  const { sitecoreContext } = useSitecoreContext();
  const motionAttributes = !sitecoreContext.pageEditing
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: 'easeInOut' },
      }
    : {};
  const isEditing = sitecoreContext.pageEditing;
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callback();
        }
      };

      document.addEventListener('click', handleClick, true);

      return () => {
        document.removeEventListener('click', handleClick, true);
      };
    }, [callback, ref]);

    return ref;
  };

  const ref = useOutsideClick(() => setIsActive(false));

  return isEditing ? (
    <p>Search Disabled in Experience Editor</p>
  ) : (
    <div data-is-search>
      {getAnchorTag(props)}
      <InstantSearch
        indexName={indexName}
        searchClient={searchClient}
        insights
        routing={routing}
      >
        <Configure clickAnalytics={true} />
        <motion.div {...motionAttributes} className={styles['search-results']}>
          {/* https://www.algolia.com/doc/api-reference/widgets/search-box/react-hooks/#widget-param-classnames */}
          <div className={styles.header} data-is-search-header>
            <div className={styles['header-container']}>
              <SearchBox
                placeholder={queryLabel}
                className={styles['search-input-container']}
                onChangeCapture={(event) =>
                  handleInputChange(
                    event as React.ChangeEvent<HTMLInputElement>
                  )
                }
              />
              {/* https://www.algolia.com/doc/api-reference/widgets/refinement-list/react-hooks/#widget-param-classnames */}
              <div className={styles.multiselect} ref={ref}>
                <div
                  onClick={handleClick}
                  className={classNames(
                    styles.select,
                    isActive ? styles.active : ''
                  )}
                >
                  {resultTypeLabel}
                </div>
                <RefinementList
                  attribute="im_searchresulttype"
                  title={resultTypeLabel}
                  className={classNames(
                    styles.options,
                    isActive ? styles.active : styles.inactive
                  )}
                />
              </div>
            </div>
          </div>
          <div className={styles['page-content']}>
            <div className={styles.results}>
              <div className={styles.stats}>
                <Stats
                  translations={{
                    rootElementText({ nbHits }) {
                      return `${`${nbHits.toLocaleString()} ${resultsForLabel}`} `;
                    },
                  }}
                />
                {searchQuery && (
                  <span>&nbsp;for &quot;{searchQuery}&quot;</span>
                )}
              </div>
              {/* Customize Refinements: https://www.algolia.com/doc/api-reference/widgets/current-refinements/react-hooks/#widget-param-classnames */}
              <CurrentRefinements
                includedAttributes={['im_searchresulttype']}
                className={styles.refinements}
              />
              <InfiniteHits
                hitComponent={Hit}
                showPrevious={false}
                translations={{
                  showMoreButtonText: showMoreLabel,
                }}
                className={styles.list}
              />
            </div>
            <div className={styles['right-column']}>
              <Placeholder
                name={'search-results-right'}
                rendering={props.rendering}
              />
            </div>
          </div>
        </motion.div>
      </InstantSearch>
    </div>
  );
};

export default withDatasourceCheck()<SearchResultsProps>(SearchResults);
