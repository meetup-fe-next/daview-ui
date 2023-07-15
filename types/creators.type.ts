import { type CategoryName } from './categories.type';
import { type GithubContentEntry } from './github.type';

export type Creator = {
  name: string;
  lectures: GithubContentEntry[];
  category: CategoryName;
};

export type Creators = Creator[];
