import { getCreatorsFromGithub } from './creators';
import githubSdk from '../libs/githubSdk';
import algoliaSdk from '../libs/algoliaSDK';
import { downloadTextFile, splitFrontmatterAndMarkdown, removeHyphensAndConvertToSpaces } from '../utils';

import { type Creators } from '@/types/creators.type';
import { type Lectures } from '@/types/lectures.type';
import { type ContentsFrontmatter } from '@/types/github.type';

/**
 * github 에서 강의 리스트 조회
 */
export const getLecturesFromGithub = async (): Promise<Lectures> => {
  const creators: Creators = await getCreatorsFromGithub();
  const lectures: Lectures = [];

  for (const { lectures: githubLectures } of creators) {
    for (const githubLecture of githubLectures) {
      const { name: lectureName, path: lecturePath } = githubLecture;
      const lectureContentsPath = `${lecturePath}/CONTENTS.md`;

      const { download_url: downloadUrl } = await githubSdk.getContents(lectureContentsPath);
      const lectureContentsFile = await downloadTextFile(downloadUrl);

      const { frontmatter, markdown } = splitFrontmatterAndMarkdown(lectureContentsFile);
      const { platforms, hashtags, languages, summary, link } = frontmatter as ContentsFrontmatter;

      lectures.push({
        name: removeHyphensAndConvertToSpaces(lectureName),
        markdown,
        frontmatter: {
          platforms,
          hashtags,
          languages,
          summary,
          link,
        },
      });
    }
  }

  return lectures;
};

/**
 * algolia에 강의 리스트 저장
 */
export const saveLecturesToAlgolia = async () => {
  const lectures = await getLecturesFromGithub();
  const res = await algoliaSdk.saveObjectToIndex(lectures);

  return res;
};
