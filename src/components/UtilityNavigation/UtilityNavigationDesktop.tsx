import {
  CountriesProps,
  UtilityNavigationDesktopProps,
} from './UtilityNavigationProps';
import {
  Image,
  Link,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

import styles from './UtilityNavigationDesktop.module.css';

const UtilityNavigationDesktop = (
  props: UtilityNavigationDesktopProps
): JSX.Element => {
  const fields = props?.fields;
  const BuyOnlineIconDesktop = fields?.BuyOnlineIconDesktop;
  const BuyOnlineText = fields?.BuyOnlineText;
  const BuyOnlineMenuItems = fields?.BuyOnlineMenuItems;
  const LoginText = fields?.LoginText;
  const LoginIconDesktop = fields?.LoginIconDesktop;
  const LoginMenuItems = fields?.LoginMenuItems;
  const ContactUsIconDesktop = fields?.ContactUsIconDesktop;
  const ContactUsSecondaryIconDesktop = fields?.ContactUsSecondaryIconDesktop;
  const ContactUsLink = fields?.ContactUsLink;
  const ContactUsSecondaryLink = fields?.ContactUsSecondaryLink;
  const LocationIcon = fields?.LocationIcon;
  const RegionMenuItems = fields?.RegionMenuItems;
  const compName = 'utilitynavigation';

  const { sitecoreContext } = useSitecoreContext();
  const contextLanguage = sitecoreContext.language;
  let selectedCountry!: CountriesProps;

  RegionMenuItems?.forEach((region) => {
    region?.fields?.Countries?.forEach((country) => {
      const langTotal = country.fields.LanguageList?.length || 0;
      const langtype = typeof country.fields.LanguageList;

      country?.fields?.LanguageList !== undefined &&
        langTotal > 0 &&
        langtype !== 'string' &&
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

  return (
    <>
      <div id="utility" className={styles['utility-navigation']}>
        <div>
          <button
            data-clickable-id={`${compName}-details`}
            data-clickable-text={
              selectedCountry
                ? selectedCountry?.fields?.Title?.value
                : 'United States'
            }
            className={styles['language-selector']}
            onClick={() => props?.openUtilityNav()}
          >
            <Image field={LocationIcon} />
            {selectedCountry
              ? selectedCountry?.fields?.Title?.value
              : 'United States'}
          </button>
        </div>
        {ContactUsLink?.value?.href ? (
          <div>
            <Link
              data-clickable-id={`${compName}-details`}
              data-clickable-text={ContactUsLink?.value?.text}
              data-clickable-href={ContactUsLink?.value?.href}
              field={ContactUsLink}
              className={styles['contact-us']}
              href={ContactUsLink?.value?.href}
              onClick={() => props.clearMenu()}
            >
              <Image field={ContactUsIconDesktop} />
              {ContactUsLink?.value?.text}
            </Link>
          </div>
        ) : (
          <></>
        )}
        {ContactUsSecondaryLink?.value?.href ? (
          <div>
            <Link
              data-clickable-id={`${compName}-details`}
              data-clickable-text={ContactUsSecondaryLink?.value?.text}
              data-clickable-href={ContactUsSecondaryLink?.value?.href}
              field={ContactUsSecondaryLink}
              className={styles['contact-us']}
              href={ContactUsSecondaryLink?.value?.href}
              onClick={() => props.clearMenu()}
            >
              <Image field={ContactUsSecondaryIconDesktop} />
              {ContactUsSecondaryLink?.value?.text}
            </Link>
          </div>
        ) : (
          <></>
        )}
        {LoginIconDesktop?.value?.src || LoginText?.value ? (
          <div data-menu-container>
            <button
              data-clickable-id={`${compName}-details`}
              data-clickable-text={LoginText?.value}
              className={styles['login-account']}
            >
              <div>
                <Image field={LoginIconDesktop} />
              </div>
              <div>{LoginText?.value}</div>
            </button>
            <ul role="list" data-menu>
              {LoginMenuItems?.map((item, key) => {
                return item?.fields?.Link?.value?.href ? (
                  <li key={key}>
                    <Link
                      field={item?.fields?.Link}
                      data-clickable-id={`${compName}-details`}
                      data-clickable-text={item?.fields?.Link?.value?.text}
                      data-clickable-href={item?.fields?.Link?.value?.href}
                    />
                  </li>
                ) : (
                  <></>
                );
              })}
            </ul>
          </div>
        ) : (
          <></>
        )}
        {BuyOnlineIconDesktop?.value?.src || BuyOnlineText?.value ? (
          <div data-menu-container>
            <button
              data-clickable-id={`${compName}-details`}
              data-clickable-text={BuyOnlineText?.value}
              className={styles['btn-icon-utility']}
            >
              <Image field={BuyOnlineIconDesktop} />
              {BuyOnlineText?.value}
              <ul role="list" data-menu>
                {BuyOnlineMenuItems?.map((item, key) => {
                  return item?.fields?.Link?.value?.href ? (
                    <li key={key}>
                      <Link
                        field={item?.fields?.Link}
                        data-clickable-id={`${compName}-details`}
                        data-clickable-text={item?.fields?.Link?.value?.text}
                        data-clickable-href={item?.fields?.Link?.value?.href}
                      />
                    </li>
                  ) : (
                    <></>
                  );
                })}
              </ul>
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default UtilityNavigationDesktop;
