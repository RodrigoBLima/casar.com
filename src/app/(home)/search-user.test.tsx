import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchUserContent from './search-user';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
}));

describe('Search User Component', () => {
  test('should render component correctly', () => {
    render(<SearchUserContent />);

    const component = screen.getByTestId('home-search-user-content');
    expect(component).toBeVisible();
  });
});
