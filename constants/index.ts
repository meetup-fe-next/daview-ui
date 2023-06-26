export const GITHUB_USER_NAME = 'meetup-fe-next';

export const GITHUB_REPOSITORY_NAME = 'review-contents';

export const API_URL = `https://api.github.com/repos/${GITHUB_USER_NAME}/${GITHUB_REPOSITORY_NAME}/contents`;

export const REVALIDATE_GITHUB_DATA = 60 * 60; // 1시간

export const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string;

export const ALGOLIA_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string;
