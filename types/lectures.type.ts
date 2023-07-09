export type Lectures = {
  items: LectureInfo[];
  total: number;
};

export type LectureInfo = {
  markdown: string;
} & LecutreFrontMatter;

export type LecutreFrontMatter = {
  lecture: string;
  creator: string;
  categories: string[];
  platforms: string[];
  language: string;
  summary: string;
};

export type LecturesQuery = {
  search: string | undefined;
  // TODO: query로 더 추가될 꺼 없는지, 시안 확인해보기
};
