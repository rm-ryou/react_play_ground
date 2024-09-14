import { useLoaderData } from 'react-router-dom';

import TodoListPresentational from './TodoListPresentational';
import type { Todo } from '@/domains/types';

const TodoListContainer = () => {
  const todos = useLoaderData() as Todo[];

  return <TodoListPresentational todos={todos} />;
};

export default TodoListContainer;
