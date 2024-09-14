import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Todos from './Todos';
import DefaultLayout from './DefaultLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Todos />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
