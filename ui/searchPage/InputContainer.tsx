'use client';

import { useState, useRef, Fragment } from 'react';
import { getAlgoliaResults, parseAlgoliaHitHighlight } from '@algolia/autocomplete-preset-algolia';
import algoliasearch from 'algoliasearch/lite';

import Input from '@/components/Input';
import { Search as SearchIcon } from '@/components/Icons';

import useAutocomplete from '@/hooks/useAutomcomplete';

import { ALGOLIA_APP_ID, ALGOLIA_API_KEY } from '@/constants';
import Subtitle from '@/components/Typography/Subtitle';

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

const InputContainer = () => {
  const { autocomplete, state } = useAutocomplete({
    id: 'twitter-autocomplete',
    defaultActiveItemId: 0,
    getSources({ query }: any) {
      return [
        {
          sourceId: 'accounts',
          getItems() {
            return getAlgoliaResults({
              searchClient,
              queries: [
                {
                  indexName: 'lectures',
                  query,
                  params: {
                    hitsPerPage: 8,
                  },
                },
              ],
            });
          },
        },
      ];
    },
  });
  const inputRef = useRef(null);

  console.log(state);

  return (
    <div {...autocomplete.getRootProps({})}>
      <form
        {...autocomplete.getFormProps({
          inputElement: inputRef.current,
        })}
      >
        <Input
          ref={inputRef}
          {...autocomplete.getInputProps({
            inputElement: inputRef.current,
            autoFocus: true,
            placeholder: '입력..',
          })}
        />
      </form>

      {/* <button type="submit">검색</button> */}

      <div {...autocomplete.getPanelProps({})} className="">
        {state.isOpen &&
          state.collections.map(({ source, items }: any) => {
            if (items.length === 0) return <p>결과 없음</p>;
            return (
              <ul key={`source-${source.sourceId}`} {...autocomplete.getListProps()}>
                {items.map((item: any) => {
                  const itemProps = autocomplete.getItemProps({
                    item,
                    source,
                  });
                  return (
                    <li key={item.handle} {...itemProps}>
                      <AccountItem hit={item} />
                    </li>
                  );
                })}
              </ul>
            );
          })}
      </div>
    </div>
  );
};

function AccountItem({ hit }: any) {
  return (
    <div className="flex items-center gap-2 p-2">
      <span className="rounded-full bg-black p-2">
        <SearchIcon color="white" size="sm" />
      </span>
      <div>
        <div className="flex">
          <Highlight hit={hit} attribute="name" />
        </div>
      </div>
    </div>
  );
}

const Highlight = ({ hit, attribute }: any) => {
  return (
    <>
      {parseAlgoliaHitHighlight({
        hit,
        attribute,
      }).map(({ value, isHighlighted }, index) => {
        if (isHighlighted) {
          return (
            <Subtitle key={index} type="sub2">
              <span className="text-primary-500">{value}</span>
            </Subtitle>
          );
        }

        return (
          <Subtitle key={index} type="sub2">
            {value}
          </Subtitle>
        );
      })}
    </>
  );
};

export default InputContainer;
