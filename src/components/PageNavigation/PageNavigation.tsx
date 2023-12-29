import {
  Field,
  Link as JssLink,
  LinkField,
  TextField,
  useSitecoreContext,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ComponentProps } from 'lib/component-props';
import add from '../../assets/icons/add-white.svg';
import classNames from 'classnames';
import hideBackToTop from 'src/utils/hideBackToTop';
import remove from '../../assets/icons/remove-white.svg';
import showBackToTop from 'src/utils/showBackToTop';
import styles from './PageNavigation.module.css';
import { useI18n } from 'next-localization';

type AnchorListProps = {
  fields: {
    DisplayName: Field<string>;
    Id: Field<string>;
  };
};

type GrandChildNavigationListProps = {
  name: string;
  fields: {
    GrandChildPageLink: LinkField;
  };
};

type SubPageNavigationListProps = {
  name: string;
  fields: {
    ChildPageLink: LinkField;
    GrandChildNavigationList: GrandChildNavigationListProps[];
  };
};

type PageNavigationProps = ComponentProps & {
  fields: {
    Title?: TextField;
    SubPageNavigationList: SubPageNavigationListProps[];
    AnchorList: AnchorListProps[];
    CTA: LinkField;
    SecondaryCTA: LinkField;
    SecondaryCTAIcon: {
      fields: {
        Value: TextField;
      };
    };
  };
};

const PageNavigation = (props: PageNavigationProps): JSX.Element => {
  const { fields } = props;
  const Title = fields?.Title;
  const SubPageNavigationList = fields?.SubPageNavigationList;
  const AnchorList = fields?.AnchorList;
  const CTA = fields?.CTA;
  const SecondaryCTA = fields?.SecondaryCTA;
  const SecondaryCTAIcon = fields?.SecondaryCTAIcon;
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const [childExpanded, setChildExpanded] = useState<null | number>(null);
  const subMenuTimeoutRef = useRef<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const anchorListContainerRef = useRef<HTMLDivElement>(null);
  const [activeAnchorLink, setActiveAnchorLink] = useState('');
  const { t } = useI18n() || {};
  const jumpToDictionary = t ? t('page-navigation-jump-to') : 'Jump To';
  const isEditing = useSitecoreContext().sitecoreContext.pageEditing;
  const compName = props?.rendering?.componentName?.toLowerCase();

  useEffect(() => {
    const el = anchorListContainerRef.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([e]) => (el.dataset.isPinned = String(e.intersectionRatio < 1)),
      { threshold: [1] }
    );

    observer.observe(el);
  }, []);

  useEffect(() => {
    function handleIntersection(entries: IntersectionObserverEntry[]) {
      entries?.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveAnchorLink(entry?.target?.id);
        }
      });
    }

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0,
    });

    AnchorList?.forEach((link) => {
      const targetElement = document.getElementById(link?.fields?.Id?.value);

      if (targetElement) {
        observer.observe(targetElement);
      }
    });
  }, [AnchorList]);

  const isFirstChildPageLink =
    SubPageNavigationList && SubPageNavigationList.length > 0
      ? SubPageNavigationList[0]
      : null;

  const isActiveChildPageLink = useMemo(() => {
    return SubPageNavigationList?.find(
      (childPage) => childPage?.fields?.ChildPageLink?.value?.class === 'active'
    );
  }, [SubPageNavigationList]);

  const hasActiveGrandchildPageLink = useMemo(() => {
    return SubPageNavigationList?.find(
      (childPage) =>
        childPage?.fields?.GrandChildNavigationList?.find(
          (grandchild) =>
            grandchild?.fields?.GrandChildPageLink?.value?.class === 'active'
        )
    );
  }, [SubPageNavigationList]);

  const isActiveGrandchildPageLink = useMemo(() => {
    if (hasActiveGrandchildPageLink) {
      return hasActiveGrandchildPageLink?.fields?.GrandChildNavigationList?.find(
        (grandchild) =>
          grandchild?.fields?.GrandChildPageLink?.value?.class === 'active'
      );
    }

    return undefined;
  }, [hasActiveGrandchildPageLink]);

  const mobileAccordionHeader = useMemo(() => {
    // Case #1: if there is a title & first child is active
    // closed & open states should reflect title
    if (Title?.value && isActiveChildPageLink === isFirstChildPageLink) {
      return {
        closedText: Title.value,
        openText: Title.value,
      };
    }

    // Case #2: if there is a title & and any grandchild or non-first child is active
    // closed should reflect active link while open reflects title
    if (Title?.value && isActiveChildPageLink) {
      return {
        closedText: isActiveChildPageLink?.fields?.ChildPageLink?.value?.text,
        openText: Title.value,
      };
    }

    if (Title?.value && isActiveGrandchildPageLink) {
      return {
        closedText:
          isActiveGrandchildPageLink?.fields?.GrandChildPageLink?.value?.text,
        openText: Title.value,
      };
    }

    // Case #3: if there is no title & and any active child or grandchild
    // closed should reflect active link while open reflects 1st child
    if (!Title?.value && isActiveChildPageLink) {
      return {
        closedText: isActiveChildPageLink?.fields?.ChildPageLink?.value?.text,
        openText: isFirstChildPageLink?.fields?.ChildPageLink?.value?.text,
      };
    }

    if (!Title?.value && isActiveGrandchildPageLink) {
      return {
        closedText:
          isActiveGrandchildPageLink?.fields?.GrandChildPageLink?.value?.text,
        openText: isFirstChildPageLink?.fields?.ChildPageLink?.value?.text,
      };
    }

    // Case #4: if there is a title but no active child or grandchild
    // closed & open states should reflect title
    if (Title?.value && !isActiveChildPageLink && !isActiveGrandchildPageLink) {
      return {
        closedText: Title.value,
        openText: Title.value,
      };
    }

    // Case #5: if there is no title and no active child or grandchild
    // closed & open states should 1st child
    return {
      closedText: isFirstChildPageLink?.fields?.ChildPageLink?.value?.text,
      openText: isFirstChildPageLink?.fields?.ChildPageLink?.value?.text,
    };
  }, [
    Title,
    isActiveChildPageLink,
    isActiveGrandchildPageLink,
    isFirstChildPageLink,
  ]);

  const handleClick = () => {
    setIsOpen(false);
  };

  const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callback();
        }
      };

      document.addEventListener('click', handleClick, true);

      return () => {
        document.removeEventListener('click', handleClick, true);
      };
    }, [callback, ref]);

    return ref;
  };

  const ref = useOutsideClick(() => setIsOpen(false));

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setIsMenuVisible(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setIsMenuVisible(false);
    }, 1000);
  };

  const handleSubMenuMouseEnter = (index: number) => {
    if (subMenuTimeoutRef.current) {
      clearTimeout(subMenuTimeoutRef.current);
    }

    setChildExpanded(index);
  };

  const handleSubMenuMouseLeave = (index: number) => {
    if (subMenuTimeoutRef.current) {
      clearTimeout(subMenuTimeoutRef.current);
    }

    subMenuTimeoutRef.current = window.setTimeout(() => {
      setChildExpanded(index);
    }, 1000);
  };

  useEffect(() => {
    if (isOpen) {
      hideBackToTop();
    } else {
      showBackToTop();
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={styles['page-navigation']}
        data-is-open={isOpen}
        data-is-pagenav={true}
        data-has-anchor-links={AnchorList?.length > 0}
        data-has-sub-page-navigation={
          SubPageNavigationList && SubPageNavigationList?.length > 0
        }
      >
        <div ref={ref}>
          <h2
            className={styles['page-navigation-header']}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen
              ? mobileAccordionHeader.openText
              : mobileAccordionHeader.closedText}
            <img className={styles.remove} src={remove.src} alt="" />
            <img className={styles.add} src={add.src} alt="" />
          </h2>
          <div className={styles['page-navigation-container']}>
            {SubPageNavigationList && SubPageNavigationList?.length > 0 && (
              <div className={styles['sub-page-nav-list-container']}>
                <div>
                  <ul role="list" className={styles['sub-page-nav-list']}>
                    {SubPageNavigationList?.map((element, i) => {
                      const fields = element?.fields;
                      const hasActiveGrandchild =
                        fields?.GrandChildNavigationList?.find(
                          (grandchild) =>
                            grandchild?.fields?.GrandChildPageLink?.value
                              ?.class === 'active'
                        )
                          ? 'active-grandchild'
                          : '';

                      return (
                        <li
                          key={i}
                          className={classNames(
                            `${fields?.ChildPageLink?.value?.class}`,
                            hasActiveGrandchild
                          )}
                        >
                          <JssLink
                            field={fields?.ChildPageLink}
                            className={styles['child-page-link']}
                            onClick={handleClick}
                            data-clickable-id={`${compName}-details`}
                            data-clickable-text={
                              fields?.ChildPageLink?.value?.text
                            }
                            data-clickable-href={
                              fields?.ChildPageLink?.value?.href
                            }
                          >
                            {isEditing
                              ? null
                              : fields?.ChildPageLink?.value?.text}
                            {fields?.GrandChildNavigationList?.length > 0 && (
                              <div className={styles['caret-container']}>
                                <div className={styles.caret} />
                              </div>
                            )}
                          </JssLink>

                          {fields?.GrandChildNavigationList?.length > 0 && (
                            <ul
                              role="list"
                              className={styles['grandchild-nav-list']}
                              data-has-more-than-eight={
                                fields?.GrandChildNavigationList?.length > 8
                              }
                            >
                              {fields?.GrandChildNavigationList?.map(
                                (
                                  { fields }: GrandChildNavigationListProps,
                                  i
                                ) => {
                                  return (
                                    <li
                                      key={i}
                                      className={`${fields?.GrandChildPageLink?.value?.class}`}
                                    >
                                      <JssLink
                                        field={fields?.GrandChildPageLink}
                                        onClick={handleClick}
                                        data-clickable-id={`${compName}-details`}
                                        data-clickable-text={
                                          fields?.GrandChildPageLink?.value
                                            ?.text
                                        }
                                        data-clickable-href={
                                          fields?.GrandChildPageLink?.value
                                            ?.href
                                        }
                                      />
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {CTA?.value?.href && (
                  <div className={styles.cta}>
                    <JssLink
                      className={classNames('btn-secondary', styles.button)}
                      field={CTA}
                      data-clickable-id={`${compName}-details`}
                      data-clickable-text={CTA?.value?.text}
                      data-clickable-href={CTA?.value?.href}
                    />
                  </div>
                )}
                {SecondaryCTA?.value?.href && (
                  <div className={styles.cta}>
                    <JssLink
                      data-icon={SecondaryCTAIcon?.fields?.Value?.value}
                      className={classNames(
                        SecondaryCTAIcon?.fields?.Value?.value
                          ? 'btn-icon'
                          : 'btn-secondary',
                        styles.button,
                        SecondaryCTA?.value?.class
                      )}
                      field={SecondaryCTA}
                      data-clickable-id={`${compName}-details`}
                      data-clickable-text={SecondaryCTA?.value?.text}
                      data-clickable-href={SecondaryCTA?.value?.href}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        ref={anchorListContainerRef}
        className={styles['anchor-list-container']}
      >
        {AnchorList && AnchorList?.length > 0 && (
          <>
            <div className={styles['jump-to']}>{jumpToDictionary}</div>
            <div>
              <ul role="list" className={styles['anchor-list']}>
                {SubPageNavigationList && SubPageNavigationList?.length > 0 && (
                  <li
                    className={classNames(
                      styles['anchor-child'],
                      isMenuVisible ? styles.hovered : ''
                    )}
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={() => handleMouseLeave()}
                  >
                    {Title?.value &&
                    (isActiveChildPageLink === isFirstChildPageLink ||
                      hasActiveGrandchildPageLink === isFirstChildPageLink)
                      ? Title?.value
                      : isActiveChildPageLink
                      ? isActiveChildPageLink?.fields?.ChildPageLink?.value
                          ?.text
                      : hasActiveGrandchildPageLink
                      ? hasActiveGrandchildPageLink?.fields?.ChildPageLink
                          ?.value?.text
                      : isFirstChildPageLink?.fields?.ChildPageLink?.value
                          ?.text}
                    <div className={styles['caret-container']} data-attr="true">
                      <div className={styles.caret} />
                    </div>
                    <ul role="list" className={styles['sticky-child-nav-list']}>
                      {SubPageNavigationList?.map((element, i) => {
                        const fields = element?.fields;

                        return (
                          <li
                            key={i}
                            onMouseEnter={() => handleSubMenuMouseEnter(i)}
                            onMouseLeave={() => handleSubMenuMouseLeave(i)}
                          >
                            <JssLink
                              field={fields?.ChildPageLink}
                              data-clickable-id={`${compName}-details`}
                              data-clickable-text={
                                fields?.ChildPageLink?.value?.text
                              }
                              data-clickable-href={
                                fields?.ChildPageLink?.value?.href
                              }
                            >
                              {isEditing
                                ? null
                                : fields?.ChildPageLink?.value?.text}
                              {fields?.GrandChildNavigationList?.length > 0 && (
                                <div className={styles['caret-container']}>
                                  <div className={styles.caret} />
                                </div>
                              )}
                            </JssLink>

                            {fields?.GrandChildNavigationList?.length > 0 && (
                              <ul
                                role="list"
                                className={classNames(
                                  styles['sticky-grandchild-nav-list'],
                                  childExpanded === i ? styles.expanded : ''
                                )}
                                data-has-more-than-eight={
                                  fields?.GrandChildNavigationList?.length > 8
                                }
                              >
                                {fields?.GrandChildNavigationList?.map(
                                  (
                                    { fields }: GrandChildNavigationListProps,
                                    i
                                  ) => {
                                    return (
                                      <li key={i}>
                                        <JssLink
                                          field={fields?.GrandChildPageLink}
                                          data-clickable-id={`${compName}-details`}
                                          data-clickable-text={
                                            fields?.GrandChildPageLink?.value
                                              ?.text
                                          }
                                          data-clickable-href={
                                            fields?.GrandChildPageLink?.value
                                              ?.href
                                          }
                                        />
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                )}
                {AnchorList?.map(({ fields }: AnchorListProps, i) => (
                  <li
                    key={i}
                    className={
                      fields?.Id?.value === activeAnchorLink ? 'active' : ''
                    }
                  >
                    <a
                      href={`#${fields?.Id?.value}`}
                      data-clickable-id={`${compName}-details`}
                      data-clickable-text={fields?.DisplayName?.value}
                      data-clickable-href={`#${fields?.Id?.value}`}
                    >
                      {fields?.DisplayName?.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {CTA?.value?.href && (
              <div className={styles.cta}>
                <JssLink
                  className={classNames('btn-secondary', styles.button)}
                  field={CTA}
                  data-clickable-id={`${compName}-details`}
                  data-clickable-text={CTA?.value?.text}
                  data-clickable-href={CTA?.value?.href}
                />
              </div>
            )}
            {SecondaryCTA?.value?.href && (
              <div className={styles.cta}>
                <JssLink
                  data-icon={SecondaryCTAIcon?.fields?.Value?.value}
                  className={classNames(
                    SecondaryCTAIcon?.fields?.Value?.value
                      ? 'btn-icon'
                      : 'btn-secondary',
                    styles.button,
                    SecondaryCTA?.value?.class
                  )}
                  field={SecondaryCTA}
                  data-clickable-id={`${compName}-details`}
                  data-clickable-text={SecondaryCTA?.value?.text}
                  data-clickable-href={SecondaryCTA?.value?.href}
                />
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default withDatasourceCheck()<PageNavigationProps>(PageNavigation);
