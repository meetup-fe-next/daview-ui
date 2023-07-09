import algoliaSdk from '../libs/algoliaSDK';
import githubSdk from '../libs/githubSdk';
import { downloadTextFile, splitFrontmatterAndMarkdown, removeHyphensAndConvertToSpaces } from '../utils';

import type { LecutreFrontMatter, LecturesQuery, Lectures } from '@/types/lectures.type';

/**
 * getLectures
 *
 * @description 강의 리스트 조회
 */
export const getLectures = async ({ search }: LecturesQuery): Promise<Lectures> => {
  const items = [];

  try {
    // 1. 알고리아에서 search에 해당하는 강의들을 조회한다.
    const { hits, nbHits: total = 0 } = await algoliaSdk.getLectures({ search });

    for (let i = 0; i < total; i++) {
      const { path, name } = hits[i];

      // 2. 강의의 README.md 정보를 가져온다.
      const contents = await githubSdk.getContents(`${path}/README.md`);

      // 3. README.md 를 다운 받고, frontmatter와 markdown을 파싱한다.
      const { name: fileName, download_url: downloadUrl } = contents;

      if (fileName === 'README.md') {
        const readmeContent = await downloadTextFile(downloadUrl);
        const { frontmatter, markdown } = splitFrontmatterAndMarkdown(readmeContent);
        const { categories, creator, platforms, language, summary } = frontmatter as LecutreFrontMatter;

        items.push({
          lecture: removeHyphensAndConvertToSpaces(name),
          categories,
          creator,
          platforms,
          language,
          summary,
          markdown,
        });
      }
    }

    return { items, total };
  } catch (error) {
    console.log(`[getLectures] :: ${error}`);
    throw new Error('Lectures 가져오기 실패');
  }
};

/**
 * getLecture
 *
 * @description 강의 조회
 */
export const getLecture = async () => {
  return { items: [] };
};
