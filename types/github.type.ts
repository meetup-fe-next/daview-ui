/**
 * Github content API 최상위 노드
 */
export type GithubContentTree = {
  type: string;
  size: number;
  name: string;
  path: string;
  sha: string;
  url: string;
  git_url: string | null;
  html_url: string | null;
  download_url: string | null;
  entries: GithubContentEntry[];
  _links: {
    git: string | null;
    html: string | null;
    self: string;
  };
};

/**
 * Github content API entries type
 */
export type GithubContentEntry = {
  type: string;
  size: number;
  name: string;
  path: string;
  content: string;
  sha: string;
  url: string;
  git_url: string | null;
  html_url: string | null;
  download_url: string | null;
  _links: {
    git: string | null;
    html: string | null;
    self: string;
  };
};

/**
 * github CONTENTS.md frontmatter 정보
 * */
export type ContentsFrontmatter = {
  platforms: string[];
  languages: string[];
  summary: string;
  hashtags: string[];
  link: string;
};
