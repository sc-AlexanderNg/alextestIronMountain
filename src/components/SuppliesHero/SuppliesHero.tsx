import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  Link,
  LinkField,
  Text,
  TextField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { JSX } from 'react';
import styles from './SuppliesHero.module.css';

interface RouteFields {
  [key: string]: unknown;
  Name?: Field<string>;
  'Category Name'?: Field<string>;
}

interface ComponentProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    SubTitle: TextField;
    Description: TextField;
    Background: ImageField;
    Button: LinkField;
  };
}

const SuppliesHero = ({ fields }: ComponentProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const context = sitecoreContext.route?.fields as RouteFields;
  const name =
    sitecoreContext.route?.templateName?.toLowerCase() === 'category page'
      ? context?.['Category Name']?.value
      : context?.Name?.value;

  const compName = 'supplieshero';

  return (
    <div className={styles['supplies-hero']}>
      <div>
        <h1 className={styles.title}>{name}</h1>
        <Text
          className={styles.description}
          tag="p"
          field={fields?.Description}
        />
        {fields?.Button && fields?.Button?.value?.href ? (
          <Link
            data-clickable-id={`${compName}-details`}
            data-clickable-text={fields?.Button?.value.text}
            data-clickable-href={fields?.Button?.value?.href}
            data-icon={fields?.Button?.value?.class}
            className="btn-primary"
            field={fields?.Button}
          ></Link>
        ) : null}
      </div>
    </div>
  );
};

export default SuppliesHero;
