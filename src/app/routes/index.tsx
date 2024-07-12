import { createBrowserRouter } from 'react-router-dom';

import BoardPage from 'components/pages/BoardPage';
import NotFoundPage from 'components/pages/NotFoundPage';
import DefaultPage from 'components/pages/DefaultPages';

export const createRouter = createBrowserRouter([
  {
    path: '/',
    element: <DefaultPage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <BoardPage />,
      },
      {
        path: 'boards',
        element: <BoardPage />,
      },
      {
        path: 'boards/:boardId',
        element: <div className='text-4xl text-white'>This page is columns page</div>,
      },
    ],
  },
]);