'use client';

import React, { useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type QueryProviderProps = {
  children: React.ReactNode;
};

function QueryProvider({ children }: QueryProviderProps) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        /**
         * react-query 전역 옵션 설정
         */
        queries: {
          // staleTime: 1000 * 60 * 1, // 1분
          retry: 1,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default QueryProvider;
