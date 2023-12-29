import {
  ImageField,
  Image as JSSImage,
  RichText,
  RichTextField,
  TextField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { motion } from 'framer-motion';

interface DiamondProps {
  backgroundImage?: ImageField;
  border?: string;
  size?: number;
  gradient?: {
    fields: {
      Value: TextField;
    };
  };
  content?: RichTextField;
}

const Diamond = (props: DiamondProps) => {
  const { sitecoreContext } = useSitecoreContext();
  const motionAttributes = !sitecoreContext.pageEditing
    ? {
        variants: {
          hidden: { opacity: 0, translateY: '-100%' },
          show: { opacity: 1, translateY: 0 },
        },
        transition: { duration: 0.333, ease: 'easeInOut' },
      }
    : {};

  return (
    <motion.div
      {...motionAttributes}
      className="diamond"
      data-is-active={Boolean(Object.keys(props).length)}
      data-gradient={props.gradient?.fields?.Value?.value}
      data-border={props.border}
    >
      <div>
        {props.backgroundImage ? (
          <JSSImage field={props.backgroundImage} alt="" />
        ) : props.content ? (
          <RichText data-rte className={'font-list'} field={props.content} />
        ) : null}
      </div>
    </motion.div>
  );
};

export default Diamond;

export type { DiamondProps };
