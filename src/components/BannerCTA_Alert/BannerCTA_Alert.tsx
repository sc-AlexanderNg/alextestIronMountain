import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  Image as JssImage,
  Link,
  LinkField,
  RichText,
  RichTextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import classNames from 'classnames';
import { getAnchorTag } from '../../helpers/AnchorHelper';
import { motion } from 'framer-motion';
import styles from './BannerCTA_Alert.module.css';
import { useState } from 'react';

interface ComponentProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    Text: RichTextField;
    Icon?: ImageField;
    CTA?: LinkField;
    IsAlert: Field<boolean>;
  };
}

const BannerCTA_Alert = (props: ComponentProps): JSX.Element => {
  const { fields } = props;
  const Text = fields?.Text;
  const Icon = fields?.Icon;
  const CTA = fields?.CTA;
  const IsAlert = fields?.IsAlert;
  const [isVisible, setIsVisible] = useState(true);
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

  const orientation = props?.params?.ContentOrientation
    ? JSON.parse(props?.params?.ContentOrientation)?.Value?.value
    : '';
  const BannerCTA_AlertStyle = props?.params?.Style
    ? JSON.parse(props?.params?.Style)?.Value?.value
    : '';

  const handleClick = () => {
    setIsVisible(false);
  };

  if (!sitecoreContext.pageEditing && !fields) return <></>;

  if (IsAlert && IsAlert.value === true) {
    return (
      <>
        {getAnchorTag(props)}
        <div>
          {isVisible && (
            <div
              className={classNames(
                styles['banner-cta'],
                styles[`${BannerCTA_AlertStyle}`],
                styles.alert
              )}
            >
              <div className={styles.container}>
                <div className={styles['sub-container']}>
                  {Icon?.value?.src && (
                    <div className={styles.icon}>
                      <JssImage field={Icon} />
                    </div>
                  )}
                  {Text && (
                    <RichText
                      data-rte
                      field={Text}
                      className={classNames('font-header-h5', styles.content)}
                    />
                  )}
                  {CTA?.value?.href && CTA?.value?.href?.length > 0 && (
                    <Link
                      data-clickable-id={`${compName}-details`}
                      data-clickable-text={CTA?.value?.text}
                      data-clickable-href={CTA?.value?.href}
                      field={CTA}
                    />
                  )}
                </div>
                <div onClick={handleClick} className={styles['close-button']} />
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <div
      className={classNames(
        styles['banner-cta'],
        styles[`${BannerCTA_AlertStyle}`],
        styles[`${orientation}`]
      )}
    >
      <motion.div {...motionAttributes} className={styles.container}>
        {Icon?.value?.src && (
          <div className={styles.icon}>
            <JssImage field={Icon} />
          </div>
        )}
        <RichText
          data-rte
          field={Text}
          className={classNames('font-header-h5', styles.content)}
        />
        {CTA?.value?.href && CTA?.value?.href?.length > 0 && (
          <Link
            data-clickable-id={`${compName}-details`}
            data-clickable-text={CTA?.value?.text}
            data-clickable-href={CTA?.value?.href}
            field={CTA}
            className="btn-secondary-dark"
          />
        )}
      </motion.div>
    </div>
  );
};

export default withDatasourceCheck()<ComponentProps>(BannerCTA_Alert);
