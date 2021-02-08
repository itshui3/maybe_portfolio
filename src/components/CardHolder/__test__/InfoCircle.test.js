
import { render } from '@testing-library/react';
import InfoCircle from '../InfoCircle/InfoCircle.js';

test('InfoCircle renders', () => {
    const InfoCircleElement = render(<InfoCircle />);
    expect(InfoCircleElement).toBeTruthy();
});