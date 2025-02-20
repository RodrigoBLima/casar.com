import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Anchor } from './anchor';

describe('Anchor component', () => {
  test('should render correctly with given props', () => {
    render(<Anchor href="/test">Test Link</Anchor>);

    const linkElement = screen.getByTestId('anchor-component');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/test');
    expect(linkElement).toHaveTextContent('Test Link');
  });

  test('should render with default href when none is provided', () => {
    render(<Anchor>Default Link</Anchor>);

    const linkElement = screen.getByTestId('anchor-component');
    expect(linkElement).toHaveAttribute('href', '#');
  });
});
