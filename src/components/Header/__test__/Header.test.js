
import { render } from '@testing-library/react';
import Header from '../Header';
// [0] pull in App

test('renders learn react link', () => {
    const HeaderElement = render(<Header />);
  // [1] use rtl's render on App(within what scope?)
    expect(HeaderElement.baseElement);
});
