import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import DefaultLayout from './DefaultLayout';
import TodoListLayout from './TodoListLayout';
import TodoContainer from '@/features/todos/components/TodoContainer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <TodoListLayout />,
        children: [
          {
            path: '/:id',
            element: <TodoContainer />,
          },
        ],
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
