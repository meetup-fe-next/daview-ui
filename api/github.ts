import { API_URL, CONTENTS_PATH, REVALIDATE_GITHUB_DATA } from '@/constants';
import { type GithubMarkdown } from '@/types/github.type';

/**
 * GET 최상단 카테고리
 *
 * @return ['frontend', 'backend', ...]
 */
export const getCategories = async () => {
  const res = await fetch(`${API_URL}`, {
    next: { revalidate: REVALIDATE_GITHUB_DATA },
  });
  const data: GithubMarkdown[] = await res.json();

  return data.filter(({ name }) => name !== 'README.md');
};

/**
 * GET 강의 크리에이터
 *
 * @return ['토비', '제로초', ...]
 */
export const getCreator = async (path: string) => {
  const res = await fetch(`${API_URL}/${path}`, {
    next: { revalidate: REVALIDATE_GITHUB_DATA },
  });
  const data: GithubMarkdown[] = await res.json();

  return data;
};

/**
 * GET 강의
 *
 * @return ['토비-스프링-부트-이해와-원리', 'Slack-클론-코딩-실시간-채팅-with-React', ...]
 */
export const getLecture = async () => {};
