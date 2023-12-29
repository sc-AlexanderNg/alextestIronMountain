/* eslint-disable @typescript-eslint/no-explicit-any */
import { Hit as AlgoliaHit, SearchClient } from 'instantsearch.js';
import {
  Configure,
  InfiniteHits,
  InstantSearch,
  RefinementList,
  Stats,
} from 'react-instantsearch-hooks-web';
import {
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentWithContextProps } from '../../lib/component-props';
import { SendEventForHits } from 'instantsearch.js/es/lib/utils';
import adjustDateToStandard from 'src/utils/adjustDateToStandard';
import algoliasearch from 'algoliasearch/lite';
import classNames from 'classnames';
import formatUtcDateString from 'src/utils/formatUtcDateString';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import { history } from 'instantsearch.js/es/lib/routers';
import { motion } from 'framer-motion';
import styles from './EventCollection.module.css';
import { useI18n } from 'next-localization';

type HitResult = {
  hit: AlgoliaHit<{
    url: string;
    name?: string;
    title?: string;
    description?: string;
    im_eventdate: number;
    im_eventdateend: number;
    im_eventtime?: string;
    im_eventlocation?: string;
    im_eventfeatured?: string;
    im_eventtype?: string;
    im_eventimage?: string;
  }>;
  sendEvent: SendEventForHits;
};

function Hit({ hit, sendEvent }: HitResult) {
  const { t } = useI18n() || {};
  const { sitecoreContext } = useSitecoreContext();
  const featuredContentLabel = t ? t('event-featured-label') : 'Featured';
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

  const startDate = adjustDateToStandard(new Date(hit.im_eventdate * 1000));
  const endDate = adjustDateToStandard(new Date(hit.im_eventdateend * 1000));

  const startMonth = months[startDate.getMonth()];
  //const endMonth = months[endDate.getMonth()];

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
        {hit.im_eventimage && (
          <img
            src={hit.im_eventimage}
            alt={hit.title}
            className={styles['card-image']}
          />
        )}
        {hit.im_eventfeatured && (
          <span className={styles['featured-container']}>
            <span className={styles['featured-icon']} />
            <span className={styles['featured-label']}>
              {featuredContentLabel}
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
          {hit.im_eventtype && (
            <span className={styles['event-type']}>{hit.im_eventtype}</span>
          )}
          {hit.title && <h3 className={styles.title}>{hit.title}</h3>}
          {hit.im_eventdate && (
            <span className={styles['event-date']}>
              {formatUtcDateString(
                startDate.toString(),
                sitecoreContext?.language
              )}
              {/* {`${startMonth} ${startDate.getDate()}, ${startDate.getFullYear()}`} */}
              {hit.im_eventtime && <span>, {hit.im_eventtime}</span>}
              {hit.im_eventdateend && (
                <span>
                  &nbsp;-&nbsp;
                  {/* {`${endMonth} ${endDate.getDate()}, ${endDate.getFullYear()}`} */}
                  {formatUtcDateString(
                    endDate.toString(),
                    sitecoreContext?.language
                  )}
                </span>
              )}
            </span>
          )}
          {hit.im_eventlocation && (
            <span className={styles['event-location']}>
              {hit.im_eventlocation}
            </span>
          )}
          {hit.im_eventdate && (
            <div className={styles['date-overlay']}>
              <span className={styles.day}>{startDate.getDate()}</span>
              <span className={styles.month}>{startMonth}</span>
            </div>
          )}
        </div>
      </a>
    </div>
  );
}

type ResourceCollectionProps = ComponentWithContextProps & {
  fields: {
    InstanceID: TextField;
    APIKey: TextField;
    IndexName: TextField;
    DisableInsights: boolean;
  };
};

const ResourceCollection = (props: ResourceCollectionProps): JSX.Element => {
  const instanceId = props?.fields?.InstanceID?.value
    ? props?.fields?.InstanceID?.value.toString()
    : '';

  const apiKey = props?.fields?.APIKey?.value
    ? props?.fields?.APIKey?.value.toString()
    : '';

  const indexName = props?.fields?.IndexName?.value
    ? props?.fields?.IndexName?.value.toString()
    : '';

  const browseMoreUrl = props?.params?.BrowseMoreUrl;
  const { t } = useI18n() || {};
  const showMoreLabel = t ? t('search-load-more') : 'Load More';
  const resultsItemLabel = t ? t('search-results-items') : 'items';
  const narrowByLabel = t ? t('search-narrow-by') : 'Narrow by';
  const browseMoreLabel = t
    ? t('search-browse-more')
    : 'Browse On-Demand Webinars';
  const srTypeEvents = t ? t('search-result-type-events') : 'events';
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
  const todayRaw = new Date();
  const today = new Date(
    todayRaw.getFullYear(),
    todayRaw.getMonth(),
    todayRaw.getDate() - 1
  );
  const unixToday = Math.floor(today.getTime() / 1000);
  const filter = `im_searchresulttype:${srTypeEvents} AND im_eventeffectivedate>${unixToday}`;

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
          eventtype: state.refinementList?.im_eventtype,
        };
      },
      routeToState(routeState: { eventtype: any }) {
        return {
          [indexName]: {
            refinementList: {
              im_eventtype: routeState.eventtype,
            },
          },
        };
      },
    },
  };

  return isEditing ? (
    <p>Search Disabled in Experience Editor</p>
  ) : (
    <div className={styles['event-collection-container']}>
      <motion.section
        {...motionAttributes}
        className={styles['event-collection']}
      >
        {getAnchorTag(props)}
        <InstantSearch
          indexName={indexName}
          searchClient={searchClient}
          insights={props?.fields?.DisableInsights ? true : undefined}
          routing={routing}
        >
          <Configure filters={filter} />
          <div className={styles.header}>
            <Stats
              translations={{
                rootElementText({ nbHits }) {
                  return `${`${nbHits.toLocaleString()} ${resultsItemLabel}`} `;
                },
              }}
              className={styles.stats}
            />
            <div className={styles['browse-more-container']}>
              <div className={styles['browse-more']}>
                <a href={browseMoreUrl}>{browseMoreLabel}</a>
                <div className={styles['browse-more-icon']} />
              </div>
            </div>
            {/* Toggle Refinement Styleing https://www.algolia.com/doc/api-reference/widgets/toggle-refinement/react/ */}
            <div
              className={classNames(styles['filter-container'], styles.desktop)}
            >
              <span className={styles['filter-label']}>{narrowByLabel}</span>
              <RefinementList
                attribute="im_eventtype"
                className={styles['filter-list']}
              />
            </div>
          </div>
          <div
            className={classNames(styles['filter-container'], styles.mobile)}
          >
            <span className={styles['filter-label']}>{narrowByLabel}</span>
            <RefinementList
              attribute="im_eventtype"
              className={styles['filter-list']}
            />
          </div>
          {/* Customize Refinements: https://www.algolia.com/doc/api-reference/widgets/current-refinements/react-hooks/#widget-param-classnames */}
          <InfiniteHits
            hitComponent={Hit}
            showPrevious={false}
            translations={{
              showMoreButtonText: showMoreLabel,
            }}
            className={styles.list}
          />
        </InstantSearch>
      </motion.section>
    </div>
  );
};

export default withDatasourceCheck()<ResourceCollectionProps>(
  ResourceCollection
);
