import { render, screen } from '@testing-library/react';
import { Home } from './home';

describe('home', () => {
  it('should render', () => {
    render(<Home />);

    const h1 = screen.getByRole('heading', {
      name: 'Hello World',
    });

    expect(h1).toBeInTheDocument();
  });
});
