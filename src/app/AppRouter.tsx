import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import DefaultLayout from '@/components/templates/DefaultLayout';
import ErrorPage from '@/components/pages/ErrorPage';
import TodoListLayout from '@/components/templates/TodoListLayout';
import TodoContainer from '@/features/todos/components/TodoContainer';
import { todosLoader, todoLoader } from '@/features/todos/api';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
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
          {
            path: '*',
            element: <ErrorPage />,
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
