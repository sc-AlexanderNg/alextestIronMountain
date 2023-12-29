import {
  Field,
  Image,
  ImageField,
  Link as JssLink,
  LinkField,
  Text,
  TextField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import {
  RegionMenuProps,
  UtilityNavigationProps,
} from 'components/UtilityNavigation/UtilityNavigationProps';
import { useEffect, useState } from 'react';
import { Autocomplete } from './Autocomplete';
import { ComponentProps } from 'lib/component-props';
import UtilityNavigation from 'components/UtilityNavigation/UtilityNavigation';
import classNames from 'classnames';
import styles from './Desktop.module.css';

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

const Desktop = (props: NavigationProps): JSX.Element => {
  const [currentL1Select, setCurrentL1Select] = useState<NavigationLevelOne>();
  const [currentL2Select, setCurrentL2Select] = useState<NavigationItem>();
  const [currentL3Select, setCurrentL3Select] = useState<NavigationItem>();
  const [currentQuickAccessMenu, setCurrentQuickAccessMenu] =
    useState<NavigationSection>();
  const [currentUtilityL1Select, setCurrentUtilityL1Select] =
    useState<RegionMenuProps>();
  const [utilityNavIsOpen, setUtilityNavIsOpen] = useState(false);
  const [pageIsScrolling, setPageIsScrolling] = useState(false);

  const l2SectionId = '86ee867b-7bcd-4651-b379-5b39bf1e4df1';
  const l3SectionId = '03e19d54-145a-4fb5-953e-04e805f615b9';
  const l4SectionId = '0d3d8145-3e79-4372-8af3-34f626aed11d';
  const quickAccessId = '228fb0b6-469e-4f8e-9bf5-967011f7c8b5';

  const compName = props?.rendering?.componentName?.toLowerCase();

  const clearSelections = () => {
    setCurrentL1Select(undefined);
    setCurrentL2Select(undefined);
    setCurrentL3Select(undefined);
    setCurrentQuickAccessMenu(undefined);
    setUtilityNavIsOpen(false);
    setCurrentUtilityL1Select(undefined);
  };

  const displayQuickAccess = () => {
    const links = currentQuickAccessMenu?.Fields?.Children?.map(
      (option, index) => {
        return (
          <div key={index} data-button-width="full">
            {option?.Fields?.Link && (
              <JssLink
                className="btn-secondary"
                onClick={() => clearSelections()}
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

  const clearPreviousSelect = (level: number) => {
    level === 2
      ? setCurrentL2Select(undefined)
      : level === 3
      ? setCurrentL3Select(undefined)
      : null;
  };

  const handleUtilityNavChange = (element?: RegionMenuProps) => {
    clearSelections();
    setUtilityNavIsOpen(true);
    element && setCurrentUtilityL1Select(element);
  };

  const handleL2MenuChange = (element: NavigationItem) => {
    setUtilityNavIsOpen(false);
    setCurrentUtilityL1Select(undefined);
    setCurrentL3Select(undefined);
    setCurrentL2Select(element);
  };

  const handleL3MenuChange = (element: NavigationItem) => {
    setUtilityNavIsOpen(false);
    setCurrentUtilityL1Select(undefined);
    setCurrentL3Select(element);
  };

  const handleL1MenuChange = (element: NavigationLevelOne) => {
    const quickAccess = element?.Fields?.Children?.find(
      (child) => child.TemplateId === quickAccessId
    );

    const utility = document.querySelector('#utility');

    const scrolling = Boolean(
      utility &&
        utility?.getBoundingClientRect() &&
        utility?.getBoundingClientRect()?.top < 0
    );

    setPageIsScrolling(scrolling);
    setUtilityNavIsOpen(false);
    setCurrentUtilityL1Select(undefined);
    setCurrentL3Select(undefined);
    setCurrentL2Select(undefined);
    setCurrentL1Select(element);
    setCurrentQuickAccessMenu(quickAccess);
  };

  const currentSections = (
    levelSections: NavigationSection[],
    level: number,
    currentSelect?: NavigationItem,
    handleFunction?: (element: NavigationLevelOne) => void
  ) => {
    const isMidLevel = level === 2 || level === 3;

    return levelSections.map((sec, index) => {
      const options = sec?.Fields?.Children?.map((opt, i) => {
        const hasOptions = opt?.Fields?.Children?.length;
        const link = opt?.Fields?.Link || {
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
                className={
                  currentSelect === opt
                    ? `${styles['menu-option']} ${styles.active}`
                    : styles['menu-option']
                }
                field={opt?.Fields?.Title}
                onClick={handleFunction && (() => handleFunction(opt))}
                onMouseEnter={handleFunction && (() => handleFunction(opt))}
              />
            ) : isMidLevel ? (
              <JssLink
                className={
                  opt?.Fields?.Link?.value?.class === 'direct-link'
                    ? 'btn-tertiary'
                    : styles['menu-option']
                }
                field={link}
                onClick={() => clearSelections()}
                onMouseEnter={() => clearPreviousSelect(level)}
                data-clickable-id={`${compName}-details`}
                data-clickable-text={link?.value?.text}
                data-clickable-href={link?.value?.href}
              />
            ) : (
              <JssLink
                className={
                  opt?.Fields?.Link?.value?.class === 'direct-link'
                    ? 'btn-tertiary'
                    : styles['menu-option']
                }
                field={link}
                onClick={() => clearSelections()}
                onMouseEnter={() => clearPreviousSelect(level)}
                data-clickable-id={`${compName}-details`}
                data-clickable-text={link?.value?.text}
                data-clickable-href={link?.value?.href}
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
                className={
                  currentL1Select === element
                    ? `${styles['menu-option']} ${styles.active}`
                    : styles['menu-option']
                }
                field={element?.Fields?.Title}
              />
            )}
          </div>
        );
      }
    );

    return (
      <div className={styles['l1-links-container']}>
        <div className={styles.l1Links}>{mainSection}</div>
      </div>
    );
  };

  const displayL4Menu = () => {
    if (currentL3Select) {
      const linkSections = currentL3Select?.Fields?.Children?.filter(
        (child) => child.TemplateId === l4SectionId
      );

      return (
        <div
          id={styles['slide-right-l4']}
          className={`${styles['l4-links-container']} ${styles['sub-l4']}`}
          data-clickable-category={currentL1Select?.Fields?.Title?.value}
        >
          {linkSections && (
            <div className={styles.links}>
              {currentSections(linkSections, 4)}
            </div>
          )}
        </div>
      );
    }

    return <></>;
  };

  const displayL3Menu = () => {
    if (currentL2Select) {
      const linkSections = currentL2Select?.Fields?.Children?.filter(
        (child) => child.TemplateId === l3SectionId
      );

      return (
        <div
          id={styles['slide-right-l3']}
          className={`${styles['links-container']} ${styles['sub-l3']}`}
          data-clickable-category={currentL1Select?.Fields?.Title?.value}
        >
          {linkSections && (
            <div className={styles.links}>
              {currentSections(
                linkSections,
                3,
                currentL3Select,
                handleL3MenuChange
              )}
            </div>
          )}
        </div>
      );
    }

    return <></>;
  };

  const displayL2Menu = () => {
    if (currentL1Select) {
      const linkSections = currentL1Select?.Fields?.Children?.filter(
        (child) => child.TemplateId === l2SectionId
      );

      return (
        <div
          id={styles['slide-right-l2']}
          className={styles['links-container']}
          data-clickable-category={currentL1Select?.Fields?.Title?.value}
        >
          {linkSections && (
            <div className={styles.links}>
              {currentL1Select?.Fields?.Title?.value !== '' && (
                <Text
                  field={currentL1Select?.Fields?.Title}
                  tag="h3"
                  className={styles['menu-title']}
                />
              )}
              {currentSections(
                linkSections,
                2,
                currentL2Select,
                handleL2MenuChange
              )}
            </div>
          )}
          {currentQuickAccessMenu?.Fields?.Children?.length &&
            displayQuickAccess()}
        </div>
      );
    }

    return <></>;
  };

  const displayUtilityL1Menu = () => {
    if (props?.fields?.UtilityNav?.fields?.RegionMenuItems?.length) {
      const menuOptions =
        props?.fields?.UtilityNav?.fields?.RegionMenuItems?.map(
          (region, index) => {
            return (
              <div key={index}>
                <Text
                  tag="h4"
                  className={
                    currentUtilityL1Select === region
                      ? `${styles['menu-option']} ${styles.active}`
                      : styles['menu-option']
                  }
                  field={region?.fields?.Title}
                  onClick={() => handleUtilityNavChange(region)}
                  onMouseEnter={() => handleUtilityNavChange(region)}
                />
              </div>
            );
          }
        );

      return (
        <div
          id={styles['slide-right-l2']}
          className={`${styles['links-container']} ${styles.utility}`}
          data-clickable-category={currentUtilityL1Select?.fields?.Title?.value}
        >
          {menuOptions && (
            <div className={styles.links}>
              <Text
                field={props?.fields?.UtilityNav?.fields?.Title}
                tag="h3"
                className={styles['menu-title']}
              />
              <div className={styles['section-container']}>{menuOptions}</div>
            </div>
          )}

          <div
            className={`${styles['map-img']} ${styles['quick-access-section']}`}
          >
            {currentUtilityL1Select ? (
              <Image field={currentUtilityL1Select?.fields?.MapImage} />
            ) : (
              <Image field={props?.fields?.UtilityNav?.fields?.MapImage} />
            )}
          </div>
        </div>
      );
    }

    return <></>;
  };

  const displayUtilityL2Menu = () => {
    if (currentUtilityL1Select) {
      const utilityNavCompName = 'utilitynavigation';

      const menuOptions = currentUtilityL1Select?.fields?.Countries?.map(
        (country, index) => {
          const langTotal = country?.fields?.LanguageList?.length || 0;
          const countryLink = country?.fields?.Link || {
            value: {
              text: '',
              href: '/',
            },
          };
          const languages =
            langTotal > 0
              ? country?.fields?.LanguageList?.map((lang, index) => {
                  const link = lang?.fields?.Link || {
                    value: {
                      text: '',
                      href: '/',
                    },
                  };

                  return (
                    <JssLink
                      key={index}
                      onClick={() => clearSelections()}
                      className={
                        langTotal > 1
                          ? `${styles['language-multi']}`
                          : `${styles['language-single']}`
                      }
                      field={link}
                      data-clickable-id={`${utilityNavCompName}-details`}
                      data-clickable-text={lang?.fields?.Link?.value?.text}
                      data-clickable-href={lang?.fields?.Link?.value?.href}
                    />
                  );
                })
              : [];

          return (
            <div className={styles.country} key={index}>
              <JssLink
                onClick={() => clearSelections()}
                field={countryLink}
                data-clickable-id={`${utilityNavCompName}-details`}
                data-clickable-text={country?.fields?.Link?.value?.text}
                data-clickable-href={country?.fields?.Link?.value?.href}
              />
              <div className={styles['language-wrap']}>{languages}</div>
            </div>
          );
        }
      );

      return (
        <div
          id={styles['slide-right-l3']}
          className={styles['utility-links-container']}
          data-clickable-category={currentUtilityL1Select?.fields.Title.value}
        >
          {menuOptions && <div className={styles.links}>{menuOptions}</div>}
        </div>
      );
    }

    return <></>;
  };

  useEffect(() => {
    const el = document.querySelector('.sticky-header');

    if (!el) return;

    const observer = new IntersectionObserver(
      ([e]) =>
        (document.body.dataset.aaPanelIsPinned = String(
          e.intersectionRatio < 1
        )),
      { threshold: [1] }
    );

    observer.observe(el);
  }, []);

  return (
    <div
      data-is-scrolling={pageIsScrolling}
      data-main-nav-is-hidden={props.hideMainNav}
      data-utility-nav-is-hidden={props.hideUtilityNav}
      data-nav-is-open={currentL1Select || utilityNavIsOpen ? true : null}
      className={
        currentL1Select || utilityNavIsOpen
          ? classNames(styles['navigation-container'], styles.isOpen)
          : styles['navigation-container']
      }
    >
      <UtilityNavigation
        fields={props?.fields?.UtilityNav?.fields}
        openUtilityNav={handleUtilityNavChange}
        clearMenu={clearSelections}
      />
      <div className={styles['l1-nav-bar']}>
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
              onClick={() => clearSelections()}
            >
              <Image field={props?.fields?.Logo} />
            </JssLink>
          ) : (
            <Image field={props?.fields?.Logo} />
          )}
        </div>
        <div className={styles['l1-menu']}>{displayBaseNavigations()}</div>
        <div className={styles['button-container']}>
          <div>
            {!props.fields?.DisableSearch?.value ? (
              <Autocomplete
                fields={props?.fields?.SearchSettings?.fields}
                searchLink={props?.fields?.SearchLink}
              />
            ) : (
              <></>
            )}
          </div>
          {props?.fields?.FreeQuoteButtonLink?.value?.href ? (
            <div className={styles['quote-btn']}>
              <JssLink
                className="btn-primary"
                field={props?.fields?.FreeQuoteButtonLink}
                onClick={() => clearSelections()}
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
      </div>
      {currentL1Select && displayL2Menu()}
      {currentL2Select && displayL3Menu()}
      {currentL3Select && displayL4Menu()}
      {utilityNavIsOpen && displayUtilityL1Menu()}
      {currentUtilityL1Select && displayUtilityL2Menu()}

      {currentL1Select && (
        <div className={styles.overlay} onClick={() => clearSelections()}></div>
      )}
      {utilityNavIsOpen && (
        <div className={styles.overlay} onClick={() => clearSelections()}></div>
      )}
    </div>
  );
};

export default Desktop;
