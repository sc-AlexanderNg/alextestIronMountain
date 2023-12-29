import {
  ComponentParams,
  ComponentRendering,
  ImageField,
  Image as JssImage,
  RichTextField,
  Text,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import ProfileModal from './ProfileModal';
import classNames from 'classnames';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import { motion } from 'framer-motion';
import showBackToTop from 'src/utils/showBackToTop';
import styles from './ProfileCards.module.css';
import { useState } from 'react';

export type BioProfile = {
  fields: {
    BioImage: ImageField;
    NameTitle: TextField;
    OrganizationTitle: TextField;
    Bio: RichTextField;
  };
};

interface ComponentProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    Headline: TextField;
    Description: TextField;
    Cards: BioProfile[];
    PopupLabel: TextField;
  };
}

const ProfileCards = (props: ComponentProps): JSX.Element => {
  const [selectedBio, setSelectedBio] = useState<null | BioProfile>(null);
  const { fields } = props;
  const Headline = fields?.Headline;
  const Description = fields?.Description;
  const Cards = fields?.Cards;
  const PopupLabel = fields?.PopupLabel;
  const { sitecoreContext } = useSitecoreContext();
  const compName = props?.rendering?.componentName?.toLowerCase();
  const motionAttributes = !sitecoreContext.pageEditing
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: 'easeInOut' },
      }
    : {};

  const handleCardClick = (index: number) => {
    setSelectedBio(Cards[index]);
  };

  const handlePopupClose = () => {
    showBackToTop();
    setSelectedBio(null);
  };

  return !sitecoreContext.pageEditing && !fields ? (
    <></>
  ) : (
    <>
      {getAnchorTag(props)}
      <div
        className={classNames(
          styles['profile-cards'],
          selectedBio ? styles['popup-active'] : ''
        )}
      >
        <motion.div {...motionAttributes} className={styles.container}>
          <div className={styles.headers}>
            <Text
              tag="h2"
              field={Headline}
              className={`font-header-h2 ${styles.headline}`}
            />
            <Text tag="h3" field={Description} className={styles.description} />
          </div>
          <div className={styles.cards}>
            {Cards.map(({ fields }, index) => {
              const BioImage = fields?.BioImage;
              const NameTitle = fields?.NameTitle;
              const OrganizationTitle = fields?.OrganizationTitle;

              return (
                <div
                  className={styles.card}
                  key={index}
                  data-clickable-id={`${compName}-details`}
                  data-clickable-text={BioImage?.value?.alt}
                  onClick={() => handleCardClick(index)}
                >
                  <div className={classNames(styles.cursor)}>
                    <Text
                      field={PopupLabel}
                      className={styles['cursor-text']}
                    />
                  </div>
                  <div className={styles['profile-image-container']}>
                    <JssImage
                      field={BioImage}
                      className={styles['profile-image']}
                    />
                  </div>
                  <div className={styles['short-bio']}>
                    <Text tag="h4" field={NameTitle} />
                    <Text tag="h5" field={OrganizationTitle} />
                    <Text
                      tag="span"
                      field={PopupLabel}
                      className={`btn-tertiary ${styles['cta-button']}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
        {selectedBio && (
          <ProfileModal
            isOpen={true}
            onClose={handlePopupClose}
            profile={selectedBio}
          />
        )}
      </div>
    </>
  );
};

export default withDatasourceCheck()<ComponentProps>(ProfileCards);
