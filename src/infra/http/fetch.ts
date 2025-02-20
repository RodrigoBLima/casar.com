import { HttpClientConfig } from './interfaces';

export const fetchHttpClient: HttpClientConfig = {
  async get<T>(url: string, options?: RequestInit): Promise<T> {
    const headers = {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      ...options?.headers,
    };

    const response = await fetch(url, { method: 'GET', headers, ...options });
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }
    return response.json();
  },
};
