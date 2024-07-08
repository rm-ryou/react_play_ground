import { Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const NotFoundRoute = () => {
  return (
    <div className='bg-cyan-950 h-screen'>
      <div className='p-52 flex flex-col items-center font-semibold text-white'>
        <h1 className='text-3xl'>404 - Not Found</h1>
        <Link to='/' replace>
          <Home />
        </Link>
      </div>
    </div>
  );
};

export default NotFoundRoute;