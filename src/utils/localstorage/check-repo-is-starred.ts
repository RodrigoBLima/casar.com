import { Repository } from "@/interfaces/repository";

export function checkRepoIsStarred(id: number) {
  const starredRepos = localStorage.getItem('starred-repo-id');
  const parsedRepos: Repository[] = starredRepos ? JSON.parse(starredRepos) : [];
  return parsedRepos.some(repo => repo.id === id);
}
