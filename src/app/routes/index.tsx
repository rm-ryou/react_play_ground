import { createBrowserRouter } from 'react-router-dom';

import DefaultPage from 'components/pages/DefaultPages';
import NotFoundPage from 'components/pages/NotFoundPage';
import BoardPage from 'components/pages/BoardPage';
import ColumnPage from 'components/pages/ColumnPage';

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
        element: <ColumnPage />,
      },
    ],
  },
]);