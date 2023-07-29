import { Categories } from '@/types/categories.type';
import githubSdk from '../libs/githubSdk';

import { type GithubContentEntry } from '@/types/github.type';

/**
 * github에서 최상단 카테고리 조회
 *
 * @return [{name: "backend", path: "contents/backend"},  {name: "frontend", path: "contents/frontend"}]
 */
export const getCategoriesFromGithub = async () => {
  const contents: GithubContentEntry[] = await githubSdk.getContents('contents');
  const categories: Categories = contents.map(({ name, path }) => ({ name, path }));

  return categories;
};
