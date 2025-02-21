import { HttpClientConfig } from './interfaces';

export const fetchHttpClient: HttpClientConfig = {
  async get<T>(url: string, options?: RequestInit): Promise<T> {
    const headers = {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN || process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      ...options?.headers,
    };

    const response = await fetch(url, { method: 'GET', headers, ...options });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    return response.json();
  },

  async delete(url: string, options?: RequestInit): Promise<void> {
    const headers = {
      Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      ...options?.headers,
    };

    const response = await fetch(url, { method: 'DELETE', headers, ...options });

    if (!response.ok) {
      throw new Error(`Erro ao deletar: ${response.statusText}`);
    }
  },
};
