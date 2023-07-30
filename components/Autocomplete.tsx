'use client';

import type { SearchClient } from 'algoliasearch/lite';
import type { BaseItem } from '@algolia/autocomplete-core';
import type { AutocompleteOptions, Render } from '@algolia/autocomplete-js';
import type { Hit } from '@algolia/client-search';
import type { Root } from 'react-dom/client';

import React, { createElement, Fragment, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

import { useHierarchicalMenu, usePagination, useSearchBox } from 'react-instantsearch-hooks';
import { autocomplete } from '@algolia/autocomplete-js';
import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches';
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';
import { debounce } from '@algolia/autocomplete-shared';

import algoliasearch from 'algoliasearch/lite';
import { createAutocomplete } from '@algolia/autocomplete-core';
import { getAlgoliaResults } from '@algolia/autocomplete-preset-algolia';

import {
  INSTANT_SEARCH_HIERARCHICAL_ATTRIBUTES,
  INSTANT_SEARCH_INDEX_NAME,
  INSTANT_SEARCH_QUERY_SUGGESTIONS,
} from '../constants';

import '@algolia/autocomplete-theme-classic';

type AutocompleteProps = Partial<AutocompleteOptions<BaseItem>> & {
  className?: string;
};

function Autocomplete({ className, ...autocompleteProps }: AutocompleteProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const panelRootRef = useRef<Root | null>(null);
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const autocompleteInstance = autocomplete({
      ...autocompleteProps,

      container: containerRef.current,
      renderer: { createElement, Fragment, render: () => {} },
      render({ children }, root) {
        if (!panelRootRef.current || rootRef.current !== root) {
          rootRef.current = root;

          panelRootRef.current?.unmount();
          panelRootRef.current = createRoot(root);
        }

        panelRootRef.current.render(children);
      },
    });

    return () => autocompleteInstance.destroy();
  }, []);

  return <div id="autocomplete-input" className={className} ref={containerRef} />;
}
export default Autocomplete;
