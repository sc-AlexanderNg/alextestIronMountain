import {
  ComponentParams,
  Field,
  Image,
  ImageField,
  Link as JssLink,
  LinkField,
  RichText,
  Text,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Tile from 'components/Tile/Tile';
import classNames from 'classnames';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import { getTheme } from '../../helpers/ThemeHelper';
import { motion } from 'framer-motion';
import styles from './IconCards.module.css';

type Cards = {
  fields: {
    Icon?: ImageField;
    Title: Field<string>;
    Description: Field<string>;
    Button?: LinkField;
  };
};

type IconCardsProps = ComponentProps & {
  params: ComponentParams;
  fields: {
    Headline?: Field<string>;
    Description?: Field<string>;
    CardsList: Cards[];
    CTA?: LinkField;
    BackgroundImage?: ImageField;
  };
};

const IconCards = (props: IconCardsProps): JSX.Element => {
  const { fields } = props;
  const Headline = fields?.Headline;
  const Description = fields?.Description;
  const BackgroundImage = fields?.BackgroundImage;
  const CTA = fields?.CTA;
  const CardsList = fields?.CardsList;
  const { sitecoreContext } = useSitecoreContext();
  const motionAttributes = !sitecoreContext.pageEditing
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: 'easeInOut' },
      }
    : {};
  const backgroundOption = getTheme(props.params);
  const compName = props?.rendering?.componentName?.toLowerCase();
  const IsTitleLeftAligned = props?.params?.IsTitleLeftAligned
    ? props?.params?.IsTitleLeftAligned
    : '0';
  const maxCardPerRow = props?.params?.MaxCardsPerRow;

  return !sitecoreContext.pageEditing && !fields ? (
    <></>
  ) : (
    <>
      {getAnchorTag(props)}
      <div
        className={classNames(
          styles[`${backgroundOption}`],
          styles['icon-cards-container']
        )}
        style={
          BackgroundImage?.value?.src &&
          backgroundOption === 'photo-with-overlay'
            ? {
                backgroundImage: `linear-gradient(
                    0deg,
                    rgb(20 71 125 / 80%) 0%,
                    rgb(20 71 125 / 80%) 100%
                  ), url('${BackgroundImage?.value?.src}')`,
              }
            : undefined
        }
      >
        <div
          className={styles['top-content']}
          data-has-description={Description?.value ? 'true' : 'false'}
        >
          {Headline?.value && (
            <div
              className={classNames(
                styles.header,
                backgroundOption === 'photo-with-overlay' && styles.dark
              )}
            >
              <Text
                tag="h2"
                field={Headline}
                className={classNames('font-header-h3', styles.headline)}
              />
              {Description?.value && (
                <div className={styles['top-description']}>
                  <RichText
                    data-rte
                    className={classNames('font-list', styles.description)}
                    field={Description}
                  />
                </div>
              )}
            </div>
          )}
        </div>
        <div
          className={classNames(
            styles['icon-cards'],
            styles[`${backgroundOption}`]
          )}
          data-tabid={props?.params?.tabid}
        >
          <motion.div
            {...motionAttributes}
            className={classNames(
              styles.container,
              IsTitleLeftAligned === '1'
                ? styles['left-aligned']
                : styles.centered
            )}
          >
            {backgroundOption === 'diamonds' && (
              <Tile
                size="58px"
                gradient="teal"
                radius="8.43px"
                className={styles['tile-1']}
              />
            )}
            {backgroundOption === 'diamonds' && (
              <Tile
                size="142px"
                border={'green'}
                radius="15px"
                className={styles['tile-2']}
              />
            )}
            {backgroundOption === 'diamonds' && (
              <Tile
                size="58px"
                gradient="purple"
                radius="8.43px"
                className={styles['tile-3']}
              />
            )}
            {backgroundOption === 'diamonds' && (
              <Tile
                size="142px"
                border={'orange'}
                radius="15px"
                className={styles['tile-4']}
              />
            )}

            <div className={styles.cards} data-cards-per-row={maxCardPerRow}>
              {CardsList &&
                CardsList?.map((card, index) => {
                  return (
                    <div className={styles.card} key={index}>
                      {card?.fields?.Icon && (
                        <Image
                          field={card?.fields?.Icon}
                          className={styles.icon}
                        />
                      )}
                      <div className={styles.content}>
                        <div className={styles['text-content']}>
                          <Text
                            tag="h3"
                            field={card?.fields?.Title}
                            className={classNames(
                              'font-header-h4',
                              styles['card-title']
                            )}
                          />
                          <RichText
                            data-rte
                            field={card?.fields?.Description}
                            className={classNames(
                              'font-body-sm',
                              'font-list',
                              styles['card-description']
                            )}
                          />
                        </div>
                        {card?.fields?.Button?.value.href && (
                          <JssLink
                            data-clickable-id={`${compName}-details`}
                            data-clickable-text={
                              card?.fields?.Button.value?.text
                            }
                            data-clickable-href={
                              card?.fields?.Button.value?.href
                            }
                            className="btn-secondary"
                            field={card?.fields?.Button}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
            {CTA?.value?.text && (
              <JssLink
                data-clickable-id={`viewmore-${compName}-details`}
                data-clickable-text={CTA?.value?.text}
                data-clickable-href={CTA?.value?.href}
                className={`${
                  CTA?.value?.class ? CTA?.value?.class : 'btn-primary'
                }`}
                field={CTA}
              />
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default withDatasourceCheck()<IconCardsProps>(IconCards);
