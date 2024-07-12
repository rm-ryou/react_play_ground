import { Outlet } from 'react-router-dom';
import DefaultTemplate from 'components/templates/DefaultTemplate';

const DefaultPage = () => {
  return (
    <div className='bg-cyan-950 h-screen'>
      <DefaultTemplate>
        <Outlet />
      </DefaultTemplate>
    </div>
  );
};

export default DefaultPage;