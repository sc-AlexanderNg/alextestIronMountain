import {
  Field,
  ImageField,
  RichText as JssRichText,
  Link,
  LinkField,
  Text,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import Tile from 'components/Tile/Tile';
import classNames from 'classnames';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import styles from '../DiamondsTeaser/DiamondsTeaser.module.css';

type DiamondTile = {
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

type DiamondTeaserProps = ComponentProps & {
  fields: {
    Headline: Field<string>;
    Description: Field<string>;
    Button: LinkField;
    ButtonIcon: {
      fields: {
        Value: TextField;
      };
    };
    DiamondTiles: DiamondTile[];
  };
};

const DiamondTeaser = (props: DiamondTeaserProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const { fields } = props;
  const Headline = fields?.Headline;
  const Description = fields?.Description;
  const Button = fields?.Button;
  const ButtonIcon = fields?.ButtonIcon;
  const DiamondTiles = fields?.DiamondTiles;

  const flipDesignStyle =
    props?.params?.FlipDesign === '1' ? 'flip-design' : '';

  return !sitecoreContext.pageEditing && !fields ? (
    <></>
  ) : (
    <>
      {getAnchorTag(props)}
      <div
        data-rte
        className={classNames(
          styles['diamonds-teaser'],
          styles[`${flipDesignStyle}`]
        )}
      >
        <div className={styles.content}>
          {Headline?.value ? (
            <Text
              className={classNames('font-header-h2', styles.headline)}
              tag="h2"
              field={Headline}
            />
          ) : null}
          {Description?.value ? (
            <JssRichText
              data-rte
              className={classNames('font-list', styles.description)}
              field={Description}
            />
          ) : null}
          {Button?.value ? (
            <Link
              data-icon={ButtonIcon?.fields?.Value?.value}
              className={`${
                ButtonIcon?.fields?.Value?.value || Button?.value?.class
                  ? Button?.value?.class
                    ? Button?.value?.class
                    : 'btn-icon'
                  : 'btn-blue'
              }`}
              field={Button}
            />
          ) : null}
        </div>
        <div className={styles.diamonds}>
          {
            /* eslint-disable */
            // @ts-ignore
            DiamondTiles.filter((dprops, index) => index < 7).map(
              /* eslint-enable */
              (dprops, index) => {
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
        <div className={styles['small-diamonds']}>
          {
            /* eslint-disable */
            // @ts-ignore
            DiamondTiles.filter((dprops, index) => index >= 7).map(
              /* eslint-enable */
              (dprops, index) => {
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
      </div>
    </>
  );
};

export default withDatasourceCheck()<DiamondTeaserProps>(DiamondTeaser);
