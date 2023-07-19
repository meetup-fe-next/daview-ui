import { type ContentsFrontmatter } from './github.type';

export type Lectures = Lecutre[];

export type Lecutre = {
  name: string;
  markdown: string;
  frontmatter: ContentsFrontmatter;
};

export type LecturesQuery = {
  search: string | undefined;
  // TODO: query로 더 추가될 꺼 없는지, 시안 확인해보기
};
