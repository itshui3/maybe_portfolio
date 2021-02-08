
import { render } from '@testing-library/react';
import NewTab from '../NewTab/NewTab.js';

test('NewTab renders', () => {
    const NewTabElement = render(<NewTab />);
    expect(NewTabElement).toBeTruthy();
});