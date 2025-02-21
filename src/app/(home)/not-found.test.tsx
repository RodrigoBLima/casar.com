import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from './not-found';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
}));

jest.mock('next/image', () => (props: any) => {
  return (
    <picture>
      <img {...props} />
    </picture>
  );
});

describe('Not Found Component', () => {
  test('should render component correctly', () => {
    render(<NotFound term="Jonh doe" />);

    const component = screen.getByTestId('home-not-found-content');
    expect(component).toBeVisible();
  });
});
