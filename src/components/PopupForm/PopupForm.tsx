/* eslint-disable @next/next/no-sync-scripts */
/*eslint-disable-next-line @next/next/no-sync-scripts*/
import {
  ComponentParams,
  Field,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { JSX } from 'react';
import PopupModal from './PopupModal';

type AreaInterest = {
  fields: {
    Value: {
      value: string;
    };
  };
};

interface RouteFields {
  [key: string]: unknown;
  PageTitle?: Field<string>;
  ShortTitle?: Field<string>;
  MetaPageTitle?: Field<string>;
  IsPremium?: { value: boolean };
  AreaOfInterest?: AreaInterest;
}

interface PopupFormProps {
  rendering: {
    componentName: string;
    dataSource: string;
  };
  params: ComponentParams;
  fields: {
    FormHtml: Field<string>;
    SuccessMessage: Field<string>;
    ButtonText: Field<string>;
    IsStorybook?: boolean;
  };
}

const PopupForm = (props: PopupFormProps): JSX.Element => {
  const { fields } = props;
  const IsStorybook = fields?.IsStorybook ?? false;
  const FormHtml = fields?.FormHtml;
  const SuccessMessage = fields?.SuccessMessage;
  const ButtonText = fields?.ButtonText;
  const { sitecoreContext } = useSitecoreContext();
  const context = sitecoreContext.route?.fields as RouteFields;
  const pageTitle = context?.PageTitle?.value;
  const shortTitle = context?.ShortTitle?.value;
  const metaPageTitle = context?.MetaPageTitle?.value;
  const isPremium = IsStorybook ? IsStorybook : context?.IsPremium?.value;
  const areaOfInterest = context?.AreaOfInterest?.fields?.Value?.value;
  const title = shortTitle ? shortTitle : pageTitle ? pageTitle : metaPageTitle;

  return (
    <>
      {isPremium && (
        <PopupModal
          isOpen={IsStorybook}
          FormHtml={FormHtml}
          SuccessMessage={SuccessMessage}
          ButtonText={ButtonText}
          areaOfInterest={areaOfInterest}
          title={title}
        />
      )}
    </>
  );
};

export default withDatasourceCheck()<PopupFormProps>(PopupForm);
