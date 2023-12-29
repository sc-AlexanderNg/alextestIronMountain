import {
  ComponentParams,
  ComponentRendering,
  RichText,
  RichTextField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import classNames from 'classnames';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import styles from './RichTextBlock.module.css';

interface RichTextBlockProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    Content: RichTextField;
  };
}

const RichTextBlock = (props: RichTextBlockProps): JSX.Element => {
  return (
    <>
      {getAnchorTag(props)}
      <div className={styles['rich-text-block-container']}>
        <RichText
          data-rte
          data-tabid={props?.params?.tabid}
          data-is-text
          className={classNames('rich-text-block', styles['rich-text-block'])}
          field={props?.fields?.Content}
        />
      </div>
    </>
  );
};

export default withDatasourceCheck()<RichTextBlockProps>(RichTextBlock);
