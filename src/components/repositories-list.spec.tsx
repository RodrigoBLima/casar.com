import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getStarredRepos } from '../utils/localstorage/get-starred-repo';
import { useSearchParams } from 'next/navigation';
import RepositoriesList from './repositories-list';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
}));

jest.mock('../utils/localstorage/get-starred-repo', () => ({
  getStarredRepos: jest.fn(),
}));

describe('Repositories List Component', () => {
  beforeEach(() => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue('test'),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render not found component', () => {
    (getStarredRepos as jest.Mock).mockReturnValue([]);

    render(<RepositoriesList />);

    expect(screen.getByTestId('repositories-list-component')).toBeVisible();
    expect(screen.getByTestId("no-repo-found-component")).toBeVisible();
  });

  test('should render repos', () => {
    (getStarredRepos as jest.Mock).mockReturnValue([
      { id: 1, name: 'Repo 1', description: 'Descrição 1', html_url: 'https://github.com/repo1' },
      { id: 2, name: 'Repo 2', description: 'Descrição 2', html_url: 'https://github.com/repo2' },
    ]);

    render(<RepositoriesList />);

    expect(screen.getByTestId('repositories-list-component')).toBeVisible();
    expect(screen.getAllByTestId("repository-card")).toHaveLength(2);
  });
});
