import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import DefaultLayout from './DefaultLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
