'use client';

import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Anchor } from './anchor';

const bottomNavItems = [
  { name: 'Profile', icon: faUser, href: '/profile', dataTestId: 'nav-item-profile' },
  {
    name: 'Favorites',
    icon: faHeart,
    href: '/favorites',
    dataTestId: 'nav-item-favorites',
  },
];

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full h-[69px] md:hidden flex inset-shadow-md" data-testid="bottom-navigation">
      <ul role="list" aria-label="Botão navigation menu" className="grid grid-cols-2 w-full">
        {bottomNavItems.map(navItem => {
          const isCurrentRoute = navItem.href === pathname;
          const disabledClassName = 'bg-white text-gray-light hover:bg-white-matte';
          const activeClassName = 'text-white bg-blue-primary hover:bg-blue-light';
          const incrementCss = isCurrentRoute ? activeClassName : disabledClassName;

          return (
            <li key={navItem.name} className="flex-1">
              <Anchor
                className={`flex items-center justify-center gap-2 p-6 h-full ${incrementCss}`}
                href={navItem.href}
                data-testid={navItem.dataTestId}
              >
                <FontAwesomeIcon icon={navItem.icon} width={24} height={20} />
              </Anchor>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
