import {
  ComponentParams,
  ComponentRendering,
  ImageField,
  Image as JssImage,
  Text,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { getAnchorTag } from 'src/helpers/AnchorHelper';
import { getTheme } from 'src/helpers/ThemeHelper';
import { motion } from 'framer-motion';
import styles from './LogoFarm.module.css';

type LogosImages = {
  fields: {
    LogoImage: ImageField;
  };
};

interface ComponentProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    Title: TextField;
    Description: TextField;
    Logos: LogosImages[];
  };
}

const LogoFarm = (props: ComponentProps): JSX.Element => {
  const { fields } = props;
  const Title = fields?.Title;
  const Description = fields?.Description;
  const Logos = fields?.Logos;
  const { sitecoreContext } = useSitecoreContext();
  const motionAttributes = !sitecoreContext.pageEditing
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: 'easeInOut' },
      }
    : {};
  const displayTitleAndDescription =
    Title?.value !== '' || Description?.value !== '';

  return !sitecoreContext.pageEditing && !fields ? (
    <></>
  ) : (
    <>
      {getAnchorTag(props)}
      <motion.div
        {...motionAttributes}
        className={styles['logo-farm']}
        data-has-text={Title?.value || Description?.value ? 'true' : 'false'}
      >
        {displayTitleAndDescription && (
          <div className={styles.content}>
            <Text tag="h2" className={styles.title} field={Title} />
            <Text tag="p" className={styles.description} field={Description} />
          </div>
        )}
        <div className={styles.logos} data-bg-color={getTheme(props.params)}>
          <div
            className={styles.container}
            data-has-at-least-5={Logos.length < 5 ? 'false' : 'true'}
          >
            <ul className={styles.list}>
              {Logos.map((element, index: number) => (
                <li key={index}>
                  <JssImage field={element.fields.LogoImage} />
                </li>
              ))}
            </ul>
            <ul className={styles.list}>
              {Logos.map((element, index: number) => (
                <li key={index}>
                  <JssImage field={element.fields.LogoImage} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default withDatasourceCheck()<ComponentProps>(LogoFarm);
