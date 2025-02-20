import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from './not-found';

describe('Not Found Component', () => {
  test('should render component correctly', () => {
    render(<NotFound />);

    const component = screen.getByTestId('home-not-found-content');
    expect(component).toBeVisible();
  });
});
