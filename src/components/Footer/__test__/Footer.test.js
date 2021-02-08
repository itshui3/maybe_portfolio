
import { render } from '@testing-library/react';
import Footer from '../Footer';
// [0] pull in App

test('renders learn react link', () => {
    const FooterElement = render(<Footer />);
  // [1] use rtl's render on App(within what scope?)
    expect(FooterElement.baseElement).toBeTruthy();
});
