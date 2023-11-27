import { useQuery, UseQueryResult, UseQueryOptions } from '@tanstack/react-query';

import { getContributors } from '@/server/controllers/contributors';

import { KEYS as contributorKeys } from './contributor.constants';

import type { ContributorsData } from '@/types/contributors.type';

const useGetContributors = (
  options: UseQueryOptions<ContributorsData[], Error>,
): UseQueryResult<ContributorsData[], Error> =>
  useQuery({
    queryKey: contributorKeys.ALL(),
    queryFn: getContributors,
    ...options,
  });

export { useGetContributors, contributorKeys };
