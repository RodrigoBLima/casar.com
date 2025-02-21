'use server';

import { cookies } from 'next/headers';

export async function deleteRepoStaredFromCookie(id: number) {
  const cookieStore = await cookies();
  const starredRepos = cookieStore.get('starred-repo-id')?.value;

  const parsedRepos: number[] = starredRepos ? JSON.parse(starredRepos) : [];
  const updatedRepos = parsedRepos.filter(repoId => repoId !== id);

  if (updatedRepos.length > 0) {
    cookieStore.set('starred-repo-id', JSON.stringify(updatedRepos));
  } else {
    cookieStore.delete('starred-repo-id');
  }
}
