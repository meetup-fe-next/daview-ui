import algoliasearch from 'algoliasearch';

import {
  ALGOLIA_READ_HOST,
  ALGOLIA_APP_ID,
  ALGOLIA_API_KEY,
  ALGOLIA_ADMIN_API_KEY,
  REVALIDATE_GITHUB_DATA,
} from '@/constants';

import type { LecturesQuery } from '@/types/lectures.type';

const headers = {
  'X-Algolia-Application-Id': ALGOLIA_APP_ID,
  'X-Algolia-API-Key': ALGOLIA_API_KEY,
};
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY);

const getLectures = async ({ search }: LecturesQuery) => {
  const res = await fetch(`${ALGOLIA_READ_HOST}/1/indexes/lectures?query=${search}`, {
    next: { revalidate: REVALIDATE_GITHUB_DATA },
    method: 'GET',
    headers,
  });
  const data = await res.json();

  return data;
};

const saveObjectToIndex = async (indexName: string = 'lectures', objects: any) => {
  const index = client.initIndex(indexName);

  try {
    const response = await index.saveObjects(objects, {
      autoGenerateObjectIDIfNotExist: true,
    });
    console.log('Object saved:', response);
  } catch (error) {
    console.error('Error saving object:', error);
  }
};

const algoliaSdk = {
  getLectures,
  saveObjectToIndex,
};

export default algoliaSdk;
