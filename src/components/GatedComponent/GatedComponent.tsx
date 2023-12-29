/* eslint-disable @next/next/no-sync-scripts */

import {
  ComponentParams,
  Field,
  Link,
  LinkField,
  Text,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { useEffect, useState } from 'react';

import { JSX } from 'react';
import classNames from 'classnames';
import { getAnchorTag } from '../../helpers/AnchorHelper';
import { useRef } from 'react';

interface RouteFields {
  [key: string]: unknown;
  IsPremium?: { value: boolean };
}

interface GatedComponentProps {
  rendering: {
    componentName: string;
    dataSource: string;
  };
  params: ComponentParams;
  fields: {
    Title: Field<string>;
    Subtitle: Field<string>;
    ButtonText: Field<string>;
    BackButton: LinkField;
    Premium?: boolean;
  };
}

const GatedComponent = (props: GatedComponentProps): JSX.Element => {
  const { fields } = props;
  const Title = fields?.Title;
  const Subtitle = fields?.Subtitle;
  const ButtonText = fields?.ButtonText;
  const BackButton = fields?.BackButton;
  const Premium = fields?.Premium;
  const { sitecoreContext } = useSitecoreContext();
  const [isGatedCookie, setIsGatedCookie] = useState(false);
  const context = sitecoreContext.route?.fields as RouteFields;
  const isPremium = context?.IsPremium?.value
    ? context?.IsPremium?.value
    : Premium;
  const isEditing = sitecoreContext.pageEditing;
  const compName = props?.rendering?.componentName?.toLowerCase();

  //TempAuth query string is used to bypass gated component for internal users.
  //?TempAuth=true - bypass gated component.

  useEffect(() => {
    let isTempAuth = false;

    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);

      isTempAuth = urlParams.get('TempAuth') === 'true';
    }

    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('GATED_FORM_COOKIE='))
      ?.split('=')[1];

    if (cookieValue === '1') {
      setIsGatedCookie(true);
    } else if (cookieValue !== '1') {
      if (isPremium && !isTempAuth) {
        const gatedContentDiv = document.getElementById(
          'resource-gated-content'
        );
        const gatedComponent = document.getElementById('gated-component');

        if (gatedContentDiv && gatedComponent) {
          gatedContentDiv.classList.add('locked');

          const dataGated = document.querySelector<HTMLElement>(
            '[data-gated="true"]'
          );

          if (dataGated) {
            dataGated.hidden = false;
          } else {
            const clone = gatedComponent.cloneNode(true) as HTMLElement;

            clone.removeAttribute('hidden');
            clone.removeAttribute('id');
            clone.dataset.gated = 'true';

            gatedContentDiv.appendChild(clone);
          }

          const dataGatedDownload = document.querySelector<HTMLElement>(
            '[data-gated-download]'
          );

          if (dataGatedDownload) {
            dataGatedDownload.hidden = true;
          }
        }
      }

      setIsGatedCookie(false);
    }
  }, [isPremium]);

  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;

      document
        .querySelector('[data-gated="true"] #gated-component-button')
        ?.addEventListener('click', () => {
          const gatedComponent = document.querySelector('[data-gated="true"]');

          (gatedComponent as HTMLElement).hidden = true;

          (
            document.querySelector('#popup-form-overlay') as HTMLElement
          ).style.display = 'block';
          (
            document.querySelector('#popup-form-overlay') as HTMLElement
          ).removeAttribute('hidden');
        });
    }
  }, []);

  if (!sitecoreContext.pageEditing && !fields) return <></>;

  return (
    <>
      {getAnchorTag(props)}
      {!isEditing && isPremium && !isGatedCookie && (
        <div id="gated-component" hidden data-gated="false">
          {Title ? (
            <Text tag="h2" field={Title} className="gated-component-title" />
          ) : null}
          {Subtitle ? (
            <Text
              tag="p"
              field={Subtitle}
              className="gated-component-subtitle"
            />
          ) : null}
          {ButtonText ? (
            <Text
              data-clickable-id={`popup-${compName}-details`}
              data-clickable-text={ButtonText.value}
              tag="button"
              id="gated-component-button"
              field={ButtonText}
              className={classNames(
                'btn',
                'btn-primary',
                'gated-component-button'
              )}
            />
          ) : null}
          {BackButton?.value?.text && (
            <Link
              data-clickable-id={`popup-${compName}-details`}
              data-clickable-text={BackButton?.value?.text}
              data-clickable-href={BackButton?.value?.text}
              className={`${
                BackButton?.value?.class
                  ? BackButton?.value?.class
                  : 'btn-tertiary'
              }`}
              field={BackButton}
            />
          )}
        </div>
      )}
    </>
  );
};

export default withDatasourceCheck()<GatedComponentProps>(GatedComponent);
