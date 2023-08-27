import { type ContentsFrontmatter } from './github.type';

export type Lectures = {
  items: Lecutre[];
  total: number;
};

export type Lecutre = {
  name: string;
  markdown: string;
  frontmatter: ContentsFrontmatter;
  creator: string;
  category: string;
};
