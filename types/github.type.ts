export type GithubMakrdownLink = {
  self: string;
  git: string;
  html: string;
};

export type GithubMarkdown = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  _links: GithubMakrdownLink[];
};

export type LectureInfoType = {
  creator: string;
} & GithubMarkdown;
