import {
  ComponentParams,
  ComponentRendering,
  ImageField,
  Image as JssImage,
  Link,
  LinkField,
  Text,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import classNames from 'classnames';
import styles from './Footer.module.css';
import { useState } from 'react';

type NavigationItem = {
  fields: {
    Link: LinkField;
  };
};

type FooterMenuItem = {
  fields: {
    Title?: TextField;
    SubMenuItems?: NavigationItem[];
  };
};

type SocialIcon = {
  fields: {
    SocialIcon: ImageField;
    SocialLink: LinkField;
  };
};

interface FooterProps {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: {
    MobileLogo?: ImageField;
    DesktopLogo?: ImageField;
    MenuItems?: FooterMenuItem[];
    SocialIconList?: SocialIcon[];
    LegalLinks?: NavigationItem[];
    AdditionalImages?: SocialIcon[];
    CopyrightText?: TextField;
    SocialBarLabel?: TextField;
    LogoLink?: LinkField;
  };
}

const Footer = (props: FooterProps): JSX.Element => {
  const { fields } = props;
  const MobileLogo = fields?.MobileLogo;
  const DesktopLogo = fields?.DesktopLogo;
  const MenuItems = fields?.MenuItems;
  const SocialIconList = fields?.SocialIconList;
  const LegalLinks = fields?.LegalLinks;
  const AdditionalImages = fields?.AdditionalImages;
  const CopyrightText = fields?.CopyrightText;
  const LogoLink = fields?.LogoLink;
  const { sitecoreContext } = useSitecoreContext();
  const compName = props?.rendering?.componentName?.toLowerCase();

  const [menu, setMenu] = useState<{ [key: number]: boolean }>({});

  const currentYear = new Date().getFullYear();

  const handleClick = (index: number) => {
    const newObject = { ...menu };

    newObject[index] = !newObject[index];
    setMenu(newObject);
  };

  const socialIcons = SocialIconList?.map((icon, index) => (
    <Link
      key={index}
      field={icon?.fields?.SocialLink}
      data-clickable-id={`${compName}-details`}
      data-clickable-text={
        icon?.fields?.SocialLink?.value?.text
          ? icon?.fields?.SocialLink?.value?.text
          : icon?.fields?.SocialIcon?.value?.alt
      }
      data-clickable-href={icon?.fields?.SocialLink?.value?.href}
    >
      <JssImage field={icon?.fields?.SocialIcon} />
    </Link>
  ));

  return !sitecoreContext.pageEditing && !fields ? (
    <></>
  ) : (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {LogoLink?.value?.href ? (
          <Link
            field={LogoLink}
            className={classNames(styles.logo, styles.mobile)}
            data-clickable-id={`${compName}-details`}
            data-clickable-text={
              LogoLink?.value?.text
                ? LogoLink?.value?.text
                : LogoLink?.value?.text
            }
            data-clickable-href={LogoLink?.value?.href}
          >
            <JssImage
              field={MobileLogo}
              className={classNames(styles.logo, styles.mobile)}
            />
          </Link>
        ) : (
          <JssImage
            field={MobileLogo}
            className={classNames(styles.logo, styles.mobile)}
          />
        )}
        {LogoLink?.value?.href ? (
          <Link
            field={LogoLink}
            className={classNames(styles.logo, styles.desktop)}
            data-clickable-id={`${compName}-details`}
            data-clickable-text={LogoLink?.value?.text}
            data-clickable-href={LogoLink?.value?.href}
          >
            <JssImage
              field={DesktopLogo}
              className={classNames(styles.logo, styles.desktop)}
            />
          </Link>
        ) : (
          <JssImage
            field={DesktopLogo}
            className={classNames(styles.logo, styles.desktop)}
          />
        )}
        {SocialIconList && SocialIconList?.length > 0 && (
          <section className={classNames(styles.social, styles.desktop)}>
            <Text
              field={props?.fields?.SocialBarLabel}
              className={styles['social-label']}
              tag="span"
            />
            {socialIcons}
          </section>
        )}
      </div>
      <section className={styles.menu}>
        <ul>
          {MenuItems?.map((list, index) => (
            <li
              data-clickable-category={list?.fields?.Title?.value}
              key={index}
              onClick={() => handleClick(index)}
              className={classNames(
                styles['list-header'],
                menu[index] ? styles.active : styles.inactive
              )}
            >
              <div className={styles.header}>
                <Text tag="span" field={list?.fields?.Title} />
                <div className={styles.caret} />
              </div>
              <ul className={styles.list}>
                {list?.fields?.SubMenuItems?.map((item, i) => (
                  <li key={i}>
                    <Link
                      field={item?.fields?.Link}
                      data-clickable-id={`${compName}-details`}
                      data-clickable-text={item?.fields?.Link?.value?.text}
                      data-clickable-href={item?.fields?.Link?.value?.href}
                    ></Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
      {AdditionalImages && AdditionalImages?.length > 0 && (
        <section className={styles.certifications}>
          {AdditionalImages?.map((image, index) => (
            <JssImage key={index} field={image?.fields?.SocialIcon} />
          ))}
        </section>
      )}
      {SocialIconList && SocialIconList?.length > 0 && (
        <section className={classNames(styles.social, styles.mobile)}>
          {socialIcons}
        </section>
      )}
      <div className={styles['desktop-divider']} />
      {LegalLinks && LegalLinks?.length > 0 && (
        <section className={styles.legal}>
          {LegalLinks?.map((link, index) => (
            <Link
              key={index}
              field={link?.fields?.Link}
              data-clickable-id={`${compName}-details`}
              data-clickable-text={link?.fields?.Link?.value?.text}
              data-clickable-href={link?.fields?.Link?.value?.href}
            />
          ))}
        </section>
      )}
      <span className={styles.copyright}>
        &copy; {currentYear} <Text field={CopyrightText} />
      </span>
    </footer>
  );
};

export default withDatasourceCheck()<FooterProps>(Footer);
