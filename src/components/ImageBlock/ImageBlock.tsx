import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  Image as JssImage,
  Link as JssLink,
  LinkField,
  Text,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { getAnchorTag } from 'src/helpers/AnchorHelper';
import { motion } from 'framer-motion';
import styles from './ImageBlock.module.css';

interface ComponentProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    Image: ImageField;
    Link: LinkField;
    ImageCaption: Field<string>;
  };
}

const ImageBlock = (props: ComponentProps): JSX.Element => {
  const { fields } = props;
  const Image = fields?.Image;
  const Link = fields?.Link;
  const ImageCaption = fields?.ImageCaption;
  const { sitecoreContext } = useSitecoreContext();
  const imageType = props?.params?.ImageType
    ? JSON.parse(props?.params?.ImageType)?.Value?.value
    : '';
  const compName = props?.rendering?.componentName?.toLowerCase();

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
      <motion.div
        {...motionAttributes}
        className={styles.image}
        data-imagetype={imageType}
        data-tabid={props?.params?.tabid}
      >
        {Link?.value?.href ? (
          <JssLink
            field={Link}
            data-clickable-id={`${compName}-details`}
            data-clickable-text={
              Link?.value?.text ? Link?.value?.text : Image?.value?.alt
            }
            data-clickable-href={Link?.value?.href}
          >
            <JssImage className={styles.img} field={Image} />
          </JssLink>
        ) : (
          <JssImage className={styles.img} field={Image} />
        )}
        {ImageCaption && <Text tag="p" field={ImageCaption} />}
      </motion.div>
    </>
  );
};

export default withDatasourceCheck()<ComponentProps>(ImageBlock);
