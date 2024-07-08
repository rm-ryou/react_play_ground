import { createBrowserRouter } from 'react-router-dom';

import LayOutComponent from 'components/pages/LayoutComponent';
import NotFoundRoute from 'components/pages/NotFoundRoute';

export const createRouter = createBrowserRouter([
  {
    path: '/',
    element: <LayOutComponent />,
    errorElement: <NotFoundRoute />,
    children: [
      {
        index: true,
        element: <div className='bg-cyan-950 h-screen'>Hello, World!!</div>
      }
    ]
  },
]);