/* eslint-disable sort-imports */
import {
  Field,
  ImageField,
  LinkField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Desktop from './SuppliesDesktop';
import Mobile from './SuppliesMobile';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

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

type NavigationProps = ComponentProps & {
  fields: {
    Logo?: ImageField;
    LogoLink?: LinkField;
    SearchLink: LinkField;
    FreeQuoteButtonLink: LinkField;
    Children: NavigationLevelOne[];
  };
};

const Navigation = (props: NavigationProps): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (typeof window === 'undefined' || !mounted) {
    return <div />;
  }

  if (isDesktop) {
    return <Desktop hideMainNav={false} {...props} />;
  }

  return <Mobile hideMainNav={false} hideUtilityNav={false} {...props} />;
};

export default withDatasourceCheck()<NavigationProps>(Navigation);
