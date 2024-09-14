import TodoListPresentational from './TodoListPresentational';
import { TodoData } from '@/data';

const TodoListContainer = () => {
  const todos = TodoData;

  return <TodoListPresentational todos={todos} />;
};

export default TodoListContainer;
