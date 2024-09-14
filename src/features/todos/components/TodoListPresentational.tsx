import { Link } from 'react-router-dom';

import type { Todo } from '@/domains/types';
import classes from './TodoListPresentational.module.css';

interface TodoListProps {
  todos: Todo[];
}

const TodoListPresentational = ({ todos }: TodoListProps) => {
  return (
    <>
      {todos.length > 0 && (
        <ul className={classes.todoList}>
          {todos.map((todo) => (
            <li key={todo.id} className={classes.todo}>
              <Link to={todo.id}>
                <p className={classes.title}>{todo.title}</p>
                <p className={classes.contents}>{todo.contents}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {todos.length === 0 && (
        <>
          <h2>no todo list yet.</h2>
          <p>But don't worry! We are going to create it now!</p>
        </>
      )}
    </>
  );
};

export default TodoListPresentational;
