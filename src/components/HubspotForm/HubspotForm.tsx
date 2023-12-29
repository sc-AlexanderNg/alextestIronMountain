/* eslint-disable sort-imports */
/* eslint-disable @next/next/no-sync-scripts */
import {
  ComponentParams,
  Field,
  ImageField,
  LinkField,
  Text,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { Helmet } from 'react-helmet';
//import Head from 'next/head';
//import Script from 'next/script';
import classNames from 'classnames';
import { getAnchorTag } from 'src/helpers/AnchorHelper';
import { motion } from 'framer-motion';
import styles from '../ContactForm/ContactForm.module.css';
import { useEffect } from 'react';

interface HubspotFormProps {
  rendering: {
    componentName: string;
    dataSource: string;
  };
  params: ComponentParams;
  fields: {
    BackgroundImage?: ImageField;
    Title: Field<string>;
    Region: Field<string>;
    PortalId: Field<string>;
    FormId: Field<string>;
    FormHTML: Field<string>;
    SuccessMessage: Field<string>;
    SuccessPage: LinkField;
  };
}

const HubspotForm = (props: HubspotFormProps): JSX.Element => {
  const { fields } = props;

  const BackgroundImage = fields?.BackgroundImage;
  const Title = fields?.Title;
  const region = fields?.Region?.value;
  const portalId = fields?.PortalId?.value;
  const formId = fields?.FormId?.value;
  // const FormHTML = fields?.FormHTML;
  const SuccessMessage = fields?.SuccessMessage;
  const SuccessPage = fields?.SuccessPage;
  const { sitecoreContext } = useSitecoreContext();
  const motionAttributes = !sitecoreContext.pageEditing
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: 'easeInOut' },
      }
    : {};

  const backgroundOption = props?.params?.Theme
    ? JSON.parse(props?.params?.Theme)?.Value?.value
    : '';

  const backgroundImage = {
    backgroundImage:
      backgroundOption === 'background-image-overlay'
        ? `linear-gradient(
          0deg,
          rgb(20 71 125 / 80%) 0%,
          rgb(20 71 125 / 80%) 100%),
          url('${BackgroundImage?.value?.src}')`
        : '',
  };

  useEffect(() => {
    // This is used to target elements with a class of "full-width" with Next.js CSS modules
    const fullWidthInputs = Array.from(
      document.querySelectorAll('.full-width')
    );

    const parentDivs = fullWidthInputs.map((input) => input.parentElement);

    parentDivs.forEach((input) => {
      const sectionElement = document.createElement('section');

      sectionElement?.classList?.add('full-width');

      sectionElement.innerHTML = input?.innerHTML as string;
      input?.parentNode?.replaceChild(sectionElement, input);
    });
  }, []);

  return !sitecoreContext.pageEditing && !fields ? (
    <></>
  ) : (
    <>
      {/* <Helmet
        script={[
          {
            charset: 'utf-8',
            type: 'text/javascript',
            id: 'hubspot-form-embed',
            src: '//js.hsforms.net/forms/embed/v2.js',
            async: true,
          },
          {
            id: 'hubspotform',
            type: 'text/javascript',
            innerHTML: `function SetForm()
          {
           if(document.getElementById("hubSpotFormContainer"))
          {
              hbspt.forms.create({
                        region: "${region}",
                        portalId: "${portalId}",
                        target:  "#hubSpotFormContainer",
                        formId: "${formId}"
            });
          }
          }
          SetForm();`,
            // `hbspt.forms.create({region:"${region}",target:"#hubSpotFormContainer",portalId:"${portalId}",formId:"${formId}"});`,

            //  innerHTML:
            //  ' hbspt.forms.create({region: "na1",portalId: "8430964",target:  "#hubSpotFormContainer",formId: "ddd37d0c-8c28-47ae-873a-75fbb9de7085"});',
          },
        ]}
      /> */}
      {getAnchorTag(props)}
      <section
        className={classNames(
          styles['contact-lead-gen-form-container'],
          styles[`${backgroundOption}`]
        )}
        style={backgroundImage}
      >
        <div className={styles['contact-lead-gen-form']}>
          <motion.div
            {...motionAttributes}
            className={styles['content-container']}
            id="form-wrapper"
          >
            {Title && (
              <Text tag="h2" field={Title} className="font-header-h4" />
            )}
            {/* {FormHTML && (
              <div
                className={styles.form}
                dangerouslySetInnerHTML={{ __html: FormHTML.value }}
              />
            )} */}
            <div className="form">
              <div className="contact-us-form" id="contact-us-form">
                <div id="hubSpotFormContainer">&nbsp;</div>
              </div>
            </div>
            {SuccessPage?.value?.href &&
              SuccessPage?.value?.href?.length > 0 && (
                <input
                  value={SuccessPage?.value?.href}
                  id="successPage"
                  type="hidden"
                />
              )}
          </motion.div>
          {SuccessMessage && (
            <div
              style={{ display: 'none' }}
              className={styles['success-message']}
              id="success-wrapper"
            >
              <div className={styles['done-icon']} />
              <div
                className={styles['success-content']}
                dangerouslySetInnerHTML={{ __html: SuccessMessage.value }}
              />
            </div>
          )}
        </div>
        <Helmet>
          <script>
            {`(() => {
                const script = document.createElement("script");
                script.id="hubspotscript"
                script.setAttribute("type", "text/javascript");
                script.src = "https://js.hsforms.net/forms/embed/v2.js";

                script.addEventListener("load", () => {
                  hbspt.forms.create({
                    region:"${region}",
                    target:"#hubSpotFormContainer",
                    portalId:"${portalId}",
                    formId:"${formId}"});

                    const utmScript = document.createElement("script");
                    utmScript.id="utmformscript";
                    utmScript.setAttribute("type", "text/javascript");
                    utmScript.src = "/static-assets/js/utm-form.js";
                    var utmformscript = document.getElementById('utmformscript');
                    if (utmformscript != null) {
                      document.head.removeChild(utmformscript);
                    }
                    
                    document.head.append(utmScript);
                    
                  });

                  var hubspotscript = document.getElementById('hubspotscript');
                  if (hubspotscript != null) {
                    document.head.removeChild(hubspotscript);
                  }
                document.head.append(script);
            })();`}
          </script>
          {/* <script src="/static-assets/js/utm-form.js" async></script> */}
        </Helmet>
      </section>
    </>
  );
};

export default withDatasourceCheck()<HubspotFormProps>(HubspotForm);
