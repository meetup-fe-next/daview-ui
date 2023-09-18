'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import algoliasearch from 'algoliasearch/lite';
import { getAlgoliaResults, parseAlgoliaHitHighlight } from '@algolia/autocomplete-preset-algolia';

import Input from '@/components/Input';
import Subtitle from '@/components/Typography/Subtitle';
import { Search as SearchIcon } from '@/components/Icons';
import useAutocomplete from '@/hooks/useAutomcomplete';

import { ALGOLIA_APP_ID, ALGOLIA_API_KEY } from '@/constants';

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

const InputContainer = () => {
  const inputRef = useRef(null);
  const { autocomplete, state } = useAutocomplete({
    id: 'autocomplete-input',
    /** Use an Algolia index source. */
    getSources({ query }: any) {
      return [
        {
          sourceId: 'Daview Contents',
          getItemInputValue({ item }: any) {
            return item.query;
          },
          getItemUrl({ item }: any) {
            return item.url;
          },
          getItems() {
            return getAlgoliaResults({
              searchClient,
              queries: [
                {
                  indexName: 'lectures',
                  query,
                  params: {
                    hitsPerPage: 4,
                  },
                },
                {
                  indexName: 'creators',
                  query,
                  params: {
                    hitsPerPage: 4,
                  },
                },
              ],
            });
          },
        },
      ];
    },
  });

  return (
    <div className="aa-Autocomplete" {...autocomplete.getRootProps({})}>
      <form className="aa-Form" {...autocomplete.getFormProps({ inputElement: inputRef.current })}>
        <Input
          ref={inputRef}
          {...autocomplete.getInputProps({
            inputElement: inputRef.current,
            autoFocus: true,
            placeholder: '강의명, 강의자로 검색',
          })}
        />
      </form>
      <div className="aa-Panel" {...autocomplete.getPanelProps({})}>
        {state.isOpen &&
          state.collections.map((collection, index) => {
            const { source, items = [] } = collection;

            return (
              <div key={`source-${index}`} className="aa-Source">
                {items.length > 0 && (
                  <ul {...autocomplete.getListProps()} className="aa-List">
                    {items.map((item) => (
                      <li
                        className="aa-Item"
                        key={item.objectID}
                        {...autocomplete.getItemProps({
                          item,
                          source,
                        })}
                      >
                        <AccountItem hit={item} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
      </div>

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
  const router = useRouter();

  const { name } = hit;

  const handleClickItem = (e: any) => {
    const { search = '' } = e.currentTarget.dataset;

    if (search) router.push(`/lectures?search=${search}`);
  };
  return (
    <div
      data-search={name}
      className="flex cursor-pointer items-center gap-2 p-2 hover:bg-grey-100"
      onClick={handleClickItem}
    >
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
