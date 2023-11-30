import { load as parseYaml } from 'js-yaml';
import { REVALIDATE_GITHUB_DATA } from '@/constants';

/**
 * downloadTextFile
 *
 * @description md와 같은 text 파일을 다운 받아, string을 return 한다.
 */
export const downloadTextFile = async (downloadUrl: string) => {
  const res = await fetch(downloadUrl, { next: { revalidate: REVALIDATE_GITHUB_DATA } });
  const data = await res.text();

  return data;
};

/**
 * parseFrontmatter
 *
 * @description frontmatter를 object로 반환한다.
 */
export const parseFrontmatter = (frontmatter: string) => {
  try {
    const parsedFrontmatter = parseYaml(frontmatter);
    return parsedFrontmatter;
  } catch (error) {
    console.error('Error parsing Frontmatter:', error);
    return {};
  }
};

/**
 * splitFrontmatterAndMarkdown
 *
 * @description frontmatter와 markdown을 분리한다.
 */
export const splitFrontmatterAndMarkdown = (mdContent: string) => {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n/;
  const match = mdContent.match(frontmatterRegex);

  if (match) {
    const frontmatter = match[1].trim();
    const markdown = mdContent.replace(frontmatterRegex, '').trim();
    const parsedFrontmatter = parseFrontmatter(frontmatter);

    return {
      frontmatter: parsedFrontmatter,
      markdown,
    };
  }

  // Frontmatter가 없는 경우
  return {
    frontmatter: {},
    markdown: mdContent.trim(),
  };
};

/**
 * replaceDashWithSpace
 *
 * @description '-'를 ' '로 변환한다.
 * @example
 * - replaceDashWithSpace('토비의-스프링-부트-이해와-원리')
 * - '토비의 스프링 부트 이해와 원리'
 */
export const replaceDashWithSpace = (str: string) => {
  return str.replace(/-/g, ' ');
};

export const decodeBase64AndParseJson = (base64Data: string): any => {
  // Base64 디코딩
  const decodedData = Buffer.from(base64Data, 'base64').toString('utf-8');

  // JSON 파싱
  const jsonData = JSON.parse(decodedData);

  return jsonData;
};
