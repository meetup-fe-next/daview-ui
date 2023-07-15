import { GITHUB_REPOSITORY_API_URL, GITHUB_REPOSITORY_BRANCH, REVALIDATE_GITHUB_DATA } from '@/constants';

/**
 * path 하위 content 정보 가져오기
 */
const getContents = async (path: string) => {
  const res = await fetch(`${GITHUB_REPOSITORY_API_URL}/${path}?ref=${GITHUB_REPOSITORY_BRANCH}`, {
    next: { revalidate: REVALIDATE_GITHUB_DATA },
  });
  const data = await res.json();

  return data;
};

const githubSdk = {
  getContents,
};

export default githubSdk;
