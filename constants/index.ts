/**
 * Github Markdown API 관련
 */
export const GITHUB_USER_NAME = 'meetup-fe-next';

export const GITHUB_REPOSITORY_NAME = 'daview-contents';

export const API_URL = `https://api.github.com/repos/${GITHUB_USER_NAME}/${GITHUB_REPOSITORY_NAME}/contents`;

/**
 * daview-contents 백링크 관련
 */
export const CONTENS_ENROLLMENT_URL = 'https://github.com/meetup-fe-next/daview-contents/issues/new/choose'; // 강의 등록 페이지 링크

/**
 * Algolia
 */
export const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string;

export const ALGOLIA_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string;

/**
 * ETC
 */
export const REVALIDATE_GITHUB_DATA = 60 * 60; // 1시간
