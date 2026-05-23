export interface GuideSnippet {
  label: string;
  code: string;
}

export interface GuideCardData {
  title: string;
  description: string;
  githubUrl: string;
  snippets: GuideSnippet[];
}
