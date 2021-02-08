

import { render } from '@testing-library/react';
import CardHolder from '../CardHolder.js';

test('CardHolder renders', () => {
    const CardHolderElement = render(<CardHolder />);
    expect(CardHolderElement).toBeTruthy();
});