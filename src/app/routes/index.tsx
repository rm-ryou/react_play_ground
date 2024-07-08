import { createBrowserRouter } from 'react-router-dom';

import LayOutComponent from 'components/pages/LayoutComponent';
import NotFoundRoute from 'components/pages/NotFoundRoute';

export const createRouter = createBrowserRouter([
  {
    path: '/',
    element: <LayOutComponent />,
    errorElement: <NotFoundRoute />,
  },
]);