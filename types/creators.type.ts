import { type CategoryName } from './categories.type';
import { type GithubContentEntry } from './github.type';

export type Creators = {
  items: Creator[];
  total: number;
};

export type Creator = {
  name: string;
  category: CategoryName;
  lectures: GithubContentEntry[];
  platforms?: string[];
  objectID: number;
};
