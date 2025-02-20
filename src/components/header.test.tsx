import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Header component', () => {
  test('should render header correctly ', () => {
    render(<Header />);

    const linkElement = screen.getByTestId('header-component');
    expect(linkElement).toBeVisible();
  });
});
