import {
  ComponentParams,
  ImageField,
  Link,
  LinkField,
  Text,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { getTheme } from '../../helpers/ThemeHelper';
import { motion } from 'framer-motion';
import styles from './HomePageHero.module.css';

interface HomePageHeroProps {
  rendering: {
    componentName: string;
    dataSource: string;
  };
  params: ComponentParams;
  fields: {
    PersonaImage: ImageField;
    Title: TextField;
    Description: TextField;
    Button: LinkField;
  };
}

const HomePageHero = (props: HomePageHeroProps): JSX.Element => {
  const { fields } = props;
  const PersonaImage = fields?.PersonaImage;
  const Title = fields?.Title;
  const Description = fields?.Description;
  const Button = fields?.Button;
  const { sitecoreContext } = useSitecoreContext();
  const compName = props?.rendering?.componentName?.toLowerCase();

  if (!sitecoreContext.pageEditing && !fields) return <></>;

  const backgroundStyle = {
    backgroundImage: `url('${PersonaImage?.value?.src}')`,
  };

  const motionAttributesOne = !sitecoreContext.pageEditing
    ? {
        initial: {
          opacity: 0,
          x:
            typeof document !== 'undefined' && document?.dir === 'rtl'
              ? 250
              : -250,
        },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: 'easeInOut' },
      }
    : {};
  const motionAttributesTwo = !sitecoreContext.pageEditing
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: 'easeInOut', delay: 0.7 },
      }
    : {};
  const motionAttributesThree = !sitecoreContext.pageEditing
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: 'easeInOut', delay: 1.4 },
      }
    : {};
  const motionAttributesFour = !sitecoreContext.pageEditing
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: 'easeInOut', delay: 2.1 },
      }
    : {};

  return (
    <div className={getTheme(props.params)}>
      <div className={styles['homepage-hero']}>
        <motion.div
          {...motionAttributesOne}
          className={styles['persona-image-container']}
          style={backgroundStyle}
        />
        <div className={styles['content-container']}>
          {Title?.value && (
            <motion.h1 {...motionAttributesTwo} className="font-header-xl">
              <Text field={Title} />
            </motion.h1>
          )}
          {Description?.value && (
            <motion.p {...motionAttributesThree} className="font-list">
              <Text field={Description} />
            </motion.p>
          )}
          {Button?.value?.href && (
            <motion.div {...motionAttributesFour}>
              <Link
                data-clickable-id={`${compName}-details`}
                data-clickable-text={props?.fields?.Button?.value?.text}
                data-clickable-href={props?.fields?.Button?.value?.href}
                data-icon={props?.fields?.Button?.value?.class}
                className="btn-tertiary"
                field={props?.fields?.Button}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<HomePageHeroProps>(HomePageHero);
