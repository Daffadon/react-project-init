import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

describe('home', () => {
  test('should show Home text', () => {
    render(<Home />);

    expect(screen.getByText(/Home/i)).toBeDefined();
  });
});
