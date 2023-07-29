export type CategoryName = string; // TODO: 카테고리 획일화되면, 'frontend' | 'backend' | .. 로 변경하기

export type Category = {
  name: string;
  path: string;
};

export type Categories = Category[];
