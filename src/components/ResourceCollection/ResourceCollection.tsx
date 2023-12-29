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
  ToggleRefinement,
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
import adjustDateToStandard from 'src/utils/adjustDateToStandard';
import algoliasearch from 'algoliasearch/lite';
import classNames from 'classnames';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import { history } from 'instantsearch.js/es/lib/routers';
import { motion } from 'framer-motion';
import styles from './ResourceCollection.module.css';
import { useI18n } from 'next-localization';
import { useMediaQuery } from 'react-responsive';

type HitResult = {
  hit: AlgoliaHit<{
    url: string;
    name?: string;
    title?: string;
    description?: string;
    im_contenttype?: string;
    im_premiumcontent?: string;
    im_resourceimage?: string;
    im_eventdate: number;
  }>;
  sendEvent: SendEventForHits;
};

function Hit({ hit, sendEvent }: HitResult) {
  const { t } = useI18n() || {};
  const premiumContentLabel = t
    ? t('search-premium-content')
    : 'Premium Content';
  const date = adjustDateToStandard(new Date(hit.im_eventdate * 1000));
  const months = [
    t ? t('global-months-jan') : 'Jan',
    t ? t('global-months-feb') : 'Feb',
    t ? t('global-months-mar') : 'Mar',
    t ? t('global-months-apr') : 'Apr',
    t ? t('global-months-may') : 'May',
    t ? t('global-months-jun') : 'Jun',
    t ? t('global-months-jul') : 'Jul',
    t ? t('global-months-aug') : 'Aug',
    t ? t('global-months-sep') : 'Sep',
    t ? t('global-months-oct') : 'Oct',
    t ? t('global-months-nov') : 'Nov',
    t ? t('global-months-dec') : 'Dec',
  ];
  const month = months[date.getMonth()];

  return (
    <div className={styles.card}>
      <a
        href={hit.url}
        className={styles['card-image-container']}
        onClick={() => sendEvent('click', hit, 'Result Clicked')}
        data-insights-object-id={hit.objectID}
        data-insights-position={hit.__position}
        data-insights-query-id={hit.__queryID}
      >
        {hit.im_resourceimage && (
          <img
            src={hit.im_resourceimage}
            alt={hit.title}
            className={styles['card-image']}
          />
        )}
        {hit.im_premiumcontent && (
          <span className={styles['premium-container']}>
            <span className={styles['premium-icon']} />
            <span className={styles['premium-label']}>
              {premiumContentLabel}
            </span>
          </span>
        )}
      </a>
      <a
        href={hit.url}
        className={styles['card-content-link']}
        onClick={() => sendEvent('click', hit, 'Result Clicked')}
        data-insights-object-id={hit.objectID}
        data-insights-position={hit.__position}
        data-insights-query-id={hit.__queryID}
      >
        <div className={styles['card-content']}>
          {hit.im_contenttype && (
            <ul className={styles['type-list']}>
              {hit.im_contenttype && <li>{hit.im_contenttype}</li>}
            </ul>
          )}
          {hit.title && <h3 className={styles.title}>{hit.title}</h3>}
          {hit.im_eventdate && (
            <span className={styles['event-date']}>
              {`${month} ${date.getDate()}, ${date.getFullYear()}`}
            </span>
          )}
        </div>
      </a>
    </div>
  );
}

type ObjectType = { [key: string]: boolean };

type SearchResultsProps = ComponentWithContextProps & {
  fields: {
    InstanceID: TextField;
    APIKey: TextField;
    IndexName: TextField;
  };
};

const ResourceCollection = (props: SearchResultsProps): JSX.Element => {
  const instanceId = props?.fields?.InstanceID?.value
    ? props?.fields?.InstanceID?.value.toString()
    : '';

  const apiKey = props?.fields?.APIKey?.value
    ? props?.fields?.APIKey?.value.toString()
    : '';

  const indexName = props?.fields?.IndexName?.value
    ? props?.fields?.IndexName?.value.toString()
    : '';

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
  const popularTopicsLabel = t ? t('search-popular-topics') : 'Popular topics';
  const contentTypeLabel = t ? t('search-resource-type') : 'Resource Type';
  const industryLabel = t ? t('search-industry') : 'Industry';
  const solutionsLabel = t ? t('search-solutions') : 'Solutions';
  const roleLabel = t ? t('search-role') : 'Role';
  const queryLabel = t ? t('search-prompt') : 'Search Query';
  const showMoreLabel = t ? t('search-load-more') : 'Load More';
  const resultsItemLabel = t ? t('search-results-items') : 'items';
  const filterButtonLabel = t ? t('search-filter-button') : 'Filter';
  const mobilePopupHeader = t ? t('search-popup-header') : 'Filters';
  const mobilePopupApplyLabel = t ? t('search-popup-apply-button') : 'Apply';
  const showPremiumLabel = t
    ? t('search-show-premium-content')
    : 'Premium content only';
  const srTypeResources = t ? t('search-result-type-resources') : 'resources';
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
  const defaultState: ObjectType = {
    topics: false,
    contentType: false,
    industry: false,
    solutions: false,
    role: false,
  };
  const [isActive, setIsActive] = useState<ObjectType>({ ...defaultState });
  const [filtering, setFiltering] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1280 });

  const handleClick = (category: string) => {
    if (isActive[category]) {
      setIsActive(defaultState);
    } else {
      defaultState[category] = !defaultState[category];
      setIsActive(defaultState);
    }
  };

  const handleFilterClick = () => {
    setFiltering(!filtering);
  };

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
          q: state.query,
          topics: state.refinementList?.im_topics,
          contenttype: state.refinementList?.im_contenttype,
          industry: state.refinementList?.im_industry,
          solutions: state.refinementList?.im_solutions,
          role: state.refinementList?.im_role,
          premiumcontent: state.refinementList?.im_premiumcontent,
        };
      },
      routeToState(routeState: {
        q: any;
        topics: any;
        contenttype: any;
        industry: any;
        solutions: any;
        role: any;
        premiumcontent: any;
      }) {
        return {
          [indexName]: {
            query: routeState.q,
            refinementList: {
              im_topics: routeState.topics,
              im_contenttype: routeState.contenttype,
              im_industry: routeState.industry,
              im_solutions: routeState.solutions,
              im_role: routeState.role,
              im_premiumcontent: routeState.premiumcontent,
            },
          },
        };
      },
    },
  };

  const mobileFiltersRef = useRef<HTMLDivElement>(null);
  const topicsSelect = useRef<HTMLDivElement>(null);
  const contentTypeSelect = useRef<HTMLDivElement>(null);
  const industrySelect = useRef<HTMLDivElement>(null);
  const solutionsSelect = useRef<HTMLDivElement>(null);
  const roleSelect = useRef<HTMLDivElement>(null);
  const desktopPremiumSelect = useRef<HTMLDivElement>(null);
  const conditionalRef = isMobile ? { ref: mobileFiltersRef } : {};

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobile
          ? topicsSelect.current &&
            !topicsSelect.current.contains(event.target as Node) &&
            mobileFiltersRef.current &&
            !mobileFiltersRef.current.contains(event.target as Node)
          : true &&
            topicsSelect.current &&
            !topicsSelect.current.contains(event.target as Node) &&
            contentTypeSelect.current &&
            !contentTypeSelect.current.contains(event.target as Node) &&
            industrySelect.current &&
            !industrySelect.current.contains(event.target as Node) &&
            solutionsSelect.current &&
            !solutionsSelect.current.contains(event.target as Node) &&
            roleSelect.current &&
            !roleSelect.current.contains(event.target as Node) &&
            desktopPremiumSelect.current &&
            !desktopPremiumSelect.current.contains(event.target as Node)
      ) {
        setIsActive({
          topics: false,
          contentType: false,
          industry: false,
          solutions: false,
          role: false,
        });
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isMobile]);

  return isEditing ? (
    <p>Search Disabled in Experience Editor</p>
  ) : (
    <div data-is-resource-header="true">
      {getAnchorTag(props)}
      <InstantSearch
        indexName={indexName}
        searchClient={searchClient}
        insights
        routing={routing}
      >
        <Configure filters={`im_searchresulttype:${srTypeResources}`} />
        <motion.div {...motionAttributes} className={styles['search-results']}>
          {/* https://www.algolia.com/doc/api-reference/widgets/search-box/react-hooks/#widget-param-classnames */}
          <div className={styles.header}>
            <div className={styles['header-container']}>
              <SearchBox
                placeholder={queryLabel}
                className={styles['search-input-container']}
              />
              <div className={styles.controls}>
                {/* https://www.algolia.com/doc/api-reference/widgets/refinement-list/react-hooks/#widget-param-classnames */}
                <div
                  ref={topicsSelect}
                  className={classNames(styles.multiselect, styles.main)}
                >
                  <div
                    onClick={() => handleClick('topics')}
                    className={classNames(
                      styles.select,
                      isActive.topics ? styles.active : ''
                    )}
                  >
                    {popularTopicsLabel}
                  </div>
                  <RefinementList
                    attribute="im_topics"
                    title={popularTopicsLabel}
                    className={classNames(
                      styles.options,
                      isActive.topics ? styles.active : styles.inactive
                    )}
                  />
                </div>
                <button
                  className={styles['filter-button']}
                  onClick={handleFilterClick}
                >
                  {filterButtonLabel}
                </button>
              </div>
            </div>
          </div>
          <div className={styles.results}>
            <div className={styles['stats-and-filters']} {...conditionalRef}>
              <div
                className={classNames(
                  styles.filters,
                  filtering ? styles.active : styles.inactive
                )}
              >
                <div className={styles['close-container']}>
                  <button
                    className={styles['close-button']}
                    onClick={handleFilterClick}
                  />
                </div>
                <h2 className={styles['popup-header']}>{mobilePopupHeader}</h2>
                {/* Toggle Refinement Styling https://www.algolia.com/doc/api-reference/widgets/toggle-refinement/react/ */}
                <ToggleRefinement
                  attribute="im_premiumcontent"
                  label={showPremiumLabel}
                  className={classNames(
                    styles['premium-content'],
                    styles.mobile
                  )}
                />
                <div className={styles['aux-multiselects']}>
                  <div
                    ref={contentTypeSelect}
                    className={classNames(
                      styles.multiselect,
                      styles.aux,
                      styles.first
                    )}
                  >
                    <div
                      onClick={() => handleClick('contentType')}
                      className={classNames(
                        styles.select,
                        styles.aux,
                        isActive.contentType ? styles.active : ''
                      )}
                    >
                      {contentTypeLabel}
                    </div>
                    <RefinementList
                      attribute="im_contenttype"
                      title={contentTypeLabel}
                      className={classNames(
                        styles.options,
                        styles.aux,
                        isActive.contentType ? styles.active : styles.inactive
                      )}
                    />
                  </div>
                  <div
                    ref={industrySelect}
                    className={classNames(styles.multiselect, styles.aux)}
                  >
                    <div
                      onClick={() => handleClick('industry')}
                      className={classNames(
                        styles.select,
                        styles.aux,
                        isActive.industry ? styles.active : ''
                      )}
                    >
                      {industryLabel}
                    </div>
                    <RefinementList
                      attribute="im_industries"
                      title={contentTypeLabel}
                      className={classNames(
                        styles.options,
                        styles.aux,
                        isActive.industry ? styles.active : styles.inactive
                      )}
                    />
                  </div>
                  <div
                    ref={solutionsSelect}
                    className={classNames(styles.multiselect, styles.aux)}
                  >
                    <div
                      onClick={() => handleClick('solutions')}
                      className={classNames(
                        styles.select,
                        styles.aux,
                        isActive.solutions ? styles.active : ''
                      )}
                    >
                      {solutionsLabel}
                    </div>
                    <RefinementList
                      attribute="im_solutions"
                      title={solutionsLabel}
                      className={classNames(
                        styles.options,
                        styles.aux,
                        isActive.solutions ? styles.active : styles.inactive
                      )}
                    />
                  </div>
                  <div
                    ref={roleSelect}
                    className={classNames(styles.multiselect, styles.aux)}
                  >
                    <div
                      onClick={() => handleClick('role')}
                      className={classNames(
                        styles.select,
                        styles.aux,
                        isActive.role ? styles.active : ''
                      )}
                    >
                      {roleLabel}
                    </div>
                    <RefinementList
                      attribute="im_professions"
                      title={roleLabel}
                      className={classNames(
                        styles.options,
                        styles.aux,
                        isActive.role ? styles.active : styles.inactive
                      )}
                    />
                  </div>
                </div>
                <button
                  className={styles['apply-button']}
                  onClick={handleFilterClick}
                >
                  {mobilePopupApplyLabel}
                </button>
                {/* Toggle Refinement Styling https://www.algolia.com/doc/api-reference/widgets/toggle-refinement/react/ */}
                <div ref={desktopPremiumSelect}>
                  <ToggleRefinement
                    onClick={() => handleClick('')}
                    attribute="im_premiumcontent"
                    label={showPremiumLabel}
                    className={classNames(
                      styles['premium-content'],
                      styles.desktop
                    )}
                  />
                </div>
              </div>
              <div className={styles.stats}>
                <Stats
                  translations={{
                    rootElementText({ nbHits }) {
                      return `${`${nbHits.toLocaleString()} ${resultsItemLabel}`} `;
                    },
                  }}
                />
                <CurrentRefinements
                  includedAttributes={[
                    'im_contenttype',
                    'im_topics',
                    'im_professions',
                    'im_solutions',
                    'im_industries',
                  ]}
                  className={styles.refinements}
                />
                <ClearRefinements
                  translations={{
                    resetButtonText: 'Clear All',
                  }}
                />
              </div>
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
        </motion.div>
      </InstantSearch>
    </div>
  );
};

export default withDatasourceCheck()<SearchResultsProps>(ResourceCollection);
