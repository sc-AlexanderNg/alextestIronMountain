/* eslint-disable sort-imports */
import {
  Field,
  ImageField,
  LinkField,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { useMediaQuery } from 'react-responsive';
import { UtilityNavigationProps } from 'components/UtilityNavigation/UtilityNavigationProps';
import { useEffect, useState } from 'react';

interface RouteFields {
  [key: string]: unknown;
  HideMainNav?: { value: boolean };
  HideUtilityNav?: { value: boolean };
}

type NavigationSection = {
  Id: string;
  TemplateId: string;
  Name: string;
  DisplayName: string;
  Fields: {
    Title: Field<string>;
    // eslint-disable-next-line no-use-before-define
    Children?: NavigationItem[];
  };
};

type NavigationItem = {
  Id: string;
  TemplateId: string;
  Name: string;
  DisplayName: string;
  Fields: {
    Title: Field<string>;
    Link?: LinkField;
    Children?: NavigationSection[];
  };
};

type NavigationLevelOne = {
  Id: string;
  TemplateId: string;
  Name: string;
  DisplayName: string;
  Fields: {
    Title: Field<string>;
    Children?: NavigationSection[];
  };
};

type SearchSettings = {
  fields: {
    InstanceID: TextField;
    APIKey: TextField;
    IndexName: TextField;
  };
};

type NavigationProps = ComponentProps & {
  fields: {
    Logo?: ImageField;
    LogoLink?: LinkField;
    SearchLink: LinkField;
    SearchSettings: SearchSettings;
    DisableSearch: { value: boolean };
    FreeQuoteButtonLink: LinkField;
    UtilityNav: UtilityNavigationProps;
    Children: NavigationLevelOne[];
  };
  hideUtilityNav: boolean;
  hideMainNav: boolean;
};

const Navigation = (props: NavigationProps): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const { sitecoreContext } = useSitecoreContext();
  const context = sitecoreContext.route?.fields as RouteFields;
  const hideMainNav = context?.HideMainNav?.value || false;
  const hideUtilityNav = context?.HideUtilityNav?.value || false;
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  const navProps = { ...props, hideUtilityNav, hideMainNav };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (typeof window === 'undefined' || !mounted) {
    return <div />;
  }

  if (isDesktop) {
    return <Desktop {...navProps} />;
  }

  return <Mobile {...navProps} />;
};

export default withDatasourceCheck()<NavigationProps>(Navigation);
