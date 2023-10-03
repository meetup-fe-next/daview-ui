import { useQuery, UseQueryResult, UseQueryOptions } from '@tanstack/react-query';

import { searchLecturesFromAlgolia } from '@/server/controllers/lectures';

import { KEYS as lecturesKeys } from './index.constants';

// import { getLectures } from './api';

import type { Lectures } from '@/types/lectures.type';

/**
 * NOTE: lecture 관련 쿼리 훅 생기면 아래 예시 이름 처럼 추가하기
 */
// const useGetLecture = () => {};
// const useUpdateLecture = () => {};

const useGetLectures = (search: string, options?: UseQueryOptions<Lectures, Error>): UseQueryResult<Lectures, Error> =>
  useQuery({
    queryKey: lecturesKeys.filteredLectures({ search }),
    queryFn: () => searchLecturesFromAlgolia(search),
    ...options,
  });

export { useGetLectures, lecturesKeys };
