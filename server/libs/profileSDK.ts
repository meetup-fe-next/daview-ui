import fs from 'fs';
import path from 'path';

const contributorSrcFile = path.join(process.cwd(), '.all-contributorsrc');

export const getContributors = () => {
  try {
    const contributorInfo = fs.readFileSync(contributorSrcFile, 'utf8');
    const contributors = JSON.parse(contributorInfo).contributors;
    return contributors;
  } catch {
    console.log('[profileSDK.ts] getContributors');
  }
};
