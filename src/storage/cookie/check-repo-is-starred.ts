'use server';
import { cookies } from 'next/headers';

export async function checkRepoIsStarred(id: number) {
  const cookieStore = await cookies();
  const starredRepos = cookieStore.get('starred-repo-id')?.value;

  const parsedRepos: number[] = starredRepos ? JSON.parse(starredRepos) : [];

  return parsedRepos.includes(id);
}
