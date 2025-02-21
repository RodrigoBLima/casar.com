import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page';
import { findUser } from '../../services/find-user';
import { useSearchParams } from 'next/navigation';

jest.mock('../../services/find-user', () => ({
  findUser: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe('Home Page', () => {
  beforeEach(() => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue('test'),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render all components', async () => {
    (findUser as jest.Mock).mockResolvedValue(null);

    const searchParams = Promise.resolve({});
    const content = await Home({ searchParams });
    render(content);

    expect(screen.getByTestId('home-page')).toBeInTheDocument();
    expect(screen.getByTestId('header-component')).toBeInTheDocument();
    expect(screen.getByTestId('home-search-user-content')).toBeInTheDocument();
    expect(screen.queryByTestId('home-not-found-content')).not.toBeInTheDocument();
    expect(screen.getByTestId('bottom-navigation')).toBeInTheDocument();
  });

  test('should render NotFoundContent ', async () => {
    (findUser as jest.Mock).mockResolvedValue(null);

    const searchParams = Promise.resolve({ name: 'testuser' });
    const content = await Home({ searchParams });
    render(content);

    expect(screen.queryByTestId('home-not-found-content')).toBeVisible();
  });
});
