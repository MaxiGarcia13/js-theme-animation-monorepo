export interface GuideSnippet {
  label: string;
  code: string;
}

export interface GuideCardData {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  snippets: GuideSnippet[];
}
