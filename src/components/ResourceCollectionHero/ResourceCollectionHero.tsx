import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  Image as JssImage,
  RichText,
  RichTextField,
  Text,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import BreadCrumb from 'components/BreadCrumb/BreadCrumb';
import classNames from 'classnames';
import formatUtcDateString from 'src/utils/formatUtcDateString';
import { getTheme } from '../../helpers/ThemeHelper';
import { motion } from 'framer-motion';
import styles from './ResourceCollectionHero.module.css';

export type ContentTypeFieldLink = {
  fields: {
    Value: {
      value: string;
    };
  };
};

type DisplayDateType = { value: boolean };

export type TargetItem = {
  url: { path: string };
  pageTitle?: { jsonValue: TextField };
  shortTitle?: { jsonValue: TextField };
  shortDescription?: { jsonValue: RichTextField };
  longDescription?: { jsonValue: RichTextField };
  metaPageTitle?: { jsonValue: TextField };
  metaPageDescription?: { jsonValue: RichTextField };
  contentType?: { jsonValue: ContentTypeFieldLink };
  resourceDate?: { jsonValue: Field<string> };
  resourceDateField?: Date;
  displayDate?: DisplayDateType;
  image?: { jsonValue: ImageField };
  openGraphImageUrl?: { jsonValue: ImageField };
};

interface ResourceCollectionHeroProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    data: {
      fields: {
        headline?: TextField;
        showDate?: { value: boolean };
        resources?: {
          targetItems: TargetItem[];
        };
      };
    };
  };
}
const ResourceCollectionHero = (
  props: ResourceCollectionHeroProps
): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const motionAttributes = !sitecoreContext.pageEditing
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: 'easeInOut' },
      }
    : {};

  const fields = props?.fields?.data?.fields;
  const headline = fields?.headline;
  const showDate = fields?.showDate;
  const resources = fields?.resources?.targetItems;

  const resourcesSorteditems: TargetItem[] = [];

  resources?.forEach((element) => {
    const date = new Date(
      element?.resourceDate?.jsonValue?.value
        ? element?.resourceDate?.jsonValue?.value
        : ''
    );

    element.resourceDateField = date;
    resourcesSorteditems.push(element);
  });

  if (showDate?.value) {
    resourcesSorteditems.sort((a, b) => {
      return a.resourceDateField && b.resourceDateField
        ? b.resourceDateField.getTime() - a.resourceDateField.getTime()
        : 0;
    });
  }

  return !sitecoreContext.pageEditing && !fields ? (
    <></>
  ) : (
    <div>
      <BreadCrumb />
      <div className={styles['resource-collection-hero-master-container']}>
        <div
          className={styles['resource-collection-hero-container']}
          data-mountains={getTheme(props.params)}
        >
          <motion.div
            {...motionAttributes}
            className={styles['resource-collection-hero']}
          >
            {headline?.value && (
              <Text tag="h2" field={headline} className={styles.headline} />
            )}
            {resources && resources?.length > 0 && (
              <div
                className={styles.list}
                data-card-number={resources?.length > 4 ? 4 : resources.length}
              >
                {resourcesSorteditems?.slice(0, 4).map((item, i) => {
                  const url = item?.url;
                  const image = item?.image;
                  const openGraphImageUrl = item?.openGraphImageUrl;
                  const pageTitle = item?.pageTitle;
                  const shortTitle = item?.shortTitle;
                  const longDescription = item?.longDescription;
                  const shortDescription = item?.shortDescription;
                  const metaPageTitle = item?.metaPageTitle;
                  const metaPageDescription = item?.metaPageDescription;
                  const resourceDate = item?.resourceDate;
                  const displayDate = item?.displayDate;
                  const contentType = item?.contentType;

                  const cardImage = image?.jsonValue
                    ? image
                    : openGraphImageUrl;
                  const title = shortTitle?.jsonValue?.value
                    ? shortTitle
                    : pageTitle?.jsonValue?.value
                    ? pageTitle
                    : metaPageTitle;
                  const description = longDescription?.jsonValue
                    ? longDescription
                    : shortDescription?.jsonValue
                    ? shortDescription
                    : metaPageDescription;
                  const isDisplayDate = displayDate?.value;
                  const cardLink = url?.path;
                  const compName = 'resourcecollectionhero';

                  return (
                    <div className={styles.card} key={i}>
                      {cardImage?.jsonValue && (
                        <a
                          data-clickable-id={`${compName}-details`}
                          data-clickable-text={cardImage?.jsonValue?.value?.alt}
                          data-clickable-href={cardLink}
                          href={cardLink}
                          className={styles['card-image-container']}
                        >
                          <JssImage
                            field={cardImage?.jsonValue}
                            className={styles['card-image']}
                          />
                        </a>
                      )}

                      <a
                        data-clickable-id={`${compName}-details`}
                        data-clickable-href={cardLink}
                        data-clickable-text={title?.jsonValue?.value}
                        href={cardLink}
                        className={styles['card-content-link']}
                      >
                        <div className={styles['card-content']}>
                          {contentType &&
                            contentType?.jsonValue?.fields?.Value?.value && (
                              <Text
                                tag="span"
                                field={contentType?.jsonValue?.fields?.Value}
                                className={styles['content-type']}
                              />
                            )}
                          {title && (
                            <Text
                              tag="h3"
                              field={title?.jsonValue}
                              className={styles.title}
                            />
                          )}
                          {description && (
                            <RichText
                              data-rte
                              field={description.jsonValue}
                              className={classNames(
                                'font-body-sm',
                                'font-list',
                                styles.description
                              )}
                            />
                          )}
                          {resourceDate &&
                            resourceDate?.jsonValue?.value &&
                            showDate?.value &&
                            isDisplayDate && (
                              <div className={styles.date}>
                                {formatUtcDateString(
                                  resourceDate?.jsonValue?.value,
                                  sitecoreContext?.language
                                )}
                              </div>
                            )}
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<ResourceCollectionHeroProps>(
  ResourceCollectionHero
);
