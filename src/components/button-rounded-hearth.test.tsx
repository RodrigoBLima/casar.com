import { render, screen } from '@testing-library/react';
import ButtonRoundedHearth from './button-rounded-hearth';
import '@testing-library/jest-dom';

describe('Button Rounded Hearth Component', () => {
  test('should render correctly', () => {
    render(<ButtonRoundedHearth />);

    const button = screen.getByTestId('button-rounded-hearth');
    expect(button).toBeInTheDocument();
  });

  test('should accept custom className', () => {
    render(<ButtonRoundedHearth className="bg-red-500" />);

    const button = screen.getByTestId('button-rounded-hearth');
    expect(button).toHaveClass('bg-red-500');
  });
});
