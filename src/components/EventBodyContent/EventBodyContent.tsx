import {
  Placeholder,
  RichText,
  RichTextField,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentWithContextProps } from 'lib/component-props';
import MiniCard from 'components/MiniCard/MiniCard';
import { TargetItem } from 'components/MiniCard/MiniCard';
import classNames from 'classnames';
import styles from './EventBodyContent.module.css';
import { useI18n } from 'next-localization';

export type EventBodyContentProps = ComponentWithContextProps & {
  fields: {
    data: {
      fields: {
        eventContent?: {
          jsonValue: RichTextField;
        };
        relatedPages?: {
          targetItems: TargetItem[];
        };
      };
    };
  };
};

const EventBodyContent = (props: EventBodyContentProps): JSX.Element => {
  const { t } = useI18n() || {};
  const featuredPagesLabel = t
    ? t('resource-featured-services')
    : 'Featured services';
  const miniCard = {
    data: {
      fields: {
        headline: {
          jsonValue: {
            value:
              props?.fields?.data?.fields?.relatedPages?.targetItems.length &&
              props?.fields?.data?.fields?.relatedPages?.targetItems.length > 0
                ? featuredPagesLabel
                : '',
          },
        },
        railVariation: {
          value: 'Right',
        },
        serviceSelection: {
          targetItems:
            props?.fields?.data?.fields?.relatedPages?.targetItems &&
            props?.fields?.data?.fields?.relatedPages?.targetItems.length > 0
              ? props?.fields?.data?.fields?.relatedPages?.targetItems
              : undefined,
        },
      },
    },
  };

  return (
    <>
      <div id="event-body-content">
        <div
          data-proportions="70-30"
          data-nested="false"
          className={styles['two-column']}
        >
          <div>
            <RichText
              data-rte
              className={classNames('font-list', styles['event-body-content'])}
              field={props?.fields?.data?.fields?.eventContent?.jsonValue}
            />
            <Placeholder
              name="event-left-content"
              rendering={props.rendering}
            />
          </div>
          <div>
            <MiniCard {...props} fields={miniCard}></MiniCard>
            <Placeholder name="event-right-rail" rendering={props.rendering} />
          </div>
        </div>
        <Placeholder name="event-bottom" rendering={props.rendering} />
      </div>
    </>
  );
};

export default EventBodyContent;
