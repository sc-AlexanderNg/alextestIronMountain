import Diamond, { DiamondProps } from 'components/Diamond/Diamond';
import {
  Field,
  RichText,
  RichTextField,
  Text,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Carousel from 'components/Carousel/Carousel';
import { ComponentProps } from 'lib/component-props';
import classNames from 'classnames';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import { motion } from 'framer-motion';
import styles from './HorizontalScrollDiamonds.module.css';

type DiamondColorField = {
  fields: {
    Value?: {
      value?: 'teal' | 'purple' | 'orange' | 'light-blue' | 'dark-blue';
    };
  };
};

interface DiamondDataProps {
  fields: {
    Title?: TextField | undefined;
    Description?: RichTextField | undefined;
    Image?: {
      value?: {
        src?: string | undefined | null;
        alt?: string | undefined | null;
      };
    };
    BorderColor?: {
      fields?: {
        Value?: {
          value?: string | undefined | null;
        };
      };
    };
  };
}

type HorizontalScrollDiamondsProps = ComponentProps & {
  fields: {
    Headline: Field<string>;
    Description: Field<string>;
    DiamondOneColor: DiamondColorField;
    DiamondTwoColor: DiamondColorField;
    DiamondThreeColor: DiamondColorField;
    DiamondFourColor: DiamondColorField;
    DiamondData: DiamondDataProps[];
  };
};

const getData = (props: DiamondDataProps) => {
  if (!props) {
    return;
  }

  const { fields } = props;
  const data = {} as DiamondProps;

  if (fields?.Image?.value?.src) {
    /* eslint-disable */
    // @ts-ignore
    data.backgroundImage = fields?.Image;
    /* eslint-enable */
  }

  if (fields?.Title?.value || fields?.Description?.value) {
    data.content = {
      value: `<h3>${fields?.Title?.value}</h3><p>${fields.Description?.value}</p>`,
    };
  }

  if (fields?.BorderColor?.fields?.Value?.value) {
    data.border = fields.BorderColor.fields.Value.value;
  }

  return data;
};

const HorizontalScrollDiamonds = (
  props: HorizontalScrollDiamondsProps
): JSX.Element => {
  const { fields } = props;
  const Headline = fields?.Headline;
  const Description = fields?.Description;
  const DiamondOneColor = fields?.DiamondOneColor;
  const DiamondTwoColor = fields?.DiamondTwoColor;
  const DiamondThreeColor = fields?.DiamondThreeColor;
  const DiamondFourColor = fields?.DiamondFourColor;
  const DiamondData = fields?.DiamondData;

  const { sitecoreContext } = useSitecoreContext();
  const motionAttributes = !sitecoreContext.pageEditing
    ? {
        animate: 'show',
        initial: 'hidden',
        variants: {
          show: {
            transition: {
              staggerChildren: 0.1,
              staggerDirection: -1,
            },
          },
        },
      }
    : {};

  return !sitecoreContext.pageEditing && !fields ? (
    <></>
  ) : (
    <>
      {getAnchorTag(props)}
      <div className={styles['horizontal-scroll-diamonds']}>
        <Carousel
          slideEntireCarousel={false}
          content={
            <div>
              {Headline?.value && (
                <Text className={styles.headline} tag="h3" field={Headline} />
              )}
              {Description?.value && (
                <RichText
                  data-rte
                  className={classNames(styles.description, 'font-list')}
                  field={Description}
                />
              )}
            </div>
          }
          disableFade={true}
        >
          {[
            /* eslint-disable */
            // @ts-ignore
            <motion.div key={1} className="diamond-grid" {...motionAttributes}>
              <Diamond />
              <Diamond />
              <Diamond />
              <Diamond />
              {/* @ts-ignore */}
              <Diamond gradient={DiamondOneColor} />
              <Diamond />
              <Diamond />
              <Diamond />
              <Diamond />
              <Diamond {...getData(DiamondData[0])} />
              <Diamond {...getData(DiamondData[1])} />
              <Diamond {...getData(DiamondData[2])} />
              <Diamond />
              <Diamond />
              {/* @ts-ignore */}
              <Diamond gradient={DiamondThreeColor} />
              <Diamond {...getData(DiamondData[3])} />
              {/* @ts-ignore */}
              <Diamond gradient={DiamondFourColor} />
              <Diamond />
              {/* @ts-ignore */}
              <Diamond gradient={DiamondTwoColor} />
              <Diamond {...getData(DiamondData[4])} />
              <Diamond {...getData(DiamondData[5])} />
              <Diamond {...getData(DiamondData[6])} />
              <Diamond />
              <Diamond />
              <Diamond {...getData(DiamondData[7])} />
              <Diamond {...getData(DiamondData[8])} />
              <Diamond />
              <Diamond />
              <Diamond />
              <Diamond />
            </motion.div>,
            <div className={styles.spacer} />,
            /* eslint-enable */
          ]}
        </Carousel>
      </div>
    </>
  );
};

export default withDatasourceCheck()<HorizontalScrollDiamondsProps>(
  HorizontalScrollDiamonds
);
