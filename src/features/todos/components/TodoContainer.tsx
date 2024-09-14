import { useLoaderData } from 'react-router-dom';

import TodoPresentational from './TodoPresentational';
import { ModalContainer } from '@/components/organisms/modal';
import type { Todo } from '@/domains/types';

import classes from './TodoPresentational.module.css'

const TodoContainer = () => {
  const todo = useLoaderData() as Todo;

  if (!todo) {
    return (
      <ModalContainer>
        <main className={classes.todo}>
          <p className={classes.title}>Not Found</p>
        </main>
      </ModalContainer>
    )
  }
  return <TodoPresentational todo={todo} />;
};

export default TodoContainer;
