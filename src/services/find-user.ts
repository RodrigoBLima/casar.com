import { GITHUB_API_BASE_URL } from '@/config/api';
import { fetchHttpClient } from '@/infra/http/fetch';

interface User {
  login: string;
  avatar_url: string;
}

export async function findUser(query: string): Promise<User> {
  const result = await fetchHttpClient.get<{ items: User[] }>(`${GITHUB_API_BASE_URL}/search/users?q=${query}`);
  const [user] = result.items || [];
  return user ?? null;
}
