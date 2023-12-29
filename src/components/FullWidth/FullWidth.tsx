import { ComponentProps } from 'lib/component-props';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import styles from './FullWidth.module.css';

const FullWidth = (props: ComponentProps): JSX.Element => {
  const phKey = `fullwidth`;
  const params = props?.params;
  const alignment = params?.Alignment
    ? JSON.parse(params?.Alignment)?.Value?.value
    : 'start';

  return (
    <>
      {getAnchorTag(props)}
      <div
        className={styles['full-width']}
        data-tabid={props?.params?.tabid}
        data-align={alignment}
      >
        <Placeholder name={phKey} rendering={props.rendering} />
      </div>
    </>
  );
};

export default FullWidth;
