import { Repository } from '@/app/interfaces/repository';
import { GITHUB_API_BASE_URL } from '@/config/api';
import { fetchHttpClient } from '@/infra/http/fetch';

export async function getStaredRepos(username: string, options?: RequestInit): Promise<Repository[]> {
  return await fetchHttpClient.get(`${GITHUB_API_BASE_URL}/users/${username}/starred`, options);
}
