import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bink lets you...', () => {
  render(<App />);
  const helloWorld = screen.getByText(/Bink helps your loyalty programme work even harder/i);
  expect(helloWorld).toBeInTheDocument();
});
