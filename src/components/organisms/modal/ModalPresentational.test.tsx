import { test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { ModalPresentational } from './ModalPresentational';

test('渡されたHTML要素を表示する', () => {
  const testElement = <p>Test</p>;
  const mockFn = () => {};
  render(<ModalPresentational children={testElement} closeModal={mockFn} />);

  expect(screen.getByText('Test')).toBeInTheDocument();
});

test('モーダル以外をクリックするとモーダルが閉じる', async () => {
  const user = userEvent.setup();
  const mockCloseModal = vi.fn();
  const element = <p>Test</p>;

  render(
    <ModalPresentational children={element} closeModal={mockCloseModal} />,
  );

  const modalBackground = screen.getByTestId('modal-background');
  await user.click(modalBackground);

  expect(mockCloseModal).toHaveBeenCalled();
});
