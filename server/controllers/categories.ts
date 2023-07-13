import githubSdk from '../libs/githubSdk';

import { type GithubContentEntry } from '@/types/github.type';

/**
 * 최상단 카테고리 조회
 *
 * @return [{name: "backend", path: "contents/backend"},  {name: "frontend", path: "contents/frontend"}]
 */
export const getCategories = async () => {
  const contents: GithubContentEntry[] = await githubSdk.getContents('contents');
  const categories = contents.map(({ name, path }) => ({ name, path }));

  return categories;
};
