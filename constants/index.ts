/**
 * Github API 관련
 */
export const GITHUB_USER_NAME = 'meetup-fe-next';
export const GITHUB_REPOSITORY_NAME = 'daview-contents';
export const GITHUB_REPOSITORY_API_URL = `https://api.github.com/repos/${GITHUB_USER_NAME}/${GITHUB_REPOSITORY_NAME}/contents`;
export const GITHUB_REPOSITORY_BRANCH = 'develop';

/**
 * Algolia API 관련
 */
export const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string;
export const ALGOLIA_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string;
export const ALGOLIA_ADMIN_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY as string;
export const ALGOLIA_READ_HOST = `https://${ALGOLIA_APP_ID}-dsn.algolia.net` as string;
export const ALGOLIA_WRITE_HOST = `https://${ALGOLIA_APP_ID}.algolia.net` as string;

/**
 * ETC
 */
export const CONTENS_ENROLLMENT_URL = 'https://github.com/meetup-fe-next/daview-contents/issues/new/choose'; // 강의 등록 페이지 링크
export const REVALIDATE_GITHUB_DATA = 60 * 3; // 3분

/**
 * Algolia Autocomplete
 */
export const INSTANT_SEARCH_INDEX_NAME = 'creators';
export const INSTANT_SEARCH_QUERY_SUGGESTIONS = 'creators_query_suggestions';
export const INSTANT_SEARCH_HIERARCHICAL_ATTRIBUTES = ['hierarchicalCategories.lvl0', 'hierarchicalCategories.lvl1'];
