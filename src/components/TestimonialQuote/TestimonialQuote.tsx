import {
  Field,
  RichText,
  Text,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';
import { getTheme } from '../../helpers/ThemeHelper';
import styles from './TestimonialQuote.module.css';

type Testimonials = {
  fields: {
    Quote: Field<string>;
    Author: Field<string>;
    AuthorInfo: Field<string>;
  };
};

type TestimonialProps = ComponentProps & {
  fields: {
    Testimonials: Testimonials[];
  };
};

const Testimonial = (tprops: TestimonialProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();

  return (
    <>
      {tprops?.fields?.Testimonials.map(
        (props: Testimonials, index: number) => {
          const { fields } = props;
          const Quote = fields?.Quote;
          const Author = fields?.Author;
          const AuthorInfo = fields?.AuthorInfo;

          return sitecoreContext.pageEditing && !fields ? (
            <p>Broken Datasource Link</p>
          ) : !sitecoreContext.pageEditing && !fields ? (
            <></>
          ) : (
            <div className={styles['quote-container']}>
              <figure
                className={styles.quote}
                key={index}
                data-theme={getTheme(tprops.params)}
                data-tabid={tprops?.params?.tabid}
              >
                <RichText
                  className={'font-list'}
                  tag="blockquote"
                  field={Quote}
                />
                <figcaption>
                  <Text field={Author} />
                  <Text tag="cite" field={AuthorInfo} />
                </figcaption>
              </figure>
            </div>
          );
        }
      )}
    </>
  );
};

export default withDatasourceCheck()<TestimonialProps>(Testimonial);
