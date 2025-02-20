import { GITHUB_API_BASE_URL } from '@/config/api';
import { fetchHttpClient } from '@/infra/http/fetch';

export async function deleteStaredRepo(owner: string, repo: string, options?: RequestInit): Promise<void> {
  await fetchHttpClient.delete(`${GITHUB_API_BASE_URL}/user/starred/${owner}/${repo}`, options);
}
