export interface Repository {
  id: number;
  name: string;
  description: string;
  updated_at: string;
  language: string;
  html_url?: string;
  owner: {
    login: string;
  };
}
