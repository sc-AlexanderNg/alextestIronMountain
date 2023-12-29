import { ComponentProps } from 'lib/component-props';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import classNames from 'classnames';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import styles from './ThreeColumn.module.css';

interface ThreeColumnProps extends ComponentProps {
  params: {
    Proportions: string;
    Alignment?: string;
  };
  className: string;
  'data-nested'?: boolean;
}

const ThreeColumn = (props: ThreeColumnProps): JSX.Element => {
  const params = props?.params;
  const className = props?.className;
  const proportions = params?.Proportions
    ? JSON.parse(params?.Proportions)?.Value?.value
    : '33-33-33';

  const alignment = params?.Alignment
    ? JSON.parse(params?.Alignment)?.Value?.value
    : 'start';

  const threeColumnLeftPhKey = `threecolumn-left`;
  const threeColumnMiddlePhKey = `threecolumn-middle`;
  const threeColumnRightPhKey = `threecolumn-right`;

  return (
    <>
      {getAnchorTag(props)}
      <div className={styles['three-column-container']} data-align={alignment}>
        <div
          className={classNames(styles['three-column'], className)}
          data-proportions={proportions}
          data-nested={props['data-nested'] ? 'true' : 'false'}
        >
          <div>
            <Placeholder
              name={threeColumnLeftPhKey}
              rendering={props.rendering}
            />
          </div>
          <div>
            <Placeholder
              name={threeColumnMiddlePhKey}
              rendering={props.rendering}
            />
          </div>
          <div>
            <Placeholder
              name={threeColumnRightPhKey}
              rendering={props.rendering}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeColumn;
