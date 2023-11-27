import githubSdk from '../libs/githubSdk';
import { decodebase64 } from '../utils/common';

/**
 * Github Contributor 목록 조회
 *
 * @description 프로젝트의 가장 최상단에 위치한 .all-contributorsrc 파일 데이터 가져옴
 */
export const getContributors = async () => {
  const { content } = await githubSdk.getContents('.all-contributorsrc');
  const { contributors: data } = decodebase64(content);

  return data;
};
