'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
import { SearchUserForm } from './search-user';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from './button';

export function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const githubUserName = searchParams.get('name');

  function handleRedirectToFavoritesRoute() {
    if (githubUserName) {
      router.push(`/favorites?name=${githubUserName}`);
    }
  }

  return (
    <header className="h-20 border-b-1 gap-4 border-gray-soft md:flex hidden" data-testid="header-component">
      <SearchUserForm />
      <Button
        className="flex items-center gap-2 p-6 text-white bg-blue-primary cursor-pointer disabled:pointer-events-none disabled:opacity-50"
        disabled={!githubUserName}
        onClick={handleRedirectToFavoritesRoute}
        data-testid="header-anchor"
      >
        <FontAwesomeIcon icon={faHeartOutline} width={24} height={20} />
        <span className="text-sm font-medium">Favoritos</span>
      </Button>
    </header>
  );
}
