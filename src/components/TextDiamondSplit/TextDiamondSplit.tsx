import {
  Field,
  ImageField,
  RichText as JssRichText,
  Text,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { useEffect, useRef } from 'react';
import { ComponentProps } from 'lib/component-props';
import Tile from 'components/Tile/Tile';
import classNames from 'classnames';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import styles from '../TextDiamondSplit/TextDiamondSplit.module.css';
import { useMediaQuery } from 'react-responsive';

type DiamondProps = {
  fields: {
    Image: ImageField;
    DiamondgradientColor: {
      fields: {
        Value: TextField;
      };
    };
    DiamondBorder: {
      fields: {
        Value: TextField;
      };
    };
  };
};

type TextDiamondSplitProps = ComponentProps & {
  fields: {
    Headline: Field<string>;
    CopySections: Field<string>;
    Diamonds: DiamondProps[];
  };
};

const TextDiamondSplit = (props: TextDiamondSplitProps): JSX.Element => {
  const { fields } = props;
  const Headline = fields?.Headline;
  const CopySections = fields?.CopySections;
  const Diamonds = fields?.Diamonds;
  const { sitecoreContext } = useSitecoreContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const groupTwoRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  useEffect(() => {
    if (!contentRef.current || !groupTwoRef.current) return;

    if (isDesktop) {
      // const contentHeight =
      //   contentRef.current?.getBoundingClientRect().height || 0;
      // groupTwoRef.current.style.height = `${contentHeight}px`;
    } else {
      groupTwoRef.current.style.removeProperty('height');
    }
  }, [contentRef, groupTwoRef, isDesktop]);

  return !sitecoreContext.pageEditing && !fields ? (
    <></>
  ) : (
    <>
      {getAnchorTag(props)}
      <div
        className={classNames(
          styles['text-diamond-split'],
          'text-diamond-split'
        )}
      >
        <div className={styles.diamonds} data-group="one">
          {
            /* eslint-disable */
            // @ts-ignore
            Diamonds.filter((dprops, index) => index < 4).map(
              /* eslint-enable */
              (dprops: DiamondProps, index: number) => {
                const { fields } = dprops;
                const Image = fields?.Image;
                const DiamondgradientColor = fields?.DiamondgradientColor;
                const DiamondBorder = fields?.DiamondBorder;

                return (
                  <div key={index}>
                    <Tile
                      src={Image?.value?.src}
                      border={DiamondBorder?.fields?.Value?.value as string}
                      gradient={DiamondgradientColor?.fields?.Value?.value}
                    />
                  </div>
                );
              }
            )
          }
        </div>
        <div
          ref={groupTwoRef}
          className={classNames(styles.diamonds, 'diamonds')}
          data-group="two"
        >
          {
            /* eslint-disable */
            // @ts-ignore
            Diamonds.filter((dprops, index) => index > 3).map(
              /* eslint-enable */
              (dprops: DiamondProps, index: number) => {
                const { fields } = dprops;
                const Image = fields?.Image;
                const DiamondgradientColor = fields?.DiamondgradientColor;
                const DiamondBorder = fields?.DiamondBorder;

                return (
                  <div key={index}>
                    <Tile
                      src={Image?.value?.src}
                      border={DiamondBorder?.fields?.Value?.value as string}
                      gradient={DiamondgradientColor?.fields?.Value?.value}
                    />
                  </div>
                );
              }
            )
          }
        </div>
        <article className={styles.content} ref={contentRef}>
          {Headline?.value ? (
            <Text
              tag="h2"
              field={Headline}
              className={classNames('font-header-h2', styles.headline)}
            />
          ) : null}
          {CopySections?.value ? (
            <JssRichText
              data-rte
              className={classNames('font-list', styles['copy-sections'])}
              field={CopySections}
            />
          ) : null}
        </article>
      </div>
    </>
  );
};

export default withDatasourceCheck()<TextDiamondSplitProps>(TextDiamondSplit);
