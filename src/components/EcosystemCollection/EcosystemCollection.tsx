/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-rest-params */
import { Hit as AlgoliaHit, SearchClient } from 'instantsearch.js';
import {
  ClearRefinements,
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
import Image from 'next/image';
import { SendEventForHits } from 'instantsearch.js/es/lib/utils';
import algoliasearch from 'algoliasearch/lite';
import classNames from 'classnames';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import { history } from 'instantsearch.js/es/lib/routers';
import styles from './EcosystemCollection.module.css';
import { useI18n } from 'next-localization';

type ObjectType = { [key: string]: boolean };

type HitResult = {
  hit: AlgoliaHit<{
    CompanyName: string;
    PartnerUrl?: string;
    ImageUrl?: string;
  }>;
  sendEvent: SendEventForHits;
};

function Hit({ hit, sendEvent }: HitResult) {
  return (
    <a
      href={hit.PartnerUrl}
      onClick={() => sendEvent('click', hit, 'Result Clicked')}
      data-insights-object-id={hit.objectID}
      data-insights-position={hit.__position}
      data-insights-query-id={hit.__queryID}
    >
      <div className={styles['card-image-container']}>
        {hit?.ImageUrl &&
          (hit?.ImageUrl.startsWith('http') ||
            hit?.ImageUrl.startsWith('/')) && (
            <Image
              src={hit.ImageUrl}
              width={230}
              height={100}
              unoptimized
              alt={hit.CompanyName}
              className={styles['card-image']}
            />
          )}
      </div>
    </a>
  );
}

type EcosystemCollectionProps = ComponentWithContextProps & {
  fields: {
    InstanceID: TextField;
    APIKey: TextField;
    IndexName: TextField;
  };
};

const EcosystemCollection = (props: EcosystemCollectionProps): JSX.Element => {
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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
          services: state.refinementList?.Services,
          locations: state.refinementList?.Locations,
        };
      },
      routeToState(routeState: { services: any; locations: any }) {
        return {
          [indexName]: {
            refinementList: {
              Services: routeState.services,
              Locations: routeState.locations,
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
  const locationsLabel = t ? t('search-locations') : 'Locations';
  const servicesLabel = t ? t('search-services') : 'Services';
  const queryLabel = t ? t('search-search-partners') : 'Search Partners';
  const showMoreLabel = t ? t('search-load-more') : 'Load More';
  const resultsForLabel = t ? t('search-results-for') : 'results';
  const isEditing = useSitecoreContext().sitecoreContext.pageEditing;
  const defaultState: ObjectType = {
    locations: false,
    services: false,
  };
  const [isActive, setIsActive] = useState<ObjectType>({ ...defaultState });

  const handleClick = (category: string) => {
    if (isActive[category]) {
      setIsActive(defaultState);
    } else {
      defaultState[category] = !defaultState[category];
      setIsActive(defaultState);
    }
  };

  const locationsSelect = useRef<HTMLDivElement>(null);
  const servicesSelect = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        locationsSelect.current &&
        !locationsSelect.current.contains(event.target as Node) &&
        servicesSelect.current &&
        !servicesSelect.current.contains(event.target as Node)
      ) {
        setIsActive({
          locations: false,
          services: false,
        });
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return isEditing ? (
    <p>Search Disabled in Experience Editor</p>
  ) : (
    <>
      {getAnchorTag(props)}
      <InstantSearch
        indexName={indexName}
        searchClient={searchClient}
        insights
        routing={routing}
      >
        <Configure clickAnalytics={true} />
        <div className={styles['search-results']}>
          {/* https://www.algolia.com/doc/api-reference/widgets/search-box/react-hooks/#widget-param-classnames */}
          <div className={styles.header}>
            <div className={styles['header-container']}>
              <SearchBox
                placeholder={queryLabel}
                className={styles['search-input-container']}
              />

              <div ref={locationsSelect} className={styles.multiselect}>
                <div
                  onClick={() => handleClick('locations')}
                  className={classNames(
                    styles.select,
                    isActive.locations ? styles.active : ''
                  )}
                >
                  {locationsLabel}
                </div>
                <RefinementList
                  attribute="Locations"
                  title={locationsLabel}
                  limit={40}
                  className={classNames(
                    styles.options,
                    isActive.locations ? styles.active : styles.inactive
                  )}
                />
              </div>
              <div ref={servicesSelect} className={styles.multiselect}>
                <div
                  onClick={() => handleClick('services')}
                  className={classNames(
                    styles.select,
                    isActive.services ? styles.active : ''
                  )}
                >
                  {servicesLabel}
                </div>
                <RefinementList
                  attribute="Services"
                  title={servicesLabel}
                  limit={40}
                  className={classNames(
                    styles.options,
                    isActive.services ? styles.active : styles.inactive
                  )}
                />
              </div>
            </div>
          </div>
          <div className={styles.results}>
            <div className={styles.stats}>
              <Stats
                translations={{
                  rootElementText({ nbHits }) {
                    return `${`${nbHits.toLocaleString()} ${resultsForLabel}`} `;
                  },
                }}
              />
              {/* Customize Refinements: https://www.algolia.com/doc/api-reference/widgets/current-refinements/react-hooks/#widget-param-classnames */}
              <CurrentRefinements
                includedAttributes={['Locations', 'Services']}
                className={styles.refinements}
              />
              <ClearRefinements
                translations={{
                  resetButtonText: 'Clear All',
                }}
              />
            </div>
            <InfiniteHits
              hitComponent={Hit}
              showPrevious={false}
              translations={{
                showMoreButtonText: showMoreLabel,
              }}
              className={styles.list}
            />
            <Placeholder
              name="search-results-right"
              rendering={props.rendering}
              tag="div"
            />
          </div>
        </div>
      </InstantSearch>
    </>
  );
};

export default withDatasourceCheck()<EcosystemCollectionProps>(
  EcosystemCollection
);
