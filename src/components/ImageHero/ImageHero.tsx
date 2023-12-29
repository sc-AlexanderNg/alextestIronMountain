import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  Image as JssImage,
  Link,
  LinkField,
  Text,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import BreadCrumb from 'components/BreadCrumb/BreadCrumb';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import styles from './ImageHero.module.css';

interface RouteFields {
  [key: string]: unknown;
  PageTitle?: Field<string>;
}

interface ComponentProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    Background: ImageField;
    Eyebrow: TextField;
    Description: TextField;
    Button: LinkField;
    ButtonIcon: {
      fields: {
        Value: TextField;
      };
    };
  };
}

const ImageHero = (props: ComponentProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const context = sitecoreContext.route?.fields as RouteFields;
  const Button = props?.fields?.Button;
  const ButtonIcon = props?.fields?.ButtonIcon;
  const compName = props?.rendering?.componentName?.toLowerCase();
  const motionAttributes = !sitecoreContext.pageEditing
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: 'easeInOut' },
      }
    : {};
  const shortenedHeroClass = props?.params?.ShortenedHero
    ? 'shortened-hero'
    : '';

  return (
    <div>
      <BreadCrumb />
      <motion.div
        {...motionAttributes}
        className={classNames(
          styles['image-hero'],
          styles[`${shortenedHeroClass}`]
        )}
      >
        <JssImage className={styles.image} field={props?.fields?.Background} />
        <div className={styles['content-container']}>
          <div className={styles.content}>
            <Text
              className={styles['sub-title']}
              tag="h4"
              field={props?.fields?.Eyebrow}
            />
            <Text
              className={classNames('font-header-h1', styles.title)}
              tag="h1"
              field={context?.PageTitle}
            />
            <Text
              className={styles.description}
              tag="p"
              field={props?.fields?.Description}
            />
            {props?.fields?.Button && props?.fields?.Button?.value?.href ? (
              <Link
                data-clickable-id={`${compName}-details`}
                data-clickable-text={props?.fields?.Button?.value?.text}
                data-clickable-href={props?.fields?.Button?.value?.href}
                data-icon={ButtonIcon?.fields?.Value?.value}
                className={`${
                  ButtonIcon?.fields?.Value?.value || Button?.value?.class
                    ? Button?.value?.class
                      ? Button?.value?.class
                      : 'btn-icon'
                    : 'btn-primary'
                }`}
                field={props?.fields?.Button}
              />
            ) : null}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default withDatasourceCheck()<ComponentProps>(ImageHero);
