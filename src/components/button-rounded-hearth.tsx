import { twMerge } from 'tailwind-merge';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './button';
import { revalidateTag } from 'next/cache';
import { deleteStaredRepo } from '@/services/delete-stared-repo';
import { favorireGithubRepo } from '@/storage/cookie/favorite-github-repo';
import { deleteRepoStaredFromCookie } from '@/storage/cookie/delete-repo-starred';

interface ButtonRoundedHearthProps {
  id: number;
  owner: string;
  repo: string;
  className?: string;
  isFavorite?: boolean;
  isFavoritedByCookie?: boolean;
}

export default async function ButtonRoundedHearth({
  id,
  owner,
  repo,
  className,
  isFavorite,
  isFavoritedByCookie,
}: ButtonRoundedHearthProps) {
  async function handleClick() {
    'use server';

    if (isFavoritedByCookie) {
      await deleteRepoStaredFromCookie(id);
      revalidateTag('get-user-repos');
      return;
    }

    if (isFavorite) {
      await deleteStaredRepo(owner, repo);
      revalidateTag('get-favorites');
      return;
    }

    return await favorireGithubRepo(id);
  }

  return (
    <Button
      className={twMerge(
        'rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transition duration-300 text-gray-light bg-white-matte hover:text-gray-dark',
        className
      )}
      onClick={handleClick}
      data-testid="button-rounded-hearth"
    >
      <FontAwesomeIcon icon={faHeart} width={14} height={13} />
    </Button>
  );
}
