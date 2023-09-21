import { useState, useMemo } from 'react';
import { createAutocomplete } from '@algolia/autocomplete-core';

function useAutocomplete(props: any) {
  const [state, setState] = useState(() => ({
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    query: '',
    activeItemId: null,
    status: 'idle',
  }));

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        ...props,
        onStateChange(params: any) {
          // props.onStateChange?.(params);
          // Synchronize the Autocomplete state with the React state.
          setState(params.state);
        },
      }),
    [],
  );

  return { autocomplete, state };
}

export default useAutocomplete;
