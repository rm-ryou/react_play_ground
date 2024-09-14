import { ModalContainer } from '@/components/organisms/modal';
import type { Todo } from '@/domains/types';

import classes from './TodoPresentational.module.css';

interface TodoProps {
  todo: Todo;
}

const TodoPresentational = ({ todo }: TodoProps) => {
  return (
    <ModalContainer>
      <main className={classes.todo}>
        <p className={classes.title}>{todo.title}</p>
        <p className={classes.contents}>{todo.contents}</p>
      </main>
    </ModalContainer>
  );
};

export default TodoPresentational;
