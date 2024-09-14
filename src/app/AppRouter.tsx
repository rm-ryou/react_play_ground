import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import DefaultLayout from '@/components/templates/DefaultLayout';
import TodoListLayout from '@/components/templates/TodoListLayout';
import TodoContainer from '@/features/todos/components/TodoContainer';
import { todosLoader, todoLoader } from '@/features/todos/api'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <TodoListLayout />,
        loader: todosLoader,
        children: [
          {
            path: '/:id',
            element: <TodoContainer />,
            loader: todoLoader,
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
