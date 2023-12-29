import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  Image as JssImage,
  Link as JssLink,
  LinkField,
  RichText,
  RichTextField,
  Text,
  TextField,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { JSX } from 'react';
import styles from './SuppliesBodyContent.module.css';

type BrandField = {
  fields: {
    Value: TextField;
  };
};

type SuppliesBodyPropsFields = {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    'Page Title': Field<string>;
    Description: RichTextField;
    'Product Image': ImageField;
    Brand: BrandField;
    Price: Field<string>;
    'CTA Name': Field<string>;
    'CTA Link': LinkField;
  };
};

const SuppliesBodyContent = (props: SuppliesBodyPropsFields): JSX.Element => {
  const compName = props?.rendering?.componentName?.toLowerCase();

  return (
    <div className={styles['supplies-body']}>
      <Text tag="p" field={props?.fields['Page Title']} />
      <div
        className={styles['two-column']}
        data-proportions="50-50"
        data-nested="false"
      >
        <div className={styles['supplies-body-box']}>
          <div className={styles['box-center']}>
            <JssImage field={props?.fields['Product Image']} />
          </div>
        </div>
        <div className={styles['supplies-body-box']}>
          {props?.fields?.Description?.value ? (
            <>
              <h5>DESCRIPTION:</h5>
              <RichText
                data-rte
                className={'font-list'}
                field={props?.fields?.Description}
              />
            </>
          ) : null}
          {props?.fields?.Description?.value ? (
            <>
              <h5>BRAND</h5>
              <Text tag="p" field={props?.fields?.Brand?.fields.Value} />
            </>
          ) : null}
          {props?.fields?.Price?.value ? (
            <>
              <h5>PRICE</h5>
              <Text tag="p" field={props?.fields?.Price} />
            </>
          ) : null}
          <JssLink
            field={props?.fields['CTA Link']}
            data-clickable-id={`${compName}-details`}
            data-clickable-text={props?.fields['CTA Link'].value?.text}
            data-clickable-href={props?.fields['CTA Link'].value?.href}
            className="btn-primary"
          >
            <Text tag="" field={props?.fields['CTA Name']} />
          </JssLink>
        </div>
      </div>
    </div>
  );
};

export default SuppliesBodyContent;
