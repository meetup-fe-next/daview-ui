import { QueryClient } from '@tanstack/query-core';
import { cache } from 'react';

/**
 * NOTE: QueryClient의 request-scoped 싱글톤 인스턴스를 만듭니다.
 * -> 서로 다른 사용자 요청 간에 데이터가 공유되지 않고 요청당 한 번만 쿼리 클라이언트를 만듦
 */
const getQueryClient = cache(() => new QueryClient());
export default getQueryClient;
