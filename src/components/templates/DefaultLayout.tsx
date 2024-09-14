import { Outlet } from 'react-router-dom';

import { Header } from '@/components/organisms/header';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
