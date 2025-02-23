import { Repository } from "@/interfaces/repository";

export function getStarredRepos() {
    const starredRepos = localStorage?.getItem('starred-repo-id');
    const parsedRepos: Repository[] = starredRepos ? JSON.parse(starredRepos) : [];
    return parsedRepos || [];
}
