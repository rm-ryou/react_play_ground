import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from './App';

test('クリックするとカウントが1増える', async () => {
  const user = userEvent.setup();
  render(<App />);

  const countButton = screen.getByText('count is 0');
  await user.click(countButton);

  expect(countButton).toHaveTextContent('count is 1');
});
