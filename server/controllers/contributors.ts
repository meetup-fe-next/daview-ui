import githubSdk from '../libs/githubSdk';
import { decodeBase64AndParseJson } from '../utils/common';
import camelcaseKeys from 'camelcase-keys';

/**
 * Github Contributor 목록 조회
 *
 * @description 프로젝트의 가장 최상단에 위치한 .all-contributorsrc 파일 데이터 가져옴
 */
export const getContributors = async () => {
  const { content } = await githubSdk.getContents('.all-contributorsrc');
  const { contributors } = decodeBase64AndParseJson(content);

  return camelcaseKeys(contributors, { deep: true });
};
