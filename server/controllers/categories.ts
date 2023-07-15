import githubSdk from '../libs/githubSdk';

import { type Categoires } from '@/types/categories.type';
import { type GithubContentEntry } from '@/types/github.type';

/**
 * 최상단 카테고리 조회
 *
 * @return [{name: "backend", path: "contents/backend"},  {name: "frontend", path: "contents/frontend"}]
 */
export const getCategories = async () => {
  const contents: GithubContentEntry[] = await githubSdk.getContents('contents');
  const categories: Categoires = contents.map(({ name, path }) => ({ name, path }));

  return categories;
};
