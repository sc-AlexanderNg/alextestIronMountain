import {
  Field,
  ImageField,
  Image as JssImage,
  LinkField,
  Text,
  TextField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

import BreadCrumb from 'components/BreadCrumb/BreadCrumb';
import { ComponentProps } from 'lib/component-props';
import { TagField } from 'src/types/TagField';
import adjustDateToStandard from 'src/utils/adjustDateToStandard';
import formatUtcDateString from 'src/utils/formatUtcDateString';
import { getPublicUrl } from '@sitecore-jss/sitecore-jss-nextjs/utils';
import { motion } from 'framer-motion';
import styles from './ResourceHero.module.css';
import { useI18n } from 'next-localization';

type AuthorFieldLink = {
  fields: {
    AuthorName: TextField;
    TitleOrganization: TextField;
    AuthorPhoto: ImageField;
  };
};

type ResourceHeroProps = ComponentProps & {
  fields: {
    PageTitle: TextField;
    LongDescription: TextField;
    ContentType: TagField;
    Author?: AuthorFieldLink;
    ReadTime: TextField;
    Image: ImageField;
    ResourceDate: Field<string>;
    ResourceDownload?: LinkField;
  };
};

const ResourceHero = (props: ResourceHeroProps): JSX.Element => {
  const { t } = useI18n() || {};
  const downloadLabel = t ? t('resource-download-header') : 'Download Resource';
  const minsLabel = t ? t('resource-readtime-mins') : 'min read';
  const { fields } = props;
  const PageTitle = fields?.PageTitle;
  const ContentType = fields?.ContentType;
  const LongDescription = fields?.LongDescription;
  const Image = fields?.Image;
  const ResourceDownload = fields?.ResourceDownload;
  const ReadTime = fields?.ReadTime;
  const ResourceDate = fields?.ResourceDate;
  const Author = fields?.Author;
  const category = ContentType?.fields?.Value?.value;
  const downloadUrl = ResourceDownload?.value?.href;
  const publicUrl = getPublicUrl();
  const { sitecoreContext } = useSitecoreContext();

  let date = '';

  if (ResourceDate?.value) {
    const baseDate = adjustDateToStandard(new Date(ResourceDate.value));

    date = formatUtcDateString(baseDate.toString(), sitecoreContext?.language);
  }

  const compName = 'resourcehero';
  const authorPhoto = Author?.fields.AuthorPhoto.value;
  const motionAttributes = !sitecoreContext.pageEditing
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7 },
      }
    : {};

  const authorSchemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: PageTitle?.value,
    image: [Image?.value?.src],
    datePublished: ResourceDate?.value,
    dateModified: ResourceDate?.value,
    author: [
      {
        '@type': 'Person',
        name: Author?.fields?.AuthorName?.value,
      },
    ],
  };

  const articleSchemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    description: LongDescription?.value,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': publicUrl + String(sitecoreContext?.itemPath),
    },
    author: {
      '@type': 'Organization',
      name: Author?.fields?.AuthorName?.value,
      url: publicUrl,
    },
    dateModified: ResourceDate?.value,
    datePublished: ResourceDate?.value,
    headline: PageTitle?.value,
  };

  return !sitecoreContext.pageEditing && !fields ? (
    <></>
  ) : (
    <div>
      <BreadCrumb />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchemaMarkup) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchemaMarkup),
        }}
      />
      <div className={styles['resource-hero-container']}>
        <motion.div {...motionAttributes} className={styles['resource-hero']}>
          <div className={styles.head}>
            <Text field={PageTitle} className={styles.heading} tag="h2" />
            <div className={styles.category}>{category}</div>
          </div>
          <div className={styles.layout}>
            <div className={styles.details}>
              <Text
                field={LongDescription}
                className={styles.description}
                tag="p"
              />
              {authorPhoto && (
                <div className={styles['author-layout']}>
                  <div>
                    <div className={styles['author-photo-container']}>
                      <JssImage
                        field={Author?.fields?.AuthorPhoto}
                        className={styles['author-photo']}
                      />
                    </div>
                  </div>
                  <div>
                    <Text
                      tag="span"
                      field={Author?.fields.AuthorName}
                      className={styles['author-name']}
                    />
                    <Text
                      tag="div"
                      field={Author?.fields.TitleOrganization}
                      className={styles['author-organization']}
                    />
                  </div>
                </div>
              )}
              <div className={styles.meta}>
                <span
                  data-resource-date
                  data-resource-date-raw={
                    ResourceDate.value !== ''
                      ? Math.floor(
                          new Date(ResourceDate.value).getTime() / 1000
                        )
                      : undefined
                  }
                >
                  {date}
                </span>
                <span>
                  {ReadTime && ReadTime.value && <Text field={ReadTime} />}
                  &nbsp;{minsLabel}
                </span>
                <div className={styles['btn-container']}>
                  {downloadUrl && (
                    <a
                      data-clickable-id={`${compName}-details`}
                      data-clickable-text={downloadLabel}
                      data-clickable-href={downloadUrl}
                      className="btn-download"
                      data-gated-download
                      href={downloadUrl}
                      target="_blank"
                    >
                      {downloadLabel}
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className={styles['image-container']}>
              {Image && (
                <JssImage
                  data-image-type="resource-hero"
                  field={Image}
                  className={styles.image}
                />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResourceHero;
