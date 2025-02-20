import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InputField, InputIcon, InputRoot } from './input';

describe('InputRoot', () => {
  test('should render input root correctly', () => {
    render(
      <InputRoot className="custom-class" data-testid="input-root-test">
        Test
      </InputRoot>
    );

    const inputRootElement = screen.getByTestId('input-root-test');
    expect(inputRootElement).toBeVisible();
  });
});

describe('InputIcon', () => {
  test('should render icon correctly', () => {
    render(<InputIcon>🔍</InputIcon>);

    const inputIconElement = screen.getByText('🔍');
    expect(inputIconElement).toBeVisible();
  });
});

describe('InputField', () => {
  test('should render field correctly', () => {
    render(<InputField placeholder="Digite aqui" />);

    const inputElement = screen.getByPlaceholderText('Digite aqui');
    expect(inputElement).toBeVisible();
    expect(inputElement).toHaveClass('flex-1');
  });
});
