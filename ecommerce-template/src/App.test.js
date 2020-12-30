import { render, screen } from '@testing-library/react';
import App from './App';

test('renders website title', () => {
  render(<App />);
  const linkElement = screen.getByText(/eCrystal/i);
  expect(linkElement).toBeInTheDocument();
});
