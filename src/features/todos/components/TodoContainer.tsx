import { useLoaderData } from 'react-router-dom';

import TodoPresentational from './TodoPresentational';
import type { Todo } from '@/domains/types';

const TodoContainer = () => {
  const todo = useLoaderData() as Todo;

  return <TodoPresentational todo={todo} />;
};

export default TodoContainer;
