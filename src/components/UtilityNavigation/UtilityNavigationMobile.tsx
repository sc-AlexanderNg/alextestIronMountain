import {
  CountriesProps,
  RegionMenuProps,
  UtilityNavigationMobileProps,
} from './UtilityNavigationProps';
import {
  Field,
  Image,
  Link as JssLink,
  Text,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

import styles from './UtilityNavigationMobile.module.css';
import { useState } from 'react';

const UtilityNavigationMobile = (
  props: UtilityNavigationMobileProps
): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();

  const contextLanguage = sitecoreContext.language;
  let selectedCountry!: CountriesProps;
  const compName = 'utilitynavigation';

  props?.fields?.RegionMenuItems?.forEach((region) => {
    region?.fields?.Countries?.forEach((country) => {
      const langTotal = country?.fields?.LanguageList?.length || 0;

      country?.fields?.LanguageList !== undefined &&
        langTotal > 0 &&
        country?.fields?.LanguageList?.filter((child) => {
          if (
            child.fields?.LanguageCode?.value?.toLowerCase() ===
            contextLanguage?.toLowerCase()
          ) {
            selectedCountry = country;

            return true;
          }

          return false;
        });
    });
  });

  const [currentLocation] = useState<Field<string>>({
    value: selectedCountry?.fields?.Title?.value
      ? selectedCountry?.fields?.Title?.value
      : 'United States',
  });
  const [currentL1Select, setCurrentL1Select] = useState('');
  const [currentL2Select, setCurrentL2Select] = useState<RegionMenuProps>();

  const handleNavBack = (level: number) => {
    if (level === 0) {
      setCurrentL1Select('');
      setCurrentL2Select(undefined);
    } else if (level === 1) {
      setCurrentL2Select(undefined);
    }
  };

  const handleL2MenuChange = (menuItem: RegionMenuProps) => {
    setCurrentL2Select(menuItem);
  };

  const displayUtilityMenu = () => {
    return (
      <>
        <div
          data-clickable-id={`${compName}-details`}
          data-clickable-text={currentLocation?.value}
          className={styles.location}
          onClick={() => setCurrentL1Select('location')}
        >
          <Image className={styles.icon} field={props?.fields?.LocationIcon} />
          <h4>{currentLocation?.value}</h4>
        </div>
        {props?.fields?.ContactUsLink?.value?.href ||
        props?.fields?.ContactUsIconMobile?.value?.src ? (
          <a
            data-clickable-id={`${compName}-details`}
            data-clickable-text={props?.fields?.ContactUsLink?.value?.text}
            data-clickable-href={props?.fields?.ContactUsLink?.value?.href}
            href={props?.fields?.ContactUsLink?.value?.href}
            className={styles.contact}
            onClick={() => props.clearMenu()}
          >
            <Image
              className={styles.icon}
              field={props?.fields?.ContactUsIconMobile}
            />
            <JssLink
              data-clickable-id={`${compName}-details`}
              data-clickable-text={props?.fields?.ContactUsLink?.value?.text}
              data-clickable-href={props?.fields?.ContactUsLink?.value?.href}
              field={props?.fields?.ContactUsLink}
            />
          </a>
        ) : (
          <></>
        )}
        {props?.fields?.ContactUsSecondaryLink?.value?.href ||
        props?.fields?.ContactUsSecondaryIconMobile?.value?.src ? (
          <a
            data-clickable-id={`${compName}-details`}
            data-clickable-text={
              props?.fields?.ContactUsSecondaryLink?.value?.text
            }
            data-clickable-href={
              props?.fields?.ContactUsSecondaryLink?.value?.href
            }
            href={props?.fields?.ContactUsSecondaryLink?.value?.href}
            className={styles.contact}
            onClick={() => props.clearMenu()}
          >
            <Image
              className={styles.icon}
              field={props?.fields?.ContactUsSecondaryIconMobile}
            />
            <JssLink
              data-clickable-id={`${compName}-details`}
              data-clickable-text={
                props?.fields?.ContactUsSecondaryLink?.value?.text
              }
              data-clickable-href={
                props?.fields?.ContactUsSecondaryLink?.value?.href
              }
              field={props?.fields?.ContactUsSecondaryLink}
            />
          </a>
        ) : (
          <></>
        )}
        {props?.fields?.LoginText?.value ||
        props?.fields?.LoginIconMobile?.value?.src ? (
          <div
            data-clickable-id={`${compName}-details`}
            data-clickable-text={props?.fields?.LoginText?.value}
            className={styles.login}
            onClick={() => setCurrentL1Select('login')}
          >
            <Image
              className={styles.icon}
              field={props?.fields?.LoginIconMobile}
            />
            <Text field={props?.fields?.LoginText} />
          </div>
        ) : (
          <></>
        )}
        {props?.fields?.BuyOnlineText?.value ||
        props?.fields?.BuyOnlineIconMobile?.value?.src ? (
          <div
            data-clickable-id={`${compName}-details`}
            data-clickable-text={props?.fields?.BuyOnlineText?.value}
            className={styles.login}
            onClick={() => setCurrentL1Select('buy')}
          >
            <Image
              className={styles.icon}
              field={props?.fields?.BuyOnlineIconMobile}
            />
            <Text field={props?.fields?.BuyOnlineText} />
          </div>
        ) : (
          <></>
        )}
      </>
    );
  };

  const displayLocationL1Menu = () => {
    const regions = props?.fields?.RegionMenuItems?.map((region, index) => {
      return (
        <div
          key={index}
          onClick={() => {
            handleL2MenuChange(region);
          }}
        >
          <Text
            className={styles['menu-option']}
            tag="h4"
            field={region?.fields?.Title}
          />
        </div>
      );
    });

    return (
      <div
        className={styles['location-l1']}
        data-clickable-category={props?.fields?.Title?.value}
      >
        <div className={styles['btn-back']} onClick={() => handleNavBack(0)}>
          All
        </div>
        <div className={styles.links}>
          <Text
            className={styles.title}
            tag="h3"
            field={props?.fields?.Title}
          />
          {regions}
        </div>
      </div>
    );
  };

  const displayLocationL2Menu = () => {
    const countries = currentL2Select?.fields?.Countries?.map(
      (country, index) => {
        const nullLink = { value: { text: '', href: '' } };
        const langCount = country?.fields?.LanguageList?.length || 0;

        if (country?.fields?.LanguageList?.length === 1) {
          return (
            <div className={styles['country-wrap']} key={index}>
              <JssLink
                data-clickable-id={`${compName}-details`}
                data-clickable-text={country?.fields?.Link?.value?.text}
                data-clickable-href={country?.fields?.Link?.value?.href}
                className={styles['country-title']}
                field={country?.fields?.Link || nullLink}
              />
              <JssLink
                data-clickable-id={`${compName}-details`}
                data-clickable-text={
                  country?.fields?.LanguageList[0]?.fields?.Link?.value?.text
                }
                data-clickable-href={
                  country?.fields?.LanguageList[0]?.fields?.Link?.value?.href
                }
                className={styles['language-single']}
                field={
                  country?.fields?.LanguageList[0]?.fields?.Link || nullLink
                }
              />
            </div>
          );
        }

        return (
          <div className={styles['country-wrap']} key={index}>
            <JssLink
              data-clickable-id={`${compName}-details`}
              data-clickable-text={country?.fields?.Link?.value?.text}
              data-clickable-href={country?.fields?.Link?.value?.href}
              className={styles['country-title']}
              field={country?.fields?.Link || nullLink}
            />
            <div className={styles['language-wrap']}>
              {langCount > 1 &&
                country?.fields?.LanguageList?.map((lang, index) => {
                  return (
                    <JssLink
                      data-clickable-id={`${compName}-details`}
                      data-clickable-text={lang?.fields?.Link?.value?.text}
                      data-clickable-href={lang?.fields?.Link?.value?.href}
                      key={index}
                      className={styles['language-multi']}
                      field={lang?.fields?.Link || nullLink}
                    />
                  );
                })}
            </div>
          </div>
        );
      }
    );

    return (
      <div
        className={styles['location-l2']}
        data-clickable-category={currentL2Select?.fields?.Title.value}
      >
        <div className={styles['btn-back']} onClick={() => handleNavBack(1)}>
          <Text field={props?.fields?.Title} />
        </div>
        <div className={styles.links}>
          <Text
            className={styles.title}
            tag="h3"
            field={currentL2Select?.fields?.Title}
          />
          {countries}
        </div>
      </div>
    );
  };

  const displayLoginMenu = () => {
    const menuOptions = props?.fields?.LoginMenuItems?.map((item, index) => {
      return (
        <JssLink
          data-clickable-id={`${compName}-details`}
          data-clickable-text={item?.fields?.Link?.value?.text}
          data-clickable-href={item?.fields?.Link?.value?.href}
          key={index}
          className={styles['menu-option']}
          field={item?.fields?.Link}
        />
      );
    });

    return props?.fields?.LoginText?.value ? (
      <div
        className={styles['login-l1']}
        data-clickable-category={props?.fields?.LoginText.value}
      >
        <div className={styles['btn-back']} onClick={() => handleNavBack(0)}>
          All
        </div>
        <div className={styles.links}>
          <Text
            className={styles['title-sm']}
            tag="h4"
            field={props?.fields?.LoginText}
          />
          {menuOptions}
        </div>
      </div>
    ) : (
      <></>
    );
  };

  const displayBuyOnlineMenu = () => {
    const menuOptions = props?.fields?.BuyOnlineMenuItems?.map(
      (item, index) => {
        return (
          <JssLink
            data-clickable-id={`${compName}-details`}
            data-clickable-text={item?.fields?.Link?.value?.text}
            data-clickable-href={item?.fields?.Link?.value?.href}
            key={index}
            className={styles['menu-option']}
            field={item?.fields?.Link}
          />
        );
      }
    );

    return props?.fields?.BuyOnlineText?.value ? (
      <div
        className={styles['buy-l1']}
        data-clickable-category={props?.fields?.BuyOnlineText.value}
      >
        <div className={styles['btn-back']} onClick={() => handleNavBack(0)}>
          All
        </div>
        <div className={styles.links}>
          <Text
            className={styles['title-sm']}
            tag="h4"
            field={props?.fields?.BuyOnlineText}
          />
          {menuOptions}
        </div>
      </div>
    ) : (
      <></>
    );
  };

  return (
    <>
      <div
        className={styles['utility-navigation']}
        data-isopen={currentL1Select !== ''}
      >
        {!currentL1Select && displayUtilityMenu()}
        {currentL1Select === 'location' &&
          !currentL2Select &&
          displayLocationL1Menu()}
        {currentL1Select === 'location' &&
          currentL2Select &&
          displayLocationL2Menu()}
        {currentL1Select === 'login' && displayLoginMenu()}
        {currentL1Select === 'buy' && displayBuyOnlineMenu()}
      </div>
    </>
  );
};

export default UtilityNavigationMobile;
