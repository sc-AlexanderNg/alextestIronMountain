import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  Image as JssImage,
  RichText,
  RichTextField,
  Text,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import classNames from 'classnames';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import { getTheme } from '../../helpers/ThemeHelper';
import { motion } from 'framer-motion';
import styles from './SideCallout.module.css';

interface ComponentProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    Icon?: ImageField;
    Title: Field<string>;
    Description: RichTextField;
  };
}

const SideCallout = (props: ComponentProps): JSX.Element => {
  const { fields } = props;
  const Title = fields?.Title;
  const Description = fields?.Description;
  const Icon = fields?.Icon;
  const { sitecoreContext } = useSitecoreContext();
  const motionAttributes = !sitecoreContext.pageEditing
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: 'easeInOut' },
      }
    : {};

  return !sitecoreContext.pageEditing && !fields ? (
    <></>
  ) : (
    <>
      {getAnchorTag(props)}
      <div className={styles['side-callout-container']}>
        <motion.div
          {...motionAttributes}
          className={classNames(
            styles['side-callout'],
            styles[`${getTheme(props.params)}`],
            Icon ? styles['has-images'] : ''
          )}
          data-theme={getTheme(props.params)}
          data-tabid={props?.params?.tabid}
        >
          {Icon && <JssImage className={styles.logo} field={Icon} />}
          <div className={styles['text-content']}>
            <Text tag="h2" field={Title} />
            <RichText
              data-rte
              field={Description}
              className={classNames(
                'font-body-sm',
                'font-list',
                styles.description
              )}
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default withDatasourceCheck()<ComponentProps>(SideCallout);
