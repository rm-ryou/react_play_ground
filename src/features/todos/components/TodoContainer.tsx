import { TodoData } from '@/data';
import TodoPresentational from './TodoPresentational';

const TodoContainer = () => {
  const todo = TodoData[2];

  return <TodoPresentational todo={todo} />;
};

export default TodoContainer;
