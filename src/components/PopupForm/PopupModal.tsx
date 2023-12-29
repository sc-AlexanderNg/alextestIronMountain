/* eslint-disable @typescript-eslint/no-explicit-any */

import { Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { useEffect, useState } from 'react';

import classNames from 'classnames';
import { createPortal } from 'react-dom';
import hideBackToTop from 'src/utils/hideBackToTop';
import showBackToTop from 'src/utils/showBackToTop';
import styles from './PopupForm.module.css';
import { useI18n } from 'next-localization';
import { useRef } from 'react';

interface PopupModalProps {
  isOpen?: boolean;
  FormHtml: Field<string>;
  SuccessMessage: Field<string>;
  ButtonText: Field<string>;
  areaOfInterest: string | undefined;
  title: string | undefined;
}

const PopupModal = (props: PopupModalProps) => {
  const {
    isOpen,
    FormHtml,
    SuccessMessage,
    ButtonText,
    title,
    areaOfInterest,
  } = props;
  const { t } = useI18n() || {};
  const getAccessToLabel = t ? t('popupform-getaccessto') : 'Get access to';
  const [isPopupOpen, setIsPopupOpen] = useState(isOpen);
  const compName = 'popupmodal';

  const handleClick = () => {
    showBackToTop();
    setIsPopupOpen(false);
  };

  useEffect(() => {
    hideBackToTop();
  }, []);

  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;

      if (
        !document.querySelector('#EmailUsForm') != null &&
        document.querySelector('.elq-form') != null
      ) {
        if (
          (document.querySelector(
            'input[name=C_Area_of_Interest1]'
          ) as HTMLInputElement) != null
        ) {
          (
            document.querySelector(
              'input[name=C_Area_of_Interest1]'
            ) as HTMLInputElement
          ).value = document.querySelector('#areaInterest')
            ?.textContent as string;
        }

        if (
          (document.querySelector(
            'input[name=C_Most_Recent_Asset_Downloaded1]'
          ) as HTMLInputElement) != null
        ) {
          (
            document.querySelector(
              'input[name=C_Most_Recent_Asset_Downloaded1]'
            ) as HTMLInputElement
          ).value = document.querySelector('#form-wrapper h2')
            ?.textContent as string;
        }

        setRequired();
        setUTM();

        document
          .querySelector('.elq-form')
          ?.addEventListener('submit', (event) => {
            event.preventDefault();

            if (
              ((
                document.querySelector(
                  'select[name="C_Area_of_Interest1"]'
                ) as HTMLInputElement
              )?.value === 'Data Centers' &&
                (
                  document.querySelector(
                    'input[name="hubspotForm"]'
                  ) as HTMLInputElement
                )?.value === 'yes') ||
              ((
                document.querySelector(
                  'input[name="C_Area_of_Interest1"]'
                ) as HTMLInputElement
              )?.value === 'Data Centers' &&
                (
                  document.querySelector(
                    'input[name="hubspotForm"]'
                  ) as HTMLInputElement
                )?.value === 'yes')
            ) {
              submitHubspotForm();
            } else {
              submitEloquaForm();
            }
          });
      }

      document.querySelector('#close-button')?.addEventListener('click', () => {
        const gatedComponent = document.querySelector('[data-gated="true"]');

        (gatedComponent as HTMLElement).hidden = false;

        (
          document.querySelector('#popup-form-overlay') as HTMLElement
        ).style.display = 'none';
        (
          document.querySelector('#popup-form-overlay') as HTMLElement
        ).setAttribute('hidden', 'true');
      });

      document
        .querySelector('#success-close-button')
        ?.addEventListener('click', () => {
          setCookie('GATED_FORM_COOKIE', 1, 30);
          const gatedComponent = document.querySelector('[data-gated="true"]');

          (gatedComponent as HTMLElement).hidden = true;

          (
            document.querySelector('#popup-form-overlay') as HTMLElement
          ).style.display = 'none';
          (
            document.querySelector('#popup-form-overlay') as HTMLElement
          ).setAttribute('hidden', 'true');
        });

      document
        .querySelector('.success-button')
        ?.addEventListener('click', () => {
          (
            document.querySelector('#popup-form-overlay') as HTMLElement
          ).style.display = 'none';
          setCookie('GATED_FORM_COOKIE', 1, 30);

          const gatedComponent = document.querySelector('[data-gated="true"]');
          const gatedContentDiv = document.getElementById(
            'resource-gated-content'
          );

          if (gatedContentDiv && gatedComponent) {
            gatedContentDiv.classList.remove('locked');
            gatedContentDiv.removeChild(gatedComponent);

            if (gatedContentDiv.parentNode) {
              const children = [...gatedContentDiv.parentNode.children];
              const afterChildren = children.slice(
                children.indexOf(gatedContentDiv) + 1
              );

              afterChildren.forEach((child) => {
                (child as HTMLElement).hidden = false;
              });

              (
                document.getElementById('gated-component') as HTMLElement
              ).hidden = true;

              const dataGatedDownload = document.querySelector(
                '[data-gated-download]'
              );

              if (dataGatedDownload) {
                (dataGatedDownload as HTMLElement).hidden = false;
              }
            }
          }
        });

      if (
        document.querySelector('.elq-form') != null &&
        document.querySelector('#elqFormSubmissionToken') != null
      ) {
        const formElement = document.querySelector(
          '.elq-form'
        ) as HTMLFormElement;

        const formAction: string[] = formElement
          ?.getAttribute('action')
          ?.split('.') as string[];
        const eb = formAction[0]?.split('//');

        const elSiteId = eb[1].replace(/^\D+/g, '');
        const elFormId = document
          .querySelector('.elq-form')
          ?.getAttribute('id');

        (document as any).onload = handleDocumentLoad(elFormId, elSiteId);
      }
    }

    function handleDocumentLoad(b: any, a: any) {
      getElqFormSubmissionToken(b, a);
      processLastFormField(b);
    }

    function getElqFormSubmissionToken(g: any, c: any) {
      const e = new XMLHttpRequest();
      const b = document.getElementById(g);

      if (b && (b as any).elements.namedItem('elqFormSubmissionToken')) {
        const f = (b as any).action;
        let a = getHostName(f);

        a = `https://${a}/e/formsubmittoken?elqSiteID=${c}`;

        if (a) {
          e.onreadystatechange = () => {
            if (e.readyState === 4) {
              if (e.status === 200) {
                (b as any).elements.namedItem('elqFormSubmissionToken').value =
                  e.responseText;
              } else {
                (b as any).elements.namedItem('elqFormSubmissionToken').value =
                  '';
              }
            }
          };
          e.open('GET', a, true);
          e.send();
        } else {
          (b as any).elements.namedItem('elqFormSubmissionToken').value = '';
        }
      }
    }

    function submitHubspotForm() {
      const successUrl = (
        document.querySelector('#successPage') as HTMLInputElement
      )?.value;
      const xhr = new XMLHttpRequest();
      const portalId = (
        document.querySelector('input[name="portalId"]') as HTMLInputElement
      )?.value;
      const formGuid = (
        document.querySelector('input[name="formGuid"]') as HTMLInputElement
      )?.value;
      const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

      const elements = document.querySelectorAll('[data-hs-name]');
      const arr = [];

      for (let i = 0; i < elements.length; i++) {
        arr.push({
          name: (elements[i] as any).dataset.hsName,
          value: (elements[i] as any).value,
        });
      }

      //console.log(arr);
      const pageTitle = document.querySelector('.font-header-h1')?.textContent;

      const data = {
        fields: arr,
        context: {
          hutk: getCookieValue('hubspotutk'),
          pageUri: window.location.href,
          pageName: pageTitle,
        },
        skipValidation: true,
      };
      const final_data = JSON.stringify(data);

      // eslint-disable-next-line no-console
      console.log(final_data);

      xhr.open('POST', url);
      // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({
            event: 'formSubmission',
            formType: 'gated_form_submission_imdc',
          });

          if (successUrl) {
            window.location.href = successUrl;
          } else {
            (
              document.querySelector('#success-wrapper') as HTMLElement
            ).style.display = 'block';
            (
              document.querySelector('#form-wrapper') as HTMLElement
            ).style.display = 'none';
          }
        } else if (xhr.readyState === 4 && xhr.status === 400) {
          // eslint-disable-next-line no-console
          console.log(xhr.responseText); // Returns a 400 error the submission is rejected.
        } else if (xhr.readyState === 4 && xhr.status === 403) {
          // eslint-disable-next-line no-console
          console.log(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.
        } else if (xhr.readyState === 4 && xhr.status === 404) {
          // eslint-disable-next-line no-console
          console.log(xhr.responseText); //Returns a 404 error if the formGuid isn't found
        }
      };
      // Sends the request

      xhr.send(final_data);
    }

    function setUTM() {
      if (readCookie('__utmz_original') != null) {
        const formutmCookieValue2 = readCookie('__utmz_original');
        let tempArrayValue: string[] = [];

        if (formutmCookieValue2?.split('|')) {
          tempArrayValue = formutmCookieValue2?.split('|');
        }

        for (let i = 0; i < tempArrayValue.length; i++) {
          const avs = tempArrayValue[i].replace('=', '.').split('.');

          if (avs[avs.length - 2] === 'utmccn') {
            if (
              document.querySelector('input[name="gACampaignOriginal"]') != null
            ) {
              (
                document.getElementsByName(
                  'gACampaignOriginal'
                )[0] as HTMLInputElement
              ).value = avs[avs.length - 1];
              // eslint-disable-next-line no-console
              console.log(
                `gACampaignOriginal:${
                  (
                    document.getElementsByName(
                      'gACampaignOriginal'
                    )[0] as HTMLInputElement
                  ).value
                }`
              );
            }
          }

          if (avs[avs.length - 2] === 'utmcmd') {
            if (
              document.querySelector('input[name="gAMediumOriginal"]') != null
            ) {
              (
                document.getElementsByName(
                  'gAMediumOriginal'
                )[0] as HTMLInputElement
              ).value = avs[avs.length - 1];
              // eslint-disable-next-line no-console
              console.log(
                `gAMediumOriginal: ${
                  (
                    document.getElementsByName(
                      'gAMediumOriginal'
                    )[0] as HTMLInputElement
                  ).value
                }`
              );
            }
          }

          if (avs[avs.length - 2] === 'utmcsr') {
            if (
              document.querySelector('input[name="gASourceOriginal"]') != null
            ) {
              (
                document.getElementsByName(
                  'gASourceOriginal'
                )[0] as HTMLInputElement
              ).value = avs[avs.length - 1];
              // eslint-disable-next-line no-console
              console.log(
                `gASourceOriginal: ${
                  (
                    document.getElementsByName(
                      'gASourceOriginal'
                    )[0] as HTMLInputElement
                  ).value
                }`
              );
            }
          }

          if (avs[avs.length - 2] === 'utmctr') {
            if (
              document.querySelector('input[name="gASearchTermOriginal"]') !=
              null
            ) {
              (
                document.getElementsByName(
                  'gASearchTermOriginal'
                )[0] as HTMLInputElement
              ).value = avs[avs.length - 1];
              // eslint-disable-next-line no-console
              console.log(
                `gASearchTermOriginal: ${
                  (
                    document.getElementsByName(
                      'gASearchTermOriginal'
                    )[0] as HTMLInputElement
                  ).value
                }`
              );
            }
          }
        }
      }

      if (readCookie('__utmz') != null) {
        const formutmCookieValue = readCookie('__utmz');
        let tempArrayValue: string[] = [];

        if (formutmCookieValue?.split('|')) {
          tempArrayValue = formutmCookieValue?.split('|');
        }

        for (let i = 0; i < tempArrayValue.length; i++) {
          const avsarray = tempArrayValue[i].replace('=', '.').split('.');

          if (
            avsarray[avsarray.length - 2] === 'utmccn' &&
            avsarray[avsarray.length - 1]
          ) {
            if (
              document.querySelector('input[name="gACampaignMostRecent1"]') !=
              null
            ) {
              (
                document.querySelector(
                  'input[name="gACampaignMostRecent1"]'
                ) as HTMLInputElement
              ).value = avsarray[avsarray.length - 1];
              // eslint-disable-next-line no-console
              console.log(
                `gACampaignMostRecent1: ${
                  (
                    document.getElementsByName(
                      'gACampaignMostRecent1'
                    )[0] as HTMLInputElement
                  ).value
                }`
              );
            }
          }

          if (
            avsarray[avsarray.length - 2] === 'utmcmd' &&
            avsarray[avsarray.length - 1]
          ) {
            if (
              document.querySelector('input[name="gAMediumMostRecent1"]') !=
              null
            ) {
              (
                document.querySelector(
                  'input[name="gAMediumMostRecent1"]'
                ) as HTMLInputElement
              ).value = avsarray[avsarray.length - 1];
              // eslint-disable-next-line no-console
              console.log(
                `gAMediumMostRecent1: ${
                  (
                    document.getElementsByName(
                      'gAMediumMostRecent1'
                    )[0] as HTMLInputElement
                  ).value
                }`
              );
            }
          }

          if (
            avsarray[avsarray.length - 2] === 'utmcsr' &&
            avsarray[avsarray.length - 1]
          ) {
            if (
              document.querySelector('input[name="gASourceMostRecent1"]') !=
              null
            ) {
              (
                document.querySelector(
                  'input[name="gASourceMostRecent1"]'
                ) as HTMLInputElement
              ).value = avsarray[avsarray.length - 1];
              // eslint-disable-next-line no-console
              console.log(
                `gASourceMostRecent1: ${
                  (
                    document.getElementsByName(
                      'gASourceMostRecent1'
                    )[0] as HTMLInputElement
                  ).value
                }`
              );
            }
          }

          if (
            avsarray[avsarray.length - 2] === 'utmctr' &&
            avsarray[avsarray.length - 1]
          ) {
            if (
              document.querySelector('input[name="gASearchTermMostRecent1"]') !=
              null
            ) {
              (
                document.querySelector(
                  'input[name="gASearchTermMostRecent1"]'
                ) as HTMLInputElement
              ).value = avsarray[avsarray.length - 1];
              // eslint-disable-next-line no-console
              console.log(
                `gASearchTermMostRecent1: ${
                  (
                    document.getElementsByName(
                      'gASearchTermMostRecent1'
                    )[0] as HTMLInputElement
                  ).value
                }`
              );
            }
          }
        }
      }
    }
  }, []);

  function setRequired() {
    document
      .querySelectorAll('[aria-required=true]')
      .forEach((input) => input.setAttribute('required', 'true'));
  }

  function getHostName(b: any) {
    if (typeof window.URL === 'function') return new window.URL(b).hostname;

    const a = b.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);

    if (
      a !== null &&
      a.length > 2 &&
      typeof a[2] === 'string' &&
      a[2].length > 0
    ) {
      return a[2];
    }

    return null;
  }

  function processLastFormField(formID: any) {
    const form: any = document.getElementById(formID);
    const lastFormField = form.querySelector('#elq-FormLastRow');

    lastFormField.style.display = 'none';
  }

  function readCookie(name: any) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];

      while (c.charAt(0) === ' ') c = c.substring(1, c.length);

      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }

    return null;
  }

  function getCookieValue(name: any) {
    const regex = new RegExp(`(^| )${name}=([^;]+)`);
    const match = document.cookie.match(regex);

    if (match) {
      return match[2];
    }

    return '';
  }

  function setCookie(cname: any, cvalue: any, exdays: any) {
    const d = new Date();

    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;

    document.cookie = `${cname}=${cvalue};${expires};path=/`;
  }

  function submitEloquaForm() {
    document.querySelector('input[type=submit]')?.setAttribute('disabled', '');
    const form = document.querySelector('.elq-form') as HTMLFormElement;
    const action: string = form?.getAttribute('action') as string;
    const formMethod: string = form
      ?.getAttribute('method')
      ?.toUpperCase() as string;

    const successUrl = (
      document.querySelector('#successPage') as HTMLInputElement
    )?.value;

    const formData = new FormData(form);

    fetch(action, {
      method: formMethod,
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        if (data) {
          if (successUrl) {
            window.location.href = successUrl;
          } else {
            (
              document.querySelector('#success-wrapper') as HTMLElement
            ).style.display = 'flex';
            (
              document.querySelector('#form-wrapper') as HTMLElement
            ).style.display = 'none';
          }

          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({
            event: 'formSubmission',
            formType: 'gated_form_submission',
          });
          // eslint-disable-next-line no-console
          console.log('Eloqua form submitted');
        }
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error))
      .finally(() => {
        document
          .querySelectorAll('input[type=submit]')
          .forEach((input) => input.removeAttribute('disabled'));
      });
  }

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      className={classNames(styles['popup-form'], styles['popup-active'])}
      id="popup-form-overlay"
      style={{ display: isPopupOpen ? 'block' : 'none' }}
    >
      <div className={styles.popup}>
        <div id="form-wrapper">
          <div
            className={styles['close-button']}
            id="close-button"
            onClick={handleClick}
          />
          <div className={styles.subtitle}>{getAccessToLabel}</div>
          {title && <h2>{title}</h2>}
          {areaOfInterest && (
            <div id="areaInterest" style={{ display: 'none' }}>
              {areaOfInterest}
            </div>
          )}
          {FormHtml && (
            <div
              className={styles.form}
              dangerouslySetInnerHTML={{ __html: FormHtml?.value }}
              id="form-wrapper"
            />
          )}
        </div>
        <div
          style={{ display: 'none' }}
          className={classNames('success-message', styles['success-message'])}
          id="success-wrapper"
        >
          <div className={styles['close-button']} id="success-close-button" />
          <span className={styles.subtitle}>{getAccessToLabel}</span>
          {title && <h2>{title}</h2>}
          {SuccessMessage && (
            <div className={styles.message}>
              <div className={styles['success-icon']} />
              <Text
                tag="p"
                className={styles['success-text']}
                field={SuccessMessage}
              />
            </div>
          )}
          {ButtonText && (
            <button
              className={classNames('success-button', 'btn-blue')}
              data-clickable-id={`${compName}-details`}
              data-clickable-text={ButtonText?.value}
            >
              <Text field={ButtonText} />
            </button>
          )}
        </div>
      </div>
    </div>,
    document?.body
  );
};

export default PopupModal;
