import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router,} from "react-router-dom";
import App from '../App';
import '@testing-library/jest-dom';

test('renders website title', () => {
  render(<Router><App /></Router>);
  const title = screen.getByText(/eCrystal/i);
  expect(title).toBeInTheDocument();
});
