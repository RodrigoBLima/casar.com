import colors from '@/data/github-colors.json';

const languageColors = colors as Record<string, { color: string | null; url: string }>;

export function getLanguageColor(language: string) {
  return languageColors[language]?.color || '#CCC';
}
