'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Button } from './button';

const getRouteName = (url: string) => url?.replace(/^\//, '').split('?')[0];

export function BottomNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const githubUserName = searchParams.get('name') || localStorage.getItem("githubUser");

  const bottomNavItems = [
    { name: 'Profile', icon: faUser, href: `/profile?name=${githubUserName || ""}`, dataTestId: 'nav-item-profile'  },
    {
      name: 'Favorites',
      icon: faHeart,
      href: `/favorites`,
      dataTestId: 'nav-item-favorites',
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full h-[69px] md:hidden flex inset-shadow-md" data-testid="bottom-navigation">
      <ul role="list" aria-label="Botão navigation menu" className="grid grid-cols-2 w-full">
        {bottomNavItems.map(navItem => {
          const isCurrentRoute = getRouteName(navItem.href) === getRouteName(pathname);
          const disabledClassName = 'bg-white text-gray-light hover:bg-white-matte';
          const activeClassName = 'text-white bg-blue-primary hover:bg-blue-light';
          const incrementCss = isCurrentRoute ? activeClassName : disabledClassName;

          return (
            <li key={navItem.name} className="flex-1" aria-disabled={!githubUserName}>
              <Button
                onClick={() => {
                    router.push(navItem.href);
                }}
                className={`w-full flex items-center justify-center gap-2 p-6 h-full disabled:pointer-events-none disabled:opacity-50 ${incrementCss}`}
              >
                <FontAwesomeIcon icon={navItem.icon} width={19} height={24} />
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
