import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './button';

describe('Button component', () => {
  test('should render correctly with given props', () => {
    render(<Button data-testid="button-component">Test Button</Button>);

    const button = screen.getByTestId('button-component');
    expect(button).toBeVisible();
  });
});
