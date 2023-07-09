export type Lectures = {
  items: Lecture[];
  total: number;
};

export type Lecture = {
  uuid: string;
  lecture: string;
  markdown: string;
} & LecutreFrontMatter;

export type LecutreFrontMatter = {
  creator: string;
  category: string;
  platforms: string[];
  hashtags: string[];
  languages: string[];
  summary: string;
  link: string;
};

export type LecturesQuery = {
  search: string | undefined;
  // TODO: query로 더 추가될 꺼 없는지, 시안 확인해보기
};
