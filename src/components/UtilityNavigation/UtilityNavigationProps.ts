import {
  Field,
  ImageField,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';

export type SharedNavigationProps = {
  fields: {
    Title: Field<string>;
    Link: LinkField;
  };
};

export type LanguageListProps = {
  fields: {
    Title?: Field<string>;
    Link?: LinkField;
    LanguageCode?: Field<string>;
  };
};

export type CountriesProps = {
  fields: {
    Title?: Field<string>;
    Link?: LinkField;
    LanguageList?: LanguageListProps[];
  };
};

export type RegionMenuProps = {
  fields: {
    Title: Field<string>;
    MapImage: ImageField;
    Countries: CountriesProps[];
  };
};

export type UtilityNavigationProps = {
  fields: {
    Title?: Field<string>;
    MapImage: ImageField;
    LocationIcon: ImageField;
    ContactUsIconDesktop: ImageField;
    ContactUsIconMobile: ImageField;
    ContactUsSecondaryIconDesktop: ImageField;
    ContactUsSecondaryIconMobile: ImageField;
    ContactUsLink: LinkField;
    ContactUsSecondaryLink: LinkField;
    LoginIconDesktop: ImageField;
    LoginIconMobile: ImageField;
    LoginText: Field<string>;
    LoginMenuItems: SharedNavigationProps[];
    BuyOnlineMenuItems: SharedNavigationProps[];
    BuyOnlineText: Field<string>;
    BuyOnlineIconDesktop: ImageField;
    BuyOnlineIconMobile: ImageField;
    MobileBackLinkText: Field<string>;
    RegionMenuItems: RegionMenuProps[];
  };
};

export type UtilityNavigationComponentProps = {
  fields: {
    Title?: Field<string>;
    MapImage: ImageField;
    LocationIcon: ImageField;
    ContactUsIconDesktop: ImageField;
    ContactUsIconMobile: ImageField;
    ContactUsSecondaryIconDesktop: ImageField;
    ContactUsSecondaryIconMobile: ImageField;
    ContactUsLink: LinkField;
    ContactUsSecondaryLink: LinkField;
    LoginIconDesktop: ImageField;
    LoginIconMobile: ImageField;
    LoginText: Field<string>;
    LoginMenuItems: SharedNavigationProps[];
    BuyOnlineMenuItems: SharedNavigationProps[];
    BuyOnlineText: Field<string>;
    BuyOnlineIconDesktop: ImageField;
    BuyOnlineIconMobile: ImageField;
    MobileBackLinkText: Field<string>;
    RegionMenuItems: RegionMenuProps[];
  };
  openUtilityNav?: (element?: RegionMenuProps) => void;
  clearMenu: () => void;
};

export type UtilityNavigationDesktopProps = {
  fields: {
    Title?: Field<string>;
    MapImage: ImageField;
    LocationIcon: ImageField;
    ContactUsIconDesktop: ImageField;
    ContactUsIconMobile: ImageField;
    ContactUsSecondaryIconDesktop: ImageField;
    ContactUsSecondaryIconMobile: ImageField;
    ContactUsLink: LinkField;
    ContactUsSecondaryLink: LinkField;
    LoginIconDesktop: ImageField;
    LoginIconMobile: ImageField;
    LoginText: Field<string>;
    LoginMenuItems: SharedNavigationProps[];
    BuyOnlineMenuItems: SharedNavigationProps[];
    BuyOnlineText: Field<string>;
    BuyOnlineIconDesktop: ImageField;
    BuyOnlineIconMobile: ImageField;
    MobileBackLinkText: Field<string>;
    RegionMenuItems: RegionMenuProps[];
  };
  openUtilityNav: (element?: RegionMenuProps) => void;
  clearMenu: () => void;
};

export type UtilityNavigationMobileProps = {
  fields: {
    Title?: Field<string>;
    MapImage: ImageField;
    LocationIcon: ImageField;
    ContactUsIconDesktop: ImageField;
    ContactUsIconMobile: ImageField;
    ContactUsSecondaryIconDesktop: ImageField;
    ContactUsSecondaryIconMobile: ImageField;
    ContactUsLink: LinkField;
    ContactUsSecondaryLink: LinkField;
    LoginIconDesktop: ImageField;
    LoginIconMobile: ImageField;
    LoginText: Field<string>;
    LoginMenuItems: SharedNavigationProps[];
    BuyOnlineMenuItems: SharedNavigationProps[];
    BuyOnlineText: Field<string>;
    BuyOnlineIconDesktop: ImageField;
    BuyOnlineIconMobile: ImageField;
    MobileBackLinkText: Field<string>;
    RegionMenuItems: RegionMenuProps[];
  };
  clearMenu: () => void;
};
