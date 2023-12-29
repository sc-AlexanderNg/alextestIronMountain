import '@algolia/autocomplete-theme-classic';
import { LinkField, TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import React, {
  Fragment,
  createElement,
  useEffect,
  useMemo,
  useRef,
} from 'react';

import algoliasearch from 'algoliasearch/lite';
import { autocomplete } from '@algolia/autocomplete-js';
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';
import { createRoot } from 'react-dom/client';
import styles from './AutoComplete.module.css';
import { useI18n } from 'next-localization';
import { useRouter } from 'next/router';

type SearchSettings = {
  fields: {
    InstanceID: TextField;
    APIKey: TextField;
    IndexName: TextField;
  };
  searchLink: LinkField;
};

export const Autocomplete = (props: SearchSettings) => {
  const { t } = useI18n() || {};
  const lookingforLabel = t ? t('search-looking-for') : "I'm looking for...";
  const router = useRouter();
  const searchUrl = `${props?.searchLink?.value?.href}?q=`;

  const instanceId = props?.fields?.InstanceID?.value
    ? props?.fields?.InstanceID?.value.toString()
    : '';

  const apiKey = props?.fields?.APIKey?.value
    ? props?.fields?.APIKey?.value.toString()
    : '';

  const indexName = props?.fields?.IndexName?.value
    ? props?.fields?.IndexName?.value.toString()
    : '';

  const client = algoliasearch(instanceId, apiKey);
  const containerRef = useRef(null);
  const panelRoot = useRef(null);

  const plugins = useMemo(() => {
    return [
      createQuerySuggestionsPlugin({
        searchClient: client,
        indexName,
        transformSource({ source }) {
          return {
            ...source,
            onSelect({ state }) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              if ((window as any).dataLayer) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (window as any).dataLayer.push({
                  event: 'Algolia',
                  text: state.query,
                  page: window.location,
                  action: 'search',
                  component: 'navigation',
                  actionDetails: 'query_suggest_search',
                });
              }

              router.push(searchUrl + state.query);
            },
          };
        },
      }),
    ];
    // We never want our plugins to update after they've been declared.
    // It will always be the same AutocompletePlugin[]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = autocomplete({
      container: '#autocomplete',
      renderer: {
        createElement,
        Fragment,
      },
      render({ children }, root) {
        if (!panelRoot.current) {
          // eslint-disable-next-line
          // @ts-ignore - panelRoot is always defined
          panelRoot.current = createRoot(root);
        }

        // eslint-disable-next-line
        // @ts-ignore - panelRoot is always defined
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        panelRoot.current!.render(children);
      },
      openOnFocus: true,
      plugins,
      placeholder: lookingforLabel,
      detachedMediaQuery: 'none',

      onSubmit({ state }) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((window as any).dataLayer) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).dataLayer.push({
            event: 'Algolia',
            text: state.query,
            page: window.location,
            action: 'search',
            component: 'navigation',
            actionDetails: 'manual_search',
          });
        }

        router.push(searchUrl + state.query);
      },
    });

    const input = document.querySelector('.aa-Autocomplete') as HTMLElement;

    if (input) {
      input.addEventListener('focusin', () => {
        input.dataset.hasFocus = 'true';
      });
      input.addEventListener('focusout', () => {
        input.dataset.hasFocus = 'false';
      });
    }

    return () => {
      search.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   const el = document.querySelector('.sticky-header');

  //   if (!el) return;

  //   const observer = new IntersectionObserver(
  //     ([e]) => {
  //       el.dataset.isSticky = String(e.intersectionRatio < 1);
  //       console.log(e.intersectionRatio);
  //     },
  //     { threshold: [1] }
  //   );

  //   observer.observe(el);
  // }, []);

  return (
    <div ref={containerRef} id="autocomplete" className={styles.autocomplete} />
  );
};
