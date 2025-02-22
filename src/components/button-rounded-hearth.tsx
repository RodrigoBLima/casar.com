"use client"

import { twMerge } from 'tailwind-merge';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './button';
import { favoriteGithubRepo } from '@/utils/localstorage/favorite-github-repo';
import { deleteStarredRepo } from '@/utils/localstorage/delete-repo-starred';
import { Repository } from '@/interfaces/repository';
import { checkRepoIsStarred } from '@/utils/localstorage/check-repo-is-starred';
import { useRouter } from 'next/navigation';

interface ButtonRoundedHearthProps extends Repository { }

export default function ButtonRoundedHearth({ ...props }: ButtonRoundedHearthProps) {
  const router = useRouter();
  const isFavorite = checkRepoIsStarred(props.id);
  const favoriteButtonCss = 'text-blue-primary border border-blue-primary hover:bg-blue-primary hover:text-white bg-white';

  function handleClick() {
    if (isFavorite) {
      deleteStarredRepo(props.id);
      router.refresh()
      return;
    }

    router.refresh()
    return favoriteGithubRepo(props);
  }

  return (
    <Button
      className={twMerge(
        'rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transition duration-300 text-gray-light bg-white-matte hover:text-gray-dark',
        isFavorite && favoriteButtonCss
      )}
      onClick={handleClick}
      data-testid="button-rounded-hearth"
    >
      <FontAwesomeIcon icon={faHeart} width={14} height={13} />
    </Button>
  );
}
