import { twMerge } from 'tailwind-merge';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './button';
import { revalidateTag } from 'next/cache';
import { deleteStaredRepo } from '@/services/delete-stared-repo';

interface ButtonRoundedHearthProps {
  owner: string;
  repo: string;
  className?: string;
  isFavorite?: boolean;
}

export default function ButtonRoundedHearth({ owner, repo, className, isFavorite }: ButtonRoundedHearthProps) {
  async function handleClick() {
    'use server';

    if (isFavorite) {
      await deleteStaredRepo(owner, repo);
      revalidateTag('get-favorites');
    } else {
      // TODO: create method to add fav repo
    }
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
