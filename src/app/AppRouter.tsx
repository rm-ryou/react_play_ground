import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import TodoList from './TodoList';
import Todo from './Todo';
import DefaultLayout from './DefaultLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <TodoList />,
        children: [
          {
            path: '/:id',
            element: <Todo />
          }
        ]
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
