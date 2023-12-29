import {
  ComponentParams,
  ComponentRendering,
  ImageField,
  RichText,
  RichTextField,
  Text,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import classNames from 'classnames';
import { getTheme } from '../../helpers/ThemeHelper';
import styles from './TextPersonaSplit.module.css';

interface TextPersonaSplitProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    PersonaImage: ImageField;
    Title: TextField;
    Description: RichTextField;
  };
}

const TextPersonaSplit = (props: TextPersonaSplitProps): JSX.Element => {
  const { fields } = props;
  const PersonaImage = fields?.PersonaImage;
  const Description = fields?.Description;
  const Title = fields?.Title;
  const { sitecoreContext } = useSitecoreContext();

  if (!sitecoreContext.pageEditing && !fields) return <></>;

  const backgroundStyle = {
    backgroundImage: `url('${PersonaImage?.value?.src}')`,
  };

  return (
    <div className={styles[getTheme(props.params)]}>
      <div className={styles['text-persona-split']}>
        <div
          className={styles['persona-image-container']}
          style={backgroundStyle}
        />

        <div className={styles['content-container']}>
          <Text className={styles.title} tag="h2" field={Title} />
          <RichText
            field={Description}
            className={classNames('font-list', styles.content)}
          />
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<TextPersonaSplitProps>(TextPersonaSplit);
