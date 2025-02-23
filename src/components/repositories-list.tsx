"use client"

import { getStarredRepos } from '@/utils/localstorage/get-starred-repo';
import NoRepoFound from '@/components/no-repo-found';
import { RepositoryCard } from '@/components/repository-card';

export default function RepositoriesList() {
  const repos = getStarredRepos();

  return (
    <div className="flex flex-col gap-2 md:gap-4" data-testid="repositories-list-component">
      {repos.length === 0 ? (
        <NoRepoFound />
      ) : (
        repos.map(repo => (
          <RepositoryCard key={repo.id} {...repo} />
        ))
      )}
    </div>
  )
}
