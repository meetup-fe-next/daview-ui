import { API_URL, REVALIDATE_GITHUB_DATA } from '@/constants';

/**
 * path 하위 content 정보 가져오기
 */
const getContents = async (path: string) => {
  const res = await fetch(`${API_URL}/${path}`, {
    next: { revalidate: REVALIDATE_GITHUB_DATA },
  });
  const data = await res.json();

  return data;
};

const githubSdk = {
  getContents,
};

export default githubSdk;
