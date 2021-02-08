
import { render } from '@testing-library/react';
import GitHub from '../GitHub/GitHub.js';

test('GitHub renders', () => {
    const GitHubElement = render(<GitHub />);
    expect(GitHubElement).toBeTruthy();
});