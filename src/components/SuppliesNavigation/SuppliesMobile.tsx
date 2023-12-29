/* eslint-disable sort-imports */
import {
  Field,
  Image,
  ImageField,
  Link as JssLink,
  LinkField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { useEffect, useState } from 'react';

import { ComponentProps } from 'lib/component-props';
import hideBackToTop from 'src/utils/hideBackToTop';
import showBackToTop from 'src/utils/showBackToTop';
import styles from './SuppliesMobile.module.css';

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
  hideUtilityNav: boolean;
  hideMainNav: boolean;
};

type MenuData = {
  latestSelect: NavigationItem | NavigationLevelOne;
  sectionId: string;
  menuNum: number;
  previousTitle: Field<string>;
};

const Mobile = (props: NavigationProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentL1Select, setCurrentL1Select] = useState<NavigationLevelOne>();
  const [currentL2Select, setCurrentL2Select] = useState<NavigationItem>();
  const [currentMenuData, setCurrentMenuData] = useState<MenuData>();
  const [currentQuickAccessMenu, setCurrentQuickAccessMenu] =
    useState<NavigationSection>();

  const l2SectionId = '86ee867b-7bcd-4651-b379-5b39bf1e4df1';
  const l3SectionId = '03e19d54-145a-4fb5-953e-04e805f615b9';
  const l4SectionId = '0d3d8145-3e79-4372-8af3-34f626aed11d';
  const quickAccessId = '228fb0b6-469e-4f8e-9bf5-967011f7c8b5';

  const compName = props?.rendering?.componentName?.toLowerCase();

  const clearSelections = () => {
    setCurrentL1Select(undefined);
    setCurrentL2Select(undefined);
    setCurrentQuickAccessMenu(undefined);
    setCurrentMenuData(undefined);
  };

  const closeMenu = () => {
    clearSelections();
    setIsOpen(false);
  };

  const displayQuickAccess = () => {
    const links = currentQuickAccessMenu?.Fields?.Children?.map(
      (option, index) => {
        return (
          <div key={index} data-button-width="full">
            {option?.Fields?.Link && (
              <JssLink
                onClick={() => closeMenu()}
                className="btn-secondary"
                field={option?.Fields?.Link && option?.Fields?.Link}
                data-clickable-id={`${compName}-details`}
                data-clickable-text={option?.Fields?.Link?.value?.text}
                data-clickable-href={option?.Fields?.Link?.value?.href}
              />
            )}
          </div>
        );
      }
    );

    return (
      <div className={styles['quick-access-section']}>
        {currentQuickAccessMenu?.Fields?.Title?.value !== '' && (
          <Text
            tag="h3"
            className={styles['section-title']}
            field={currentQuickAccessMenu?.Fields?.Title}
          />
        )}
        {links}
      </div>
    );
  };

  const handleL2MenuChange = (element: NavigationLevelOne) => {
    const menuData = {
      latestSelect: element,
      sectionId: l3SectionId,
      menuNum: 3,
      previousTitle: currentL1Select?.Fields?.Title || { value: 'Back' },
    };

    setCurrentL2Select(element);
    setCurrentMenuData(menuData);
  };

  const handleL3MenuChange = (element: NavigationItem) => {
    const menuData = {
      latestSelect: element,
      sectionId: l4SectionId,
      menuNum: 4,
      previousTitle: currentL2Select?.Fields?.Title || { value: 'Back' },
    };

    setCurrentMenuData(menuData);
  };

  const handleL1MenuChange = (element: NavigationLevelOne) => {
    const quickAccess = element?.Fields?.Children?.find(
      (child) => child.TemplateId === quickAccessId
    );
    const menuData = {
      latestSelect: element,
      sectionId: l2SectionId,
      menuNum: 2,
      previousTitle: { value: 'All' },
    };

    setCurrentL2Select(undefined);
    setCurrentL1Select(element);
    setCurrentQuickAccessMenu(quickAccess);
    setCurrentMenuData(menuData);
  };

  const handleNavBack = (menuNum: number) => {
    if (menuNum === 3 && currentL1Select && currentL2Select) {
      const menuData = {
        latestSelect: currentL2Select,
        sectionId: l3SectionId,
        menuNum: 3,
        previousTitle: currentL1Select?.Fields?.Title,
      };

      setCurrentMenuData(menuData);
    } else if (menuNum === 2 && currentL1Select) {
      const menuData = {
        latestSelect: currentL1Select,
        sectionId: l2SectionId,
        menuNum: 2,
        previousTitle: { value: 'All' },
      };

      setCurrentL2Select(undefined);
      setCurrentMenuData(menuData);
    } else {
      clearSelections();
    }
  };

  const currentSections = (
    levelSections: NavigationSection[],
    handleFunction?: (element: NavigationLevelOne) => void
  ) => {
    return levelSections.map((sec, index) => {
      const options = sec?.Fields?.Children?.map((opt, i) => {
        const hasOptions = opt?.Fields?.Children?.length;
        const link = opt?.Fields.Link || {
          value: {
            text: '',
            href: '/',
          },
        };

        return (
          <div key={i}>
            {hasOptions ? (
              <Text
                tag="h4"
                className={styles['menu-option']}
                field={opt?.Fields?.Title}
                onClick={handleFunction && (() => handleFunction(opt))}
              />
            ) : (
              <JssLink
                onClick={() => closeMenu()}
                className={
                  opt?.Fields?.Link?.value?.class === 'direct-link'
                    ? 'btn-tertiary'
                    : styles['menu-option']
                }
                field={link}
                data-clickable-id={`${compName}-details`}
                data-clickable-text={opt?.Fields?.Link?.value?.text}
                data-clickable-href={opt?.Fields?.Link?.value?.href}
              />
            )}
          </div>
        );
      });

      return (
        <div key={index} className={styles['section-container']}>
          {sec?.Fields?.Title?.value !== '' && (
            <Text
              tag="h3"
              className={styles['section-title']}
              field={sec?.Fields?.Title}
            />
          )}
          {options}
        </div>
      );
    });
  };

  const displayBaseNavigations = () => {
    const mainSection = props?.fields?.Children?.map(
      (element: NavigationLevelOne, index) => {
        return (
          <div key={index} onClick={() => handleL1MenuChange(element)}>
            {element?.Fields?.Title?.value && (
              <Text
                tag="h3"
                className={styles['menu-option']}
                field={element?.Fields?.Title}
              />
            )}
          </div>
        );
      }
    );

    return (
      <div id={styles['slide-right']} className={styles['links-container']}>
        <div className={styles.l1Links}>{mainSection}</div>
      </div>
    );
  };

  const displayMenu = () => {
    if (currentMenuData) {
      const linkSections =
        currentMenuData?.latestSelect?.Fields?.Children?.filter(
          (child) => child.TemplateId === currentMenuData?.sectionId
        );

      return (
        <div id={styles['slide-right']} className={styles['links-container']}>
          <div
            className={styles['btn-back']}
            onClick={() => handleNavBack(currentMenuData?.menuNum - 1)}
          >
            {currentMenuData?.previousTitle?.value}
          </div>

          {linkSections && (
            <div className={styles.links}>
              {currentMenuData?.latestSelect?.Fields?.Title?.value !== '' && (
                <Text
                  field={currentMenuData?.latestSelect?.Fields?.Title}
                  tag="h3"
                  className={styles['section-title']}
                />
              )}
              {currentMenuData?.menuNum === 2
                ? currentSections(linkSections, handleL2MenuChange)
                : currentMenuData?.menuNum === 3
                ? currentSections(linkSections, handleL3MenuChange)
                : currentSections(linkSections)}
            </div>
          )}
          {currentQuickAccessMenu?.Fields?.Children?.length &&
            displayQuickAccess()}
        </div>
      );
    }

    return displayBaseNavigations();
  };

  const handleMenuToggle = () => {
    if (isOpen) {
      clearSelections();
      setIsOpen(!isOpen);
    }

    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      hideBackToTop();
    } else {
      showBackToTop();
    }
  }, [isOpen]);

  return (
    <div
      className={styles['navigation-container']}
      data-main-nav-is-hidden={props.hideMainNav}
      data-utility-nav-is-hidden={props.hideUtilityNav}
      data-nav-is-open={isOpen}
    >
      <div className={styles['top-bar-container']} data-open={isOpen}>
        {isOpen ? (
          <div
            className={styles.exit}
            data-open={isOpen}
            onClick={() => handleMenuToggle()}
          ></div>
        ) : (
          <div
            className={styles.hamburger}
            data-open={isOpen}
            onClick={() => handleMenuToggle()}
          ></div>
        )}
        {!isOpen && (
          <div className={styles.logo}>
            {props?.fields?.LogoLink?.value?.href ? (
              <JssLink
                field={props?.fields?.LogoLink}
                data-clickable-id={`${compName}-details`}
                data-clickable-text={
                  props?.fields?.LogoLink?.value?.text
                    ? props?.fields?.LogoLink?.value?.text
                    : props?.fields?.Logo?.value?.alt
                }
                data-clickable-href={props?.fields?.LogoLink?.value?.href}
              >
                <Image field={props?.fields?.Logo} />
              </JssLink>
            ) : (
              <Image field={props?.fields?.Logo} />
            )}
          </div>
        )}
        {!isOpen && props?.fields?.FreeQuoteButtonLink?.value?.href ? (
          <div className={styles['quote-btn']}>
            <JssLink
              className="btn-primary"
              field={props?.fields?.FreeQuoteButtonLink}
              data-clickable-id={`${compName}-details`}
              data-clickable-href={
                props?.fields?.FreeQuoteButtonLink?.value?.href
              }
              data-clickable-text={
                props?.fields?.FreeQuoteButtonLink?.value?.text
              }
            />
          </div>
        ) : (
          <></>
        )}
      </div>
      {isOpen && (
        <div className={styles['slide-out-container']}>{displayMenu()}</div>
      )}
    </div>
  );
};

export default Mobile;
