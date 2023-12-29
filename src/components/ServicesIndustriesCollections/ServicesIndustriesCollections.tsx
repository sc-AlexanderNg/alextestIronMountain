import MiniCard, { TargetItem } from 'components/MiniCard/MiniCard';
import {
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentWithContextProps } from 'lib/component-props';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import { motion } from 'framer-motion';
import styles from './ServicesIndustriesCollections.module.css';
import { useI18n } from 'next-localization';
import { useState } from 'react';

type ServiceIndustriesCollectionProps = ComponentWithContextProps & {
  fields: {
    data: {
      fields: {
        headline: {
          jsonValue: {
            value: string;
          };
        };
        serviceSelection: { targetItems: TargetItem[] };
      };
    };
  };
};

const ServicesIndustriesCollections = (
  props: ServiceIndustriesCollectionProps
): JSX.Element => {
  const { fields } = props;

  const serviceSelectionSorteditems: TargetItem[] = [];

  fields?.data?.fields?.serviceSelection?.targetItems.forEach((element) => {
    const item = element;

    const title = element.shortTitle?.jsonValue?.value
      ? element.shortTitle
      : element.pageTitle?.jsonValue?.value
      ? element.pageTitle
      : element.metaPageTitle;

    item.title = title?.jsonValue?.value
      ? title?.jsonValue?.value.toString().trim()
      : '';

    serviceSelectionSorteditems.push(item);
  });

  const serviceSelection = serviceSelectionSorteditems.sort(
    (a, b) => a?.title?.localeCompare(b.title)
  );

  const [filteredCollection, setFilteredCollection] =
    useState(serviceSelection);
  const { t } = useI18n() || {};
  const searchLabel = t ? t('search-label') : 'Search...';
  const { sitecoreContext } = useSitecoreContext();
  const motionAttributes = !sitecoreContext.pageEditing
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: 'easeInOut' },
      }
    : {};

  const miniCard = {
    data: {
      fields: {
        railVariation: {
          value: '',
        },
        headline: {
          jsonValue: {
            value: '',
          },
        },
        serviceSelection: {
          targetItems: filteredCollection,
        },
      },
    },
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCollection = serviceSelection?.filter((card) => {
      const shortTitle = card?.shortTitle;
      const pageTitle = card?.pageTitle;
      const metaPageTitle = card?.metaPageTitle;
      const shortDescription = card?.shortDescription;
      const metaPageDescription = card?.metaPageDescription;

      const string = [
        shortTitle?.jsonValue?.value,
        pageTitle?.jsonValue?.value,
        metaPageTitle?.jsonValue?.value,
        shortDescription?.jsonValue?.value,
        metaPageDescription?.jsonValue?.value,
      ]
        .join('')
        .toLowerCase();

      let selection;

      if (string.includes(event.target.value.toLowerCase())) {
        selection = card;
      }

      return selection;
    });

    setFilteredCollection(newCollection);
  };

  return !sitecoreContext.pageEditing && !fields ? (
    <></>
  ) : (
    <>
      {getAnchorTag(props)}
      <div className={styles['services-collection-container']}>
        <section className={styles['services-collection']}>
          <motion.input
            {...motionAttributes}
            type="text"
            placeholder={searchLabel}
            onChange={(event) => handleInputChange(event)}
            className={styles.input}
          />
          <div className={styles['mini-card-container']}>
            <MiniCard {...props} fields={miniCard} />
          </div>
        </section>
      </div>
    </>
  );
};

export default withDatasourceCheck()<ServiceIndustriesCollectionProps>(
  ServicesIndustriesCollections
);
