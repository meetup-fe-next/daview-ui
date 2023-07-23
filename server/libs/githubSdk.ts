import { GITHUB_REPOSITORY_API_URL, GITHUB_REPOSITORY_BRANCH, REVALIDATE_GITHUB_DATA } from '@/constants';

/**
 * [GET] Github Repository contents API - getContents
 *
 * @description path 하위의 Repository content를 가져오는 API
 * @links https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#get-repository-content
 */
const getContents = async (path: string) => {
  const res = await fetch(`${GITHUB_REPOSITORY_API_URL}/${path}?ref=${GITHUB_REPOSITORY_BRANCH}`, {
    // TODO: next fetch 옵션 어떻게 할지 정하기
    // next: { revalidate: REVALIDATE_GITHUB_DATA },
  });
  const data = await res.json();

  return data;
};

const githubSdk = {
  getContents,
};

export default githubSdk;
