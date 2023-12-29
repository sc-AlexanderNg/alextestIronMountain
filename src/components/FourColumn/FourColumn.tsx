import { ComponentProps } from 'lib/component-props';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import classNames from 'classnames';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import styles from './FourColumn.module.css';

interface FourColumnProps extends ComponentProps {
  params: {
    Proportions: string;
    Alignment?: string;
  };
  className: string;
  'data-nested'?: boolean;
}

const FourColumn = (props: FourColumnProps): JSX.Element => {
  const params = props?.params;
  const className = props?.className;
  const proportions = params?.Proportions
    ? JSON.parse(params?.Proportions)?.Value?.value
    : '25-25-25-25';

  const alignment = params?.Alignment
    ? JSON.parse(params?.Alignment)?.Value?.value
    : 'start';

  const fourColumnLeftPhKey = `fourcolumn-left`;
  const fourColumnMiddleLeftPhKey = `fourcolumn-middle-left`;
  const fourColumnMiddleRightPhKey = `fourcolumn-middle-right`;
  const fourColumnRightPhKey = `fourcolumn-right`;

  return (
    <>
      {getAnchorTag(props)}
      <div className={styles['four-column-container']} data-align={alignment}>
        <div
          className={classNames(styles['four-column'], className)}
          data-proportions={proportions}
          data-nested={props['data-nested'] ? 'true' : 'false'}
        >
          <div>
            <Placeholder
              name={fourColumnLeftPhKey}
              rendering={props.rendering}
            />
          </div>
          <div>
            <Placeholder
              name={fourColumnMiddleLeftPhKey}
              rendering={props.rendering}
            />
          </div>
          <div>
            <Placeholder
              name={fourColumnMiddleRightPhKey}
              rendering={props.rendering}
            />
          </div>
          <div>
            <Placeholder
              name={fourColumnRightPhKey}
              rendering={props.rendering}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FourColumn;
