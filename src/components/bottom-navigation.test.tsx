import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BottomNavigation } from './bottom-navigation';

jest.mock('next/navigation', () => ({
  usePathname() {
    return `/favorites`;
  },
}));

describe('Bottom Navigation Component', () => {
  test('should render component correctly', () => {
    render(<BottomNavigation />);

    const bottomNav = screen.getByTestId('bottom-navigation');
    expect(bottomNav).toBeVisible();
  });
});
