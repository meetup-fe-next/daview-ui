import { getAllContributorsSrc } from '../libs/allContributorsSdk';

/**
 * Contributor 목록 조회
 *
 * @return
 */
export const getContributors = async () => {
  const allContributorsSrc = getAllContributorsSrc();
  return allContributorsSrc ? allContributorsSrc.contributors : [];
};
