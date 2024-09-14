import Modal from '@/components/organisms/Modal';
import type { Todo } from '@/domains/types';

import classes from './TodoPresentational.module.css';

interface TodoProps {
  todo: Todo;
}

const TodoPresentational = ({ todo }: TodoProps) => {
  return (
    <Modal>
      <main className={classes.todo}>
        <p className={classes.title}>{todo.title}</p>
        <p className={classes.contents}>{todo.contents}</p>
      </main>
    </Modal>
  );
};

export default TodoPresentational;
