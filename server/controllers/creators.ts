import { replaceDashWithSpace } from '@/utils';

import { getCategoriesFromGithub } from './categories';
import githubSdk from '../libs/githubSdk';
import algoliaSdk from '../libs/algoliaSdk';

import { type GithubContentEntry } from '@/types/github.type';
import { type CategoryName, type Categories } from '@/types/categories.type';
import { type Creators, type Creator } from '@/types/creators.type';

/**
 * [GET] github에서 크리에이터 리스트 조회
 */
export const getCreatorsFromGithub = async (): Promise<Creators> => {
  const categories: Categories = await getCategoriesFromGithub();
  const creators: Creator[] = [];

  for (const { path: creatorPath } of categories) {
    const contents: GithubContentEntry[] = await githubSdk.getContents(creatorPath);

    for (const { name: creatorName, path: lecturesPath } of contents) {
      /**
       * category
       *
       * @description lecturesPath에서 category를 추출한다.
       * @example lecturesPath = 'contents/frontend/드림코딩-엘리' -> category = 'frontend'
       */
      const category: CategoryName = lecturesPath.split('/')[1];
      const lectures: GithubContentEntry[] = await githubSdk.getContents(lecturesPath);

      const creator: Creator = {
        name: replaceDashWithSpace(creatorName),
        lectures,
        category,
      };

      creators.push(creator);
    }
  }

  return { items: creators, total: creators.length };
};

/**
 * [GET] algolia 에서 강의 검색 후 리스트 반환
 */
export const searchCreatorsFromAlgolia = async (search: string): Promise<Creators> => {
  const { hits, nbHits } = await algoliaSdk.getObjectsFromIndex('creators', search);

  return {
    items: hits,
    total: nbHits,
  };
};

/**
 * [POST] algolia에 크리에이터 리스트 저장
 */
export const saveCreatorsToAlgolia = async () => {
  try {
    const { items: creators } = await getCreatorsFromGithub();
    const res = await algoliaSdk.saveObjectsToIndex('creators', creators);

    return res;
  } catch (error) {
    console.error(error);
  }
};
