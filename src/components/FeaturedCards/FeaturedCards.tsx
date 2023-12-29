import Card, { CardProps } from './Card';
import {
  ComponentParams,
  ComponentRendering,
  ImageField,
  Link,
  LinkField,
  RichTextField,
  Text,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Tile from 'components/Tile/Tile';
import classNames from 'classnames';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import { getTheme } from '../../helpers/ThemeHelper';
import { motion } from 'framer-motion';
import styles from './FeaturedCards.module.css';
import { useI18n } from 'next-localization';

export type TargetItem = {
  url: { path: string };
  pageTitle?: { jsonValue: TextField };
  shortTitle?: { jsonValue: TextField };
  shortDescription?: { jsonValue: RichTextField };
  longDescription?: { jsonValue: RichTextField };
  metaPageTitle?: { jsonValue: TextField };
  metaPageDescription?: { jsonValue: RichTextField };
  contentType?: {
    jsonValue: {
      fields: {
        Value: TextField;
      };
    };
  };
  resourceDate?: { jsonValue: TextField };
  resourceDateField?: Date;
  displayDate?: { value: boolean };
  image?: { jsonValue: ImageField };
  openGraphImageUrl?: { jsonValue: ImageField };
  isPremium?: { value: boolean };
  eventType?: {
    jsonValue: {
      fields: {
        Value: TextField;
      };
    };
  };
};

interface FeaturedCardsProps extends ComponentProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    data: {
      fields: {
        headline?: { jsonValue: TextField };
        button?: { jsonValue: LinkField };
        showDate?: { value: boolean };
        cards?: {
          targetItems: TargetItem[];
        };
      };
    };
  };
}

export const FeaturedCards = (props: FeaturedCardsProps): JSX.Element => {
  const fields = props?.fields?.data?.fields;
  const cards = fields?.cards;
  const button = fields?.button;
  const headline = fields?.headline;
  const showDate = fields?.showDate;
  const { t } = useI18n() || {};
  const premiumLabel = t ? t('featuredcard-premiumlabel') : 'Premium Content';
  const { sitecoreContext } = useSitecoreContext();
  const compName = props?.rendering?.componentName?.toLowerCase();
  const motionAttributesHeader = !sitecoreContext.pageEditing
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: 'easeInOut' },
      }
    : {};
  const theme = getTheme(props.params);

  const cardsSorteditems: TargetItem[] = [];

  cards?.targetItems.forEach((element) => {
    const date = new Date(
      element?.resourceDate?.jsonValue?.value
        ? element?.resourceDate?.jsonValue?.value
        : ''
    );

    element.resourceDateField = date;
    cardsSorteditems.push(element);
  });

  if (showDate?.value) {
    cardsSorteditems.sort((a, b) => {
      return a.resourceDateField && b.resourceDateField
        ? b.resourceDateField.getTime() - a.resourceDateField.getTime()
        : 0;
    });
  }

  if (!sitecoreContext.pageEditing && !fields) return <></>;

  return (
    <>
      {getAnchorTag(props)}
      <div className={styles['featured-cards-master-container']}>
        <div
          className={classNames(
            styles['featured-cards-container'],
            'featured-cards-container'
          )}
          data-mountains={theme}
          data-tabid={props?.params?.tabid}
        >
          <motion.section
            {...motionAttributesHeader}
            className={styles['featured-cards']}
          >
            {theme === 'diamonds' && (
              <Tile
                size="58px"
                border={'purple'}
                radius="8.43px"
                className={styles['tile-1']}
              />
            )}
            {theme === 'diamonds' && (
              <Tile
                size="142px"
                border={'light-blue'}
                radius="15px"
                className={styles['tile-2']}
              />
            )}
            {theme === 'diamonds' && (
              <Tile
                size="58px"
                gradient="green"
                radius="8.43px"
                className={styles['tile-3']}
              />
            )}
            {theme === 'diamonds' && (
              <Tile
                size="142px"
                border={'orange'}
                radius="15px"
                className={styles['tile-4']}
              />
            )}
            <div
              className={styles.header}
              data-has-headline={headline?.jsonValue.value ? 'true' : 'false'}
            >
              {headline?.jsonValue.value && (
                <Text
                  tag="h2"
                  field={headline?.jsonValue}
                  className={styles.headline}
                />
              )}
              {button?.jsonValue?.value?.text && (
                <Link
                  data-clickable-id={`viewmore-${compName}-details`}
                  data-clickable-text={button?.jsonValue?.value?.text}
                  data-clickable-href={button?.jsonValue?.value?.href}
                  field={button?.jsonValue}
                  className={classNames('btn-secondary', styles['desktop-cta'])}
                />
              )}
            </div>
            {cardsSorteditems && cardsSorteditems?.length > 0 && (
              <div className={styles.list}>
                {cardsSorteditems.map((item, index) => {
                  const url = item?.url;
                  const image = item?.image;
                  const contentType = item?.contentType?.jsonValue?.fields
                    ?.Value
                    ? item?.contentType
                    : item?.eventType;
                  const pageTitle = item?.pageTitle;
                  const shortTitle = item?.shortTitle;
                  const metaPageTitle = item?.metaPageTitle;
                  const resourceDate = item?.resourceDate;
                  const isPremium = item?.isPremium;
                  const longDescription = item?.longDescription;
                  const shortDescription = item?.shortDescription;
                  const metaPageDescription = item?.metaPageDescription;
                  const openGraphImageUrl = item?.openGraphImageUrl;
                  const displayDate = item?.displayDate;

                  const title = shortTitle?.jsonValue?.value
                    ? shortTitle
                    : pageTitle?.jsonValue?.value
                    ? pageTitle
                    : metaPageTitle;

                  const description = shortDescription?.jsonValue?.value
                    ? shortDescription
                    : longDescription?.jsonValue?.value
                    ? longDescription
                    : metaPageDescription;

                  const motionAttributes = !sitecoreContext.pageEditing
                    ? {
                        initial: { opacity: 0, y: (index + 1) * 30 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: true },
                        transition: { duration: 0.7, ease: 'easeInOut' },
                      }
                    : {};

                  const cardImage = image?.jsonValue?.value?.src
                    ? image?.jsonValue
                    : openGraphImageUrl?.jsonValue;

                  const data = {} as CardProps;

                  data.cardImage = cardImage;
                  data.compName = compName;
                  data.contentType = contentType;
                  data.description = description;
                  data.isPremium = isPremium;
                  data.premiumLabel = premiumLabel;
                  data.resourceDate = resourceDate;
                  data.title = title;
                  data.url = url;
                  data.showDate = showDate;
                  data.displayDate = displayDate;

                  return cards?.targetItems &&
                    cards?.targetItems?.length < 6 ? (
                    <motion.div
                      key={index}
                      className={styles.card}
                      {...motionAttributes}
                    >
                      <Card {...data}></Card>
                    </motion.div>
                  ) : (
                    <div key={index} className={styles.card}>
                      <Card {...data}></Card>
                    </div>
                  );
                })}
              </div>
            )}
            {button?.jsonValue?.value?.text && (
              <Link
                data-clickable-id={`${compName}-details`}
                data-clickable-text={button?.jsonValue?.value?.text}
                data-clickable-href={button?.jsonValue?.value?.href}
                field={button?.jsonValue}
                className={classNames(
                  theme === 'blue-mountain'
                    ? 'btn-primary-dark'
                    : 'btn-secondary',
                  styles['mobile-cta']
                )}
              />
            )}
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default withDatasourceCheck()<FeaturedCardsProps>(FeaturedCards);
