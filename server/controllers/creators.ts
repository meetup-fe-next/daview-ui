import { replaceDashWithSpace } from '@/utils';

import githubSdk from '../libs/githubSdk';
import { getCategories } from './categories';

import { type GithubContentEntry } from '@/types/github.type';
import { type CategoryName, type Categories } from '@/types/categories.type';
import { type Creators, type Creator } from '@/types/creators.type';

/**
 * 크리에이터 리스트 조회
 */
export const getCreators = async (): Promise<Creators> => {
  const categories: Categories = await getCategories();
  const creators: Creators = [];

  for (const { path: creatorPath } of categories) {
    const contents: GithubContentEntry[] = await githubSdk.getContents(creatorPath);

    for (const { name: creatorName, path: lecturesPath } of contents) {
      /**
       * category
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

  return creators;
};
