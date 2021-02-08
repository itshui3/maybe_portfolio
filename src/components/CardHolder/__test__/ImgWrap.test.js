
import { render } from '@testing-library/react';
import ImgWrap from '../ImgWrap/ImgWrap.js';

test('ImgWrap renders', () => {
    const ImgWrapElement = render(
    <ImgWrap gif={false} current={0}
    />);
    expect(ImgWrapElement).toBeTruthy();
});