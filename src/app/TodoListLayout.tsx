import { Outlet } from 'react-router-dom';

import TodoListContainer from '@/features/todos/components/TodoListContainer';

const TodoListLayout = () => {
  return (
    <>
      <Outlet />
      <main>
        <TodoListContainer />
      </main>
    </>
  );
};

export default TodoListLayout;
