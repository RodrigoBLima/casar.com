import { fetchHttpClient } from '@/infra/http/fetch';

interface LanguageColors {
  [key: string]: { color: string };
}

export async function getLanguageColor(language: string): Promise<string> {
  const colors: LanguageColors = await fetchHttpClient.get(
    'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
  );
  return colors[language]?.color || '#CCC';
}
