import {
  ComponentRendering,
  ImageField,
  Image as JSSImage,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import TwoColumn from 'components/TwoColumn/TwoColumn';
import { getBackgroundColor } from '../../helpers/BackgroundColorHelper';
import { getTheme } from '../../helpers/ThemeHelper';
import styles from './TextImageSplit.module.css';

interface TextImageSplitProps {
  rendering: ComponentRendering;
  params: {
    Proportions: string;
    Theme: string;
    tabid: string;
    BackgroundColor: string;
  };
  fields: {
    BackgroundImage?: ImageField;
  };
}

const TextImageSplit = (props: TextImageSplitProps) => {
  const { sitecoreContext } = useSitecoreContext();
  const { fields } = props;
  const BackgroundImage = fields?.BackgroundImage;
  const BackgroundColor = getBackgroundColor(props.params);

  const themeoption = props?.params?.Theme
    ? JSON.parse(props?.params?.Theme)?.Value?.value
    : '';

  return !sitecoreContext.pageEditing && !fields ? (
    <></>
  ) : (
    <div
      className={styles.teaser}
      data-background-color={BackgroundColor}
      data-theme={getTheme(props.params)}
      data-tabid={props?.params?.tabid}
    >
      {themeoption === 'background-image' && BackgroundImage?.value && (
        <JSSImage field={BackgroundImage} />
      )}
      <TwoColumn {...props} />
    </div>
  );
};

export default withDatasourceCheck()<TextImageSplitProps>(TextImageSplit);
