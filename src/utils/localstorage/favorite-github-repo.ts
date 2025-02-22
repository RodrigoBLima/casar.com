import { Repository } from '@/interfaces/repository';

export function favoriteGithubRepo(repo: {
  id: number;
  name: string;
  language: string;
  updated_at: string;
  description: string;
}) {
  const starredRepos = localStorage.getItem('starred-repo-id');
  const parsedRepos = starredRepos ? JSON.parse(starredRepos) : [];
  const updatedRepos = [...parsedRepos.filter((r: Repository) => r.id !== repo.id), repo];
  localStorage.setItem('starred-repo-id', JSON.stringify(updatedRepos));
}
