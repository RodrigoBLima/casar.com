import { GITHUB_API_BASE_URL } from '@/config/api';
import { fetchHttpClient } from '@/infra/http/fetch';

interface Repository {
  id: number;
  name: string;
  description: string;
  updated_at: string;
  language: string;
  html_url: string;
}

export async function getUserRepos(username: string): Promise<Repository[]> {
  return await fetchHttpClient.get(`${GITHUB_API_BASE_URL}/users/${username}/repos`);
}
