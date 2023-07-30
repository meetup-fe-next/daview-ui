'use client';

import algoliasearch from 'algoliasearch/lite';
import { Configure, HierarchicalMenu, Hits, InstantSearch, Pagination } from 'react-instantsearch-hooks-web';
import { getAlgoliaResults } from '@algolia/autocomplete-js';

import Autocomplete from '@/components/Autocomplete';
import Hit from '@/components/Hit';

import { ALGOLIA_APP_ID, ALGOLIA_API_KEY } from '../../constants';

function SearchPageContainer() {
  const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

  return (
    <div className="flex flex-col">
      <h1>Algolia 자동 완성 예제</h1>
      <Autocomplete
        openOnFocus={true}
        getSources={({ query }) => [
          {
            sourceId: 'creators-autocomplete',
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: 'creators',
                    query,
                  },
                ],
              });
            },
            templates: {
              item({ item, components }) {
                return <Hit hit={item} components={components} />;
              },
            },
          },
        ]}
      />
    </div>
  );
}
export default SearchPageContainer;
