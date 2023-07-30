import fs from 'fs';
import path from 'path';

const contributorSrcFile = path.join(process.cwd(), '.all-contributorsrc');

/**
 * [GET] All Contributors에서 생성한 파일 가져오는 API - getAllContributorsSrc
 *
 * @description 프로젝트의 가장 최상단에 위치한 .all-contributorsrc 파일 데이터 가져옴
 */

export const getAllContributorsSrc = () => {
  try {
    const contributorInfo = fs.readFileSync(contributorSrcFile, 'utf8');
    return JSON.parse(contributorInfo);
  } catch {
    console.log('[profileSdk.ts] getAllContributorsSrc');
    return null;
  }
};

const allContributorsSdk = {
  getAllContributorsSrc,
};

export default allContributorsSdk;
