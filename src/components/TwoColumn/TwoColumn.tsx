import {
  ComponentParams,
  ComponentRendering,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import classNames from 'classnames';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import styles from './TwoColumn.module.css';

interface TwoColumnProps extends ComponentProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  className?: string;
  'data-nested'?: boolean;
}

const TwoColumn = (props: TwoColumnProps): JSX.Element => {
  const params = props?.params;
  const className = props?.className;
  const proportions = params?.Proportions
    ? JSON.parse(params?.Proportions)?.Value?.value
    : '50-50';

  const alignment = params?.Alignment
    ? JSON.parse(params?.Alignment)?.Value?.value
    : 'start';

  return (
    <>
      {getAnchorTag(props)}
      <div
        className={styles['two-column-container']}
        data-tabid={props?.params?.tabid}
        data-align={alignment}
      >
        <div
          className={classNames(styles['two-column'], className)}
          data-proportions={proportions}
          data-nested={props['data-nested'] ? 'true' : 'false'}
          data-is-two-col
        >
          <div>
            <Placeholder name={'twocolumn-left'} rendering={props.rendering} />
          </div>
          <div>
            <Placeholder name={'twocolumn-right'} rendering={props.rendering} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoColumn;
