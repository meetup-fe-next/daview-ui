import { API_URL, CONTENTS_PATH, REVALIDATE_GITHUB_DATA } from '@/constants';
import { type GithubMarkdown } from '@/types/github.type';

/**
 * 최상단 카테고리 조회
 *
 * @return ['frontend', 'backend', ...]
 */
export const getCategories = async () => {
  const res = await fetch(`${API_URL}`, {
    next: { revalidate: REVALIDATE_GITHUB_DATA },
  });
  const resJson: GithubMarkdown[] = await res.json();
  const data = resJson.filter(({ name }) => name !== 'README.md');

  /**
   * NOTE: 최상단의 README.md 파일은 제거하기
   */
  return data;
};

/**
 * 강의자 조회
 *
 * @return ['토비', '제로초', ...]
 */
export const getCreators = async () => {
  const categories = await getCategories();
  let data: GithubMarkdown[] = [];

  for (const { path } of categories) {
    const res = await fetch(`${API_URL}/${path}`, {
      next: { revalidate: REVALIDATE_GITHUB_DATA },
    });
    const resJson = await res.json();

    data = data.concat(resJson);
  }
  return data;
};

/**
 * 강의 목록 조회
 *
 * @return ['토비-스프링-부트-이해와-원리', 'Slack-클론-코딩-실시간-채팅-with-React', ...]
 */
export const getLectures = async () => {
  const creators = await getCreators();
  let data: GithubMarkdown[] = [];

  for (const { name, path } of creators) {
    const res = await fetch(`${API_URL}/${path}`, {
      next: { revalidate: REVALIDATE_GITHUB_DATA },
    });
    const resJson: GithubMarkdown[] = await res.json();

    /**
     * NOTE:
     * - 프로필 이미지 폴더 제거
     * - 크리에이터 정보 추가
     */
    const filteredData = resJson
      .filter(({ name }) => name !== 'image')
      .map((item) => ({
        ...item,
        creator: name,
      }));

    data = data.concat(filteredData);
  }

  return data;
};
