import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';
import {
  ComponentParams,
  ComponentRendering,
  ImageField,
  NextImage as JssNextImage,
  Placeholder,
  Text,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { getAnchorTag } from 'src/helpers/AnchorHelper';
import styles from './VerticalTabs.module.css';
import { useMediaQuery } from 'react-responsive';

type VerticalTab = {
  Fields: {
    Title: TextField;
    Id: TextField;
  };
};

interface VerticalTabsProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: {
    Headline: TextField;
    HeaderImage: ImageField;
    Children: VerticalTab[];
  };
  selectedTab?: string;
  handleTabClick: (e: string) => void;
  contentRef: React.RefObject<HTMLDivElement>;
  isEditing: boolean;
  isDesktop: boolean;
  compName: string;
}

const Mobile = ({
  fields,
  selectedTab,
  rendering,
  contentRef,
  compName,
}: VerticalTabsProps) => {
  const Children = fields?.Children;

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current
        .querySelectorAll<HTMLElement>(':scope > details[data-tabid]')
        .forEach((child) => {
          child.removeAttribute('open');

          if (child.dataset?.tabid) {
            document
              .querySelectorAll<HTMLElement>(
                `div[data-tabid="${child.dataset?.tabid}"]:not([data-rte])`
              )
              .forEach((content) => {
                child.appendChild(content);
              });
          }
        });
    }

    if (selectedTab) {
      document
        .querySelector(`details[data-tabid="${selectedTab}"]`)
        ?.setAttribute('open', 'open');
    }

    // document
    //   .querySelector(String(Children[0]?.Fields?.Id?.value))
    //   ?.setAttribute('open', 'open');
  }, [contentRef, selectedTab, Children]);

  return (
    <div ref={contentRef} className={styles.list}>
      {Children &&
        Children.length > 0 &&
        Children.map((tabprops, index) => {
          return (
            <details
              className={styles.details}
              key={index}
              data-tabid={String(tabprops?.Fields?.Id?.value)}
              open={
                (selectedTab && selectedTab === tabprops?.Fields?.Id?.value) ||
                (!selectedTab && index === 0) ||
                (!Children.find(
                  (tabprops) => tabprops?.Fields?.Id?.value === selectedTab
                ) &&
                  index === 0)
              }
              data-clickable-action="close"
              data-clickable-id={`${compName}-details`}
              data-clickable-text={tabprops?.Fields?.Title?.value}
              onClick={(e: BaseSyntheticEvent) => {
                if (e.currentTarget.getAttribute('open') === '') {
                  e.currentTarget.setAttribute(
                    'data-clickable-action',
                    'close'
                  );
                } else {
                  e.currentTarget.setAttribute('data-clickable-action', 'open');
                }

                if (contentRef.current) {
                  [...contentRef.current.children].forEach((child) => {
                    if (child === e.currentTarget) {
                      e.currentTarget.open
                        ? child.setAttribute('open', 'open')
                        : child.removeAttribute('open');
                    } else {
                      child.removeAttribute('open');
                    }
                  });
                }

                const url = new URL(String(window.location));

                url.searchParams.set(
                  'tab',
                  e.currentTarget.dataset.tabid.replace('tab', '')
                );
                window.history.pushState({}, '', url);
              }}
            >
              <Text tag="summary" field={tabprops?.Fields?.Title} />
            </details>
          );
        })}
      <Placeholder name={`verticaltab`} rendering={rendering} />
    </div>
  );
};

const Desktop = ({
  fields,
  selectedTab,
  handleTabClick,
  contentRef,
  rendering,
  isEditing,
  compName,
}: VerticalTabsProps) => {
  const Children = fields?.Children;

  useEffect(() => {
    if (isEditing) return;

    if (contentRef.current) {
      [...contentRef.current.children].forEach((child) => {
        child.setAttribute('hidden', 'true');
      });

      contentRef.current
        .querySelectorAll('[data-nested]')
        .forEach((element: HTMLElement) => {
          element.dataset.nested = 'true';
        });
    }

    if (selectedTab) {
      document
        .querySelectorAll(`[data-tabid="${selectedTab}"]`)
        .forEach((tab) => {
          tab.removeAttribute('hidden');
        });

      return;
    }

    if (Children[0]?.Fields?.Id?.value) {
      document
        .querySelectorAll(
          `[data-tabid="${String(Children[0]?.Fields?.Id?.value)}"]`
        )
        .forEach((tab) => {
          tab.removeAttribute('hidden');
        });
    }
  }, [contentRef, selectedTab, isEditing, Children]);

  return (
    <div className={styles.desktop} data-is-editing={isEditing}>
      <div>
        <nav className={styles['desktop-nav']}>
          <ul role="list" className={styles['desktop-nav-list']}>
            {Children &&
              Children.length > 0 &&
              Children.map((tabprops, index) => (
                <li
                  key={index}
                  className={
                    (selectedTab &&
                      selectedTab === tabprops?.Fields?.Id?.value) ||
                    (!selectedTab && index === 0) ||
                    (!Children.find(
                      (tabprops) => tabprops?.Fields?.Id?.value === selectedTab
                    ) &&
                      index === 0)
                      ? styles.selected
                      : ''
                  }
                  onClick={() =>
                    handleTabClick(String(tabprops?.Fields?.Id?.value))
                  }
                  data-clickable-action={
                    tabprops?.Fields?.Id?.value === selectedTab
                  }
                  data-clickable-id={`${compName}-details`}
                  data-clickable-text={tabprops?.Fields?.Title?.value}
                >
                  <Text
                    tag="a"
                    field={tabprops?.Fields?.Title}
                    data-id={tabprops?.Fields?.Id?.value}
                  />
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <div className={styles.content}>
        <h3 className={`font-header-h4 ${styles.h3}`}>
          {Children.find(
            (tabprops) =>
              tabprops?.Fields?.Id.value &&
              tabprops?.Fields?.Id.value === selectedTab
          )?.Fields?.Title?.value || Children[0]?.Fields?.Title?.value}
        </h3>
        <div ref={contentRef} className={styles.content}>
          <Placeholder name={`verticaltab`} rendering={rendering} />
        </div>
      </div>
    </div>
  );
};

const VerticalTabs = (props: VerticalTabsProps): JSX.Element => {
  const { fields } = props;
  const Headline = fields?.Headline;
  const HeaderImage = fields?.HeaderImage;
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const { sitecoreContext } = useSitecoreContext();
  const [selectedTab, setSelectedTab] = useState('');
  const compName = props?.rendering?.componentName?.toLowerCase();

  const handleTabClick = (fragment: string) => {
    if (fragment) {
      setSelectedTab(fragment);
      const url = new URL(String(window.location));

      url.searchParams.set('tab', fragment);
      window.history.pushState({}, '', url);
    }
  };

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tab = new URLSearchParams(window.location.search).get('tab');

    if (tab) {
      setSelectedTab(tab);
    }
  }, [selectedTab]);

  return !sitecoreContext.pageEditing && !fields ? (
    <></>
  ) : (
    <>
      {getAnchorTag(props)}
      <div className={styles['vertical-tabs']}>
        <h2 className={styles.h2}>
          <Text field={Headline} />
          {sitecoreContext.pageEditing ? null : (
            <JssNextImage field={HeaderImage} fill />
          )}
        </h2>
        {typeof window === 'undefined' || isDesktop ? (
          <Desktop
            {...props}
            isEditing={Boolean(sitecoreContext.pageEditing)}
            selectedTab={selectedTab}
            handleTabClick={handleTabClick}
            contentRef={contentRef}
            compName={compName}
          />
        ) : (
          <Mobile
            {...props}
            selectedTab={selectedTab}
            contentRef={contentRef}
            compName={compName}
          />
        )}
      </div>
    </>
  );
};

export default withDatasourceCheck()<VerticalTabsProps>(VerticalTabs);
