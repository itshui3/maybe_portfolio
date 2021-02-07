import { render, screen } from '@testing-library/react';
import App from './App';
// [0] pull in App

test('renders learn react link', () => {
  render(<App />);
  // [1] use rtl's render on App(within what scope?)
  const linkElement = screen.getByText(/learn react/i);
  // [2] we use screen like document to query the element
  expect(linkElement).toBeInTheDocument();
});
