import {
  Field,
  RichText,
  RichTextField,
  Text,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentWithContextProps } from '../../lib/component-props';
import Diamond from 'components/Diamond/Diamond';
import classNames from 'classnames';
import { getAnchorTag } from '../../helpers/AnchorHelper';
import { getTheme } from '../../helpers/ThemeHelper';
import { motion } from 'framer-motion';
import styles from './Statistics.module.css';

type StatsFieldLink = {
  fields: {
    Header: Field<string>;
    Description: RichTextField;
  };
};

type DiamondsGraphicsOneFields = {
  fields: {
    Value: TextField;
  };
};

type DiamondsGraphicsTwoFields = {
  fields: {
    Value: TextField;
  };
};

type DiamondsGraphicsThreeFields = {
  fields: {
    Value: TextField;
  };
};

type DiamondsGraphicsFourFields = {
  fields: {
    Value: TextField;
  };
};

type CardsProps = ComponentWithContextProps & {
  fields: {
    HeaderGradient: string;
    Stats: StatsFieldLink[];
    DiamondsGraphicsOne: DiamondsGraphicsOneFields;
    DiamondsGraphicsTwo: DiamondsGraphicsTwoFields;
    DiamondsGraphicsThree: DiamondsGraphicsThreeFields;
    DiamondsGraphicsFour: DiamondsGraphicsFourFields;
    Title?: Field<string>;
  };
};

const Statistics = (props: CardsProps): JSX.Element => {
  const { fields } = props;
  const Stats = fields?.Stats;
  const HeaderGradient = fields?.HeaderGradient;
  const DiamondsGraphicsOne = fields?.DiamondsGraphicsOne;
  const DiamondsGraphicsTwo = fields?.DiamondsGraphicsTwo;
  const DiamondsGraphicsThree = fields?.DiamondsGraphicsThree;
  const DiamondsGraphicsFour = fields?.DiamondsGraphicsFour;
  const Title = fields?.Title;

  const { sitecoreContext } = useSitecoreContext();

  return !sitecoreContext.pageEditing && !fields ? (
    <></>
  ) : Stats ? (
    <>
      {getAnchorTag(props)}
      <div
        className={styles.statistics}
        data-odd-even={
          Stats.length > 1 ? (Stats.length % 2 === 0 ? 'even' : 'odd') : null
        }
        data-theme={getTheme(props.params)}
        data-header-gradient={HeaderGradient}
        data-has-title={Title?.value ? 'true' : 'false'}
      >
        {Title?.value ? (
          <Text
            className={classNames('font-header-h3', styles.headline)}
            tag="h2"
            field={Title}
          />
        ) : null}
        <div className="diamond-grid" data-grid-name="grid1">
          <Diamond border={`${DiamondsGraphicsOne?.fields?.Value?.value}`} />
          <Diamond
            gradient={{
              fields: {
                Value: { value: DiamondsGraphicsTwo?.fields?.Value?.value },
              },
            }}
          />
        </div>
        <ul role="list">
          {Stats?.map((Stat: StatsFieldLink, index) => {
            const Header = Stat?.fields?.Header;
            const Description = Stat?.fields?.Description;
            const motionAttributes = !sitecoreContext.pageEditing
              ? {
                  initial: { opacity: 0, translateY: 50 },
                  whileInView: { opacity: 1, translateY: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.4, delay: index * 0.4 },
                }
              : {};

            return (
              <motion.li
                {...motionAttributes}
                className={styles.statistic}
                key={index}
              >
                {Header?.value && (
                  <Text className={styles.header} tag="em" field={Header} />
                )}
                {Description?.value && (
                  <RichText
                    data-rte
                    className={'font-list'}
                    field={Description}
                  />
                )}
              </motion.li>
            );
          })}
        </ul>
        <div className="diamond-grid" data-grid-name="grid2">
          <Diamond
            gradient={{
              fields: {
                Value: { value: DiamondsGraphicsThree?.fields?.Value?.value },
              },
            }}
          />
          <Diamond border={`${DiamondsGraphicsFour?.fields?.Value?.value}`} />
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default withDatasourceCheck()<CardsProps>(Statistics);
