import {
  ALGOLIA_WRITE_HOST,
  ALGOLIA_READ_HOST,
  ALGOLIA_APP_ID,
  ALGOLIA_API_KEY,
  ALGOLIA_ADMIN_API_KEY,
  REVALIDATE_GITHUB_DATA,
} from '@/constants';

import { Lectures, Lecutre } from '@/types/lectures.type';
import { type ObjectToSave, type ObjectsToSave } from '@/types/algolia.type';

const ALGOLIA_HEADERS = {
  'Content-Type': 'application/json',
  'X-Algolia-Application-Id': ALGOLIA_APP_ID,
};

/**
 * [GET] Algolia Search API - getObjectsFromIndex
 *
 * @description 특정 index에서 검색 후 검색 결과 반환
 * @links https://www.algolia.com/doc/rest-api/search/#search-index-get
 */
const getObjectsFromIndex = async (indexName: string, search: string): Promise<any> => {
  const res = await fetch(`${ALGOLIA_READ_HOST}/1/indexes/${indexName}?query=${search}`, {
    // TODO: next fetch 옵션 어떻게 할지 정하기
    // next: { revalidate: REVALIDATE_GITHUB_DATA },
    method: 'GET',
    headers: {
      ...ALGOLIA_HEADERS,
      'X-Algolia-API-Key': ALGOLIA_API_KEY,
    },
  });

  return res.json();
};

/**
 * [POST] Algolia Search API - saveObjectsToIndex
 *
 * @description 특정 index에 object 여러개 저장
 * @links https://www.algolia.com/doc/rest-api/search/#search-index-post
 */
const saveObjectsToIndex = async (indexName: string, objects: any): Promise<any> => {
  const data = objects.map((item: any) => ({ action: 'addObject', body: item }));
  const res = await fetch(`${ALGOLIA_WRITE_HOST}/1/indexes/${indexName}/batch`, {
    // TODO: next fetch 옵션 어떻게 할지 정하기
    // next: { revalidate: REVALIDATE_GITHUB_DATA },
    method: 'POST',
    headers: {
      ...ALGOLIA_HEADERS,
      'X-Algolia-API-Key': ALGOLIA_ADMIN_API_KEY,
    },
    body: JSON.stringify({ requests: data }),
  });

  return res.json();
};

const algoliaSdk = {
  getObjectsFromIndex,
  saveObjectsToIndex,
};

export default algoliaSdk;
