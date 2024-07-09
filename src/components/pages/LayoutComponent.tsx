import { Outlet } from 'react-router-dom';

import Header from 'components/organisms/Header';

const LayOutComponent = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LayOutComponent;