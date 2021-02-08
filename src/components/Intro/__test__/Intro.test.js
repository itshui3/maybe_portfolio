
import { render } from '@testing-library/react';
import Intro from '../Intro.js';

test('Intro renders', () => {
    const IntroElement = render(<Intro />);
    expect(IntroElement).toBeTruthy();
});