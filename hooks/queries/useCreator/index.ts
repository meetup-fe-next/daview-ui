import { useQuery, UseQueryResult, UseQueryOptions } from '@tanstack/react-query';

import { searchCreatorsFromAlgolia } from '@/server/controllers/creators';

import { KEYS as creatorKeys } from './index.constants';

// 더미 API
import { getCreators } from './api';

import type { Creators } from '@/types/creators.type';

const useGetCreators = (search: string, options?: UseQueryOptions<Creators, Error>): UseQueryResult<Creators, Error> =>
  useQuery({
    queryKey: creatorKeys.filteredCreators({ search }),
    queryFn: () => searchCreatorsFromAlgolia(search),
    ...options,
  });

export { useGetCreators, creatorKeys };
