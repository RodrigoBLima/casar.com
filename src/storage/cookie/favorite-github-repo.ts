'use server';

import { cookies } from 'next/headers';

export async function favorireGithubRepo(id: number) {
  const cookieStore = await cookies();
  const starredRepos = cookieStore.get('starred-repo-id')?.value;

  const parsedRepos = starredRepos ? JSON.parse(starredRepos) : [];
  const updatedRepos = [...parsedRepos, id];

  cookieStore.set('starred-repo-id', JSON.stringify(updatedRepos));
}
