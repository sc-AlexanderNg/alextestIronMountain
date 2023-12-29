import {
  ComponentParams,
  ComponentRendering,
  Field,
  RichText as JssRichText,
  Placeholder,
  Text,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Icon from '../../assets/icons/caret-down.svg';
import Image from 'next/image';
import Tile from 'components/Tile/Tile';
import classNames from 'classnames';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import { motion } from 'framer-motion';
import styles from './ProblemSolution.module.css';

type CardsProps = {
  fields: {
    ProblemTitle: Field<string>;
    ProblemDescription: Field<string>;
    SolutionTitle: Field<string>;
    SolutionDescription: Field<string>;
  };
};

interface ProblemSolutionProps extends ComponentProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    Title: Field<string>;
    Description: Field<string>;
    Cards: CardsProps[];
  };
}

const ProblemSolution = (props: ProblemSolutionProps): JSX.Element => {
  const { fields } = props;
  const Title = fields?.Title;
  const Description = fields?.Description;
  const Cards = fields?.Cards;
  const mediaRightPhKey = `media-right`;
  const { sitecoreContext } = useSitecoreContext();
  const motionAttributes = !sitecoreContext.pageEditing
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: 'easeInOut' },
      }
    : {};
  const isEditing = sitecoreContext.pageEditing;
  const ph = props?.rendering?.placeholders;
  let pl = 0;

  if (ph != null) {
    pl = ph['media-right'].length;
  }

  const cardTheme = JSON.parse(props?.params?.CardColor || '{}')?.Value?.value;

  const backgroundStyle = {
    backgroundColor: JSON.parse(props?.params?.Theme || '{}')?.Value?.value,
  };

  const list = Cards?.map((card, i) => (
    <div className={styles.item} key={i} data-card-theme={cardTheme}>
      <div className={styles['problem-card']}>
        <Text
          tag="h3"
          className={styles.title}
          field={card?.fields?.ProblemTitle}
        />
        <JssRichText
          data-rte
          className={classNames('font-list', styles.description)}
          field={card?.fields?.ProblemDescription}
        />
      </div>
      <div className={styles.carets}>
        <div className={styles['caret-container']}>
          <Image src={Icon} alt="Icon" />
        </div>
        <div className={styles['caret-container']}>
          <Image src={Icon} alt="Icon" />
        </div>
      </div>
      <div className={styles['solution-card']}>
        <Text
          tag="h3"
          className={styles.title}
          field={card?.fields?.SolutionTitle}
        />
        <JssRichText
          data-rte
          className={classNames('font-list', styles.description)}
          field={card?.fields?.SolutionDescription}
        />
      </div>
    </div>
  ));

  return !sitecoreContext.pageEditing && !fields ? (
    <></>
  ) : (
    <>
      {getAnchorTag(props)}
      <div className={styles['problem-solution']} style={backgroundStyle}>
        <motion.div
          {...motionAttributes}
          className={styles['content-container']}
        >
          {backgroundStyle?.backgroundColor === 'diamond' && (
            <Tile
              size="98px"
              border={'green'}
              radius="8.43px"
              className={styles['tile-1']}
            />
          )}
          {backgroundStyle?.backgroundColor === 'diamond' && (
            <Tile
              size="98px"
              gradient="light-blue"
              radius="9.792px"
              className={styles['tile-2']}
            />
          )}
          {backgroundStyle?.backgroundColor === 'diamond' && (
            <Tile
              size="173px"
              border={'orange'}
              radius="9.792px"
              className={styles['tile-3']}
            />
          )}
          <div className={styles['text-container']}>
            <Text
              tag="h2"
              field={Title}
              className={`font-header-h3 ${styles.headline}`}
            />
            <JssRichText
              data-rte
              className="font-header-h4"
              field={Description}
            />
            <div className={styles.list}>{list}</div>
          </div>
          {isEditing && (
            <div className={styles.multimedia}>
              <Placeholder
                name={mediaRightPhKey}
                rendering={props?.rendering}
              />
            </div>
          )}
          {!isEditing && pl > 0 && (
            <div className={styles.multimedia}>
              <Placeholder
                name={mediaRightPhKey}
                rendering={props?.rendering}
              />
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default withDatasourceCheck()<ProblemSolutionProps>(ProblemSolution);
