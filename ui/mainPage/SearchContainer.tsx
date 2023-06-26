'use client';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web';

import { ALGOLIA_APP_ID, ALGOLIA_API_KEY } from '@/constants';

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

function SearchContainer() {
  return (
    <InstantSearch searchClient={searchClient} indexName="lectures">
      <SearchBox className="border-solid border-2 border-sky-500" />
      <Hits className="border-solid border-2 border-sky-500" />
    </InstantSearch>
  );
}

export default SearchContainer;
