import { GITHUB_API_BASE_URL } from '@/config/api';
import { fetchHttpClient } from '@/infra/http/fetch';

interface User {
  bio: string;
  name: string;
  company: string;
  avatar_url: string;
}

export async function getUser(query: string): Promise<User> {
  return await fetchHttpClient.get(`${GITHUB_API_BASE_URL}/users/${query}`);
}
