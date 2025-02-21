import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './header';
import { useSearchParams } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
}));

describe('Header component', () => {
  beforeEach(() => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue('test'),
    });
  });

  test('should render header correctly ', () => {
    render(<Header />);

    const linkElement = screen.getByTestId('header-component');
    expect(linkElement).toBeVisible();
  });
});
