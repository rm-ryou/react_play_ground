import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import TodoListPresentational from './TodoListPresentational';
import type { Todo } from '@/domains/types';

describe('todoが1以上存在する場合', () => {
  it('todoが表示される', () => {
    const mockTodos: Todo[] = [
      { id: '1', title: 'test', contents: 'sample contents' },
    ];

    render(
      <BrowserRouter>
        <TodoListPresentational todos={mockTodos} />
      </BrowserRouter>
    );

    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByText('sample contents')).toBeInTheDocument();
  });
});

describe('todoが存在しない場合', () => {
  it('todoが作成されていないことを伝えるメッセージが表示される', () => {
    const emptyTodos: Todo[] = [];

    render(<TodoListPresentational todos={emptyTodos} />);

    expect(screen.getByText('no todo list yet.')).toBeInTheDocument();
  });
});
