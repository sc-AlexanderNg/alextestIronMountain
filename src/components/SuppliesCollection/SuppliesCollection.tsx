/* eslint-disable @typescript-eslint/no-explicit-any */

import { Hit as AlgoliaHit, SearchClient } from 'instantsearch.js';
import {
  ClearRefinements,
  Configure,
  CurrentRefinements,
  InfiniteHits,
  InstantSearch,
  RefinementList,
  SearchBox,
} from 'react-instantsearch-hooks-web';
import {
  Placeholder,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentWithContextProps } from '../../lib/component-props';
import { SendEventForHits } from 'instantsearch.js/es/lib/utils';
import algoliasearch from 'algoliasearch/lite';
import classNames from 'classnames';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import { history } from 'instantsearch.js/es/lib/routers';
import { motion } from 'framer-motion';
import styles from './SuppliesCollection.module.css';
import { useI18n } from 'next-localization';
import { useState } from 'react';

type HitResult = {
  hit: AlgoliaHit<{
    url: string;
    name?: string;
    title?: string;
    description?: string;
    im_contenttype?: string;
    im_premiumcontent?: string;
    image?: string;
    im_category?: string;
    im_suppliesimage?: string;
  }>;
  sendEvent: SendEventForHits;
};

function Hit({ hit, sendEvent }: HitResult) {
  return (
    <div className={styles.card}>
      {hit.im_suppliesimage && (
        <a
          href={hit.url}
          className={styles['card-image-container']}
          onClick={() => sendEvent('click', hit, 'Result Clicked')}
          data-insights-object-id={hit.objectID}
          data-insights-position={hit.__position}
          data-insights-query-id={hit.__queryID}
        >
          <img
            src={hit.im_suppliesimage}
            alt={hit.title}
            className={styles['card-image']}
          />
        </a>
      )}
      <a
        href={hit.url}
        className={styles['card-content-link']}
        onClick={() => sendEvent('click', hit, 'Result Clicked')}
        data-insights-object-id={hit.objectID}
        data-insights-position={hit.__position}
        data-insights-query-id={hit.__queryID}
      >
        <div className={styles['card-content']}>
          {hit.im_category && (
            <ul className={styles['type-list']}>
              {hit.im_category && <li>{hit.im_category}</li>}
            </ul>
          )}
          {hit.title && <h3 className={styles.title}>{hit.title}</h3>}
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

  const { t } = useI18n() || {};
  const categoryLabel = t ? t('search-category') : 'Category';
  const subcategoryLabel = t ? t('search-subcategory') : 'Sub Category';
  const brandLabel = t ? t('search-brand') : 'Brand';
  const usecaseLabel = t ? t('search-usecase') : 'Use Case';
  const queryLabel = t ? t('supplies-prompt') : 'Search Supplies...';
  const showMoreLabel = t ? t('search-load-more') : 'Load More';
  // const resultsItemLabel = t ? t('search-results-items') : 'items';
  // const filterButtonLabel = t ? t('search-filter-button') : 'Filter';
  // const mobilePopupHeader = t ? t('search-popup-header') : 'Filters';
  // const mobilePopupApplyLabel = t ? t('search-popup-apply-button') : 'Apply';
  // const showPremiumLabel = t
  //   ? t('search-show-premium-content')
  //   : 'Premium content only';

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
  // const [filtering, setFiltering] = useState(false);

  const handleClick = (category: string) => {
    if (isActive[category]) {
      setIsActive(defaultState);
    } else {
      defaultState[category] = !defaultState[category];
      setIsActive(defaultState);
    }
  };

  // const handleFilterClick = () => {
  //   setFiltering(!filtering);
  // };

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
          category: state.refinementList?.im_category,
          subcategory: state.refinementList?.im_subcategory,
          brand: state.refinementList?.im_brand,
          usecase: state.refinementList?.im_usecase,
        };
      },
      routeToState(routeState: {
        q: any;
        category: any;
        subcategory: any;
        brand: any;
        usecase: any;
      }) {
        return {
          [indexName]: {
            query: routeState.q,
            refinementList: {
              im_category: routeState.category,
              im_subcategory: routeState.subcategory,
              im_brand: routeState.brand,
              im_usecase: routeState.usecase,
            },
          },
        };
      },
    },
  };

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
        <Configure filters="im_searchresulttype:supplies" />
        <motion.div {...motionAttributes} className={styles['search-results']}>
          {/* https://www.algolia.com/doc/api-reference/widgets/search-box/react-hooks/#widget-param-classnames */}
          <div className={styles.header}>
            <div className={styles['header-container']}>
              <SearchBox
                placeholder={queryLabel}
                className={styles['search-input-container']}
              />
              <div className={styles['aux-multiselects']}>
                <div
                  className={classNames(
                    styles.multiselect,
                    styles.aux,
                    styles.first
                  )}
                >
                  <div
                    onClick={() => handleClick('category')}
                    className={classNames(
                      styles.select,
                      styles.aux,
                      isActive.category ? styles.active : ''
                    )}
                  >
                    {categoryLabel}
                  </div>
                  <RefinementList
                    attribute="im_category"
                    title={categoryLabel}
                    limit={40}
                    className={classNames(
                      styles.options,
                      styles.aux,
                      isActive.category ? styles.active : styles.inactive
                    )}
                  />
                </div>
                <div className={classNames(styles.multiselect, styles.aux)}>
                  <div
                    onClick={() => handleClick('subcategory')}
                    className={classNames(
                      styles.select,
                      styles.aux,
                      isActive.subcategory ? styles.active : ''
                    )}
                  >
                    {subcategoryLabel}
                  </div>
                  <RefinementList
                    attribute="im_subcategory"
                    title={subcategoryLabel}
                    limit={40}
                    className={classNames(
                      styles.options,
                      styles.aux,
                      isActive.subcategory ? styles.active : styles.inactive
                    )}
                  />
                </div>
                <div className={classNames(styles.multiselect, styles.aux)}>
                  <div
                    onClick={() => handleClick('brand')}
                    className={classNames(
                      styles.select,
                      styles.aux,
                      isActive.brand ? styles.active : ''
                    )}
                  >
                    {brandLabel}
                  </div>
                  <RefinementList
                    attribute="im_brand"
                    title={brandLabel}
                    limit={40}
                    className={classNames(
                      styles.options,
                      styles.aux,
                      isActive.brand ? styles.active : styles.inactive
                    )}
                  />
                </div>
                <div className={classNames(styles.multiselect, styles.aux)}>
                  <div
                    onClick={() => handleClick('usecase')}
                    className={classNames(
                      styles.select,
                      styles.aux,
                      isActive.usecase ? styles.active : ''
                    )}
                  >
                    {usecaseLabel}
                  </div>
                  <RefinementList
                    attribute="im_usecase"
                    title={usecaseLabel}
                    limit={40}
                    className={classNames(
                      styles.options,
                      styles.aux,
                      isActive.usecase ? styles.active : styles.inactive
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.results}>
            <div className={styles['stats-and-filters']}>
              <div className={styles.stats}>
                <CurrentRefinements
                  includedAttributes={[
                    'im_category',
                    'im_subcategory',
                    'im_brand',
                    'im_usecase',
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
