
import { render } from '@testing-library/react';
import Arrow from '../Arrow.js';

test('Arrow renders', () => {
    const ArrowElement = render(<Arrow />);
    expect(ArrowElement).toBeTruthy();
});