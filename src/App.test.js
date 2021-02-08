import { render, screen } from '@testing-library/react';
import App from './App';
// [0] pull in App

test('renders learn react link', () => {
  const AppElement = render(<App />);
  // [1] use rtl's render on App(within what scope?)
  // [2] we use screen like document to query the element
  expect(AppElement).toBeTruthy();
});
