import { Repository } from "@/interfaces/repository";

export function deleteStarredRepo(id: number) {
  const starredRepos = localStorage.getItem('starred-repo-id');
  const parsedRepos: Repository[] = starredRepos ? JSON.parse(starredRepos) : [];
  const updatedRepos = parsedRepos.filter((repo) => repo.id !== id);

  if (updatedRepos.length > 0) {
    localStorage.setItem('starred-repo-id', JSON.stringify(updatedRepos));
  } else {
    localStorage.setItem('starred-repo-id', JSON.stringify([]));
  }
}
