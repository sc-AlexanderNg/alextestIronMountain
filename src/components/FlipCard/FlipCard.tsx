import {
  Field,
  Image,
  ImageField,
  RichText,
  RichTextField,
  Text,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import classNames from 'classnames';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import styles from './FlipCard.module.css';
import { useState } from 'react';

type CardsType = {
  fields: {
    Title: Field<string>;
    Icon?: ImageField;
    DescriptionofFront: Field<string>;
    DescriptionofBack: RichTextField;
    FlipText: Field<string>;
  };
};

type FlipCardProps = ComponentProps & {
  fields: {
    Headline: Field<string>;
    Description: Field<string>;
    Cards: CardsType[];
  };
};

const FlipCard = (props: FlipCardProps): JSX.Element => {
  const { fields } = props;
  const Headline = fields?.Headline;
  const Description = fields?.Description;
  const maxCardPerRow = props?.params?.MaxCardsPerRow
    ? JSON.parse(props?.params?.MaxCardsPerRow)
    : '';
  const Cards = fields?.Cards;
  const { sitecoreContext } = useSitecoreContext();
  const [isFlipped, setIsFlipped] = useState<{ [key: number]: boolean }>({});

  const handleOnClick = (index: number) => {
    const state = { ...isFlipped };

    state[index] = !state[index];
    setIsFlipped(state);
  };

  if (!sitecoreContext.pageEditing && !fields) return <></>;

  return (
    <>
      {getAnchorTag(props)}
      <div className={styles['flip-cards']}>
        <div className={styles.container}>
          <Text tag="h2" field={Headline} className="font-header-h3" />
          <Text tag="p" field={Description} className="font-header-h4" />
          <div className={styles.cards} data-cards-per-row={maxCardPerRow}>
            {Cards?.map(({ fields }, index) => {
              const Title = fields?.Title;
              const Icon = fields?.Icon;
              const DescriptionofFront = fields?.DescriptionofFront;
              const DescriptionofBack = fields?.DescriptionofBack;
              const FlipText = fields?.FlipText;

              return (
                <div
                  className={classNames(
                    styles['flip-card'],
                    isFlipped[index] ? styles.hover : ''
                  )}
                  key={index}
                  onClick={() => handleOnClick(index)}
                >
                  <div className={styles['flip-card-inner']}>
                    <div className={styles['flip-card-front']}>
                      {Icon && <Image field={Icon} />}
                      <div className={styles['text-content']}>
                        <Text
                          tag="h3"
                          field={Title}
                          className="font-header-h4"
                        />
                        <RichText
                          data-rte
                          className={classNames(
                            'font-list',
                            styles.description
                          )}
                          field={DescriptionofFront}
                        />
                      </div>
                      <Text
                        tag="span"
                        className="btn-tertiary"
                        field={FlipText}
                      />
                    </div>
                    <div className={styles['flip-card-back']}>
                      <div className={styles['text-content']}>
                        <Text
                          tag="h3"
                          field={Title}
                          className="font-header-h4"
                        />
                        <RichText
                          data-rte
                          field={DescriptionofBack}
                          className={classNames(
                            'font-list',
                            styles.description
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default withDatasourceCheck()<FlipCardProps>(FlipCard);
