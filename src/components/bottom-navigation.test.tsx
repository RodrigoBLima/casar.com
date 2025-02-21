import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSearchParams, usePathname } from 'next/navigation';
import { BottomNavigation } from './bottom-navigation';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

describe('Bottom Navigation Component', () => {
  beforeEach(() => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue('test'),
    });
    (usePathname as jest.Mock).mockReturnValue('/favorites');
  });

  test('should render component correctly', () => {
    render(<BottomNavigation />);

    const bottomNav = screen.getByTestId('bottom-navigation');
    expect(bottomNav).toBeVisible();
  });
});
