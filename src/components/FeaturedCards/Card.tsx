import {
  ImageField,
  Image as JssImage,
  RichText,
  RichTextField,
  Text,
  TextField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

import classNames from 'classnames';
import formatUtcDateString from 'src/utils/formatUtcDateString';
import styles from './FeaturedCards.module.css';

interface CardProps {
  cardImage?: ImageField;
  url: { path: string };
  compName?: string;
  isPremium:
    | {
        value: boolean;
      }
    | undefined;
  title:
    | {
        jsonValue: TextField;
      }
    | undefined;
  premiumLabel: string;
  description:
    | {
        jsonValue: RichTextField;
      }
    | undefined;
  displayDate:
    | {
        value: boolean;
      }
    | undefined;

  resourceDate:
    | {
        jsonValue: TextField;
      }
    | undefined;
  contentType?: {
    jsonValue: {
      fields: {
        Value: TextField;
      };
    };
  };
  showDate?: {
    value: boolean;
  };
}

const Card = (props: CardProps) => {
  const { sitecoreContext } = useSitecoreContext();

  return (
    <>
      {props.cardImage?.value && (
        <a
          href={props.url?.path}
          className={styles['card-image-container']}
          data-clickable-id={`${props.compName}-details`}
          data-clickable-text={
            props.title?.jsonValue.value
              ? props.title?.jsonValue.value
              : props.cardImage?.value?.alt
          }
          data-clickable-href={props.url?.path}
        >
          <JssImage field={props.cardImage} className={styles['card-image']} />
          {props.isPremium?.value && (
            <span className={styles['premium-container']}>
              <span className={styles['premium-icon']} />
              <span className={styles['premium-label']}>
                {props.premiumLabel}
              </span>
            </span>
          )}
        </a>
      )}
      <a
        href={props.url?.path}
        className={styles['card-content-link']}
        data-clickable-id={`${props.compName}-details`}
        data-clickable-text={
          props.title?.jsonValue.value
            ? props.title?.jsonValue.value
            : props.cardImage?.value?.alt
        }
        data-clickable-href={props.url?.path}
      >
        <div className={styles['card-content']}>
          {props.contentType?.jsonValue?.fields?.Value?.value && (
            <Text
              tag="span"
              field={props.contentType?.jsonValue?.fields?.Value}
              className={styles['content-type']}
            />
          )}
          {props.title?.jsonValue && (
            <Text
              tag="h3"
              field={props.title?.jsonValue}
              className={styles.title}
              data-has-content-type={
                props.contentType?.jsonValue?.fields?.Value?.value
                  ? 'true'
                  : 'false'
              }
            />
          )}
          {props.description && (
            <RichText
              data-rte
              field={props.description?.jsonValue}
              className={classNames('font-list', styles.description)}
            />
          )}
          {(props.showDate?.value || props?.displayDate?.value) &&
            props.resourceDate?.jsonValue?.value &&
            props.resourceDate?.jsonValue?.value !== '0001-01-01T00:00:00Z' && (
              <div className={styles.date}>
                {formatUtcDateString(
                  props.resourceDate?.jsonValue?.value.toString(),
                  sitecoreContext?.language
                )}
              </div>
            )}
        </div>
      </a>
    </>
  );
};

export default Card;

export type { CardProps };
