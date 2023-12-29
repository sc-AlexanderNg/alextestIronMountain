import {
  ComponentParams,
  ComponentRendering,
  Field,
  Text,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { BaseSyntheticEvent } from 'react';
import RichTextBlock from 'components/RichTextBlock/RichTextBlock';
import classNames from 'classnames';
import { getAnchorTag } from '../../helpers/AnchorHelper';
import { motion } from 'framer-motion';
import styles from './Accordion.module.css';

type Child = {
  Fields: {
    Title: Field<string>;
    Description: Field<string>;
  };
};

type FAQMarkupItem = {
  '@type': string;
  name: string;
  acceptedAnswer: {
    '@type': string;
    text: string;
  };
};

export type FAQMarkupData = {
  '@context': string;
  '@type': string;
  mainEntity: FAQMarkupItem[];
};

interface ComponentProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    Title: TextField;
    Description: Field<string>;
    Children: Child[];
  };
}

const Accordion = (props: ComponentProps): JSX.Element => {
  const { fields } = props;
  const Title = fields?.Title;
  const Description = fields?.Description;
  const Children = fields?.Children;
  const compName = props?.rendering?.componentName?.toLowerCase();
  const { sitecoreContext } = useSitecoreContext();
  const motionAttributes = !sitecoreContext.pageEditing
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: 'easeInOut' },
      }
    : {};
  const faqMarkupData = {} as FAQMarkupData;

  faqMarkupData['@context'] = 'https://schema.org/';
  faqMarkupData['@type'] = 'FAQPage';
  faqMarkupData.mainEntity = [];

  Children.forEach((input) => {
    faqMarkupData.mainEntity.push({
      '@type': 'Question',
      name: input.Fields?.Title?.value,
      acceptedAnswer: {
        '@type': 'Answer',
        text: input.Fields?.Description?.value,
      },
    });
  });

  return !sitecoreContext.pageEditing && !fields ? (
    <></>
  ) : (
    <>
      {getAnchorTag(props)}
      <div className={styles['accordion-container']}>
        <motion.div
          {...motionAttributes}
          role="accordion"
          className={styles.accordion}
          id={compName}
        >
          <div className={styles.header}>
            <Text
              tag="h2"
              field={Title}
              className={classNames('font-header-h2', styles.title)}
            />
            <Text tag="p" field={Description} className={styles.description} />
          </div>
          <div className={styles.list}>
            {Children?.map((accordionprops, index) => {
              const richTextFields = {
                Content: accordionprops?.Fields?.Description,
              };

              return (
                <details
                  key={index}
                  className={styles.details}
                  data-clickable-id={`${compName}-details`}
                  data-clickable-text={accordionprops?.Fields?.Title?.value}
                  data-clickable-action="close"
                  onClick={(ele: BaseSyntheticEvent) => {
                    if (ele.currentTarget.getAttribute('open') === '') {
                      ele.currentTarget.setAttribute(
                        'data-clickable-action',
                        'close'
                      );
                    } else {
                      ele.currentTarget.setAttribute(
                        'data-clickable-action',
                        'open'
                      );
                    }
                  }}
                >
                  {accordionprops?.Fields?.Title && (
                    <Text
                      tag="summary"
                      field={accordionprops?.Fields?.Title}
                      className={classNames('font-header-h5', styles.summary)}
                    />
                  )}
                  {accordionprops?.Fields?.Description && (
                    <div className={styles['detail-description']}>
                      <RichTextBlock
                        data-rte
                        rendering={props.rendering}
                        params={props.params}
                        fields={richTextFields}
                      />
                    </div>
                  )}
                </details>
              );
            })}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqMarkupData) }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default withDatasourceCheck()<ComponentProps>(Accordion);
