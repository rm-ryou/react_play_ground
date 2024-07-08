import { createBrowserRouter } from 'react-router-dom';

export const createRouter = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello, root path</div>,
    errorElement: <div>404 Not found</div>,
  },
]);