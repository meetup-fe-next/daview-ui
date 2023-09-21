import { getCreatorsFromGithub } from './creators';
import githubSdk from '../libs/githubSdk';
import algoliaSdk from '../libs/algoliaSdk';
import { downloadTextFile, splitFrontmatterAndMarkdown, removeHyphensAndConvertToSpaces } from '../utils/common';

import { type Creators } from '@/types/creators.type';
import { type Lectures, type Lecutre } from '@/types/lectures.type';
import { type ContentsFrontmatter } from '@/types/github.type';

/**
 * [GET] github 에서 강의 리스트 조회
 */
export const getLecturesFromGithub = async (): Promise<Lectures> => {
  const { items: creators } = await getCreatorsFromGithub();
  const lectures: Lecutre[] = [];

  for (const { lectures: githubLectures, name: creator, category } of creators) {
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
        creator,
        category,
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

  return { items: lectures, total: lectures.length };
};

/**
 * [GET] algolia 에서 강의 검색 후 리스트 반환
 */
export const searchLecturesFromAlgolia = async (search: string): Promise<Lectures> => {
  const { hits, nbHits } = await algoliaSdk.getObjectsFromIndex('lectures', search);

  return {
    items: hits,
    total: nbHits,
  };
};

/**
 * [POST] algolia에 강의 리스트 저장
 */
export const saveLecturesToAlgolia = async () => {
  try {
    const { items: lectures } = await getLecturesFromGithub();

    const res = await algoliaSdk.saveObjectsToIndex('lectures', lectures);
    return res;
  } catch (err) {
    console.error(err);
  }
};
