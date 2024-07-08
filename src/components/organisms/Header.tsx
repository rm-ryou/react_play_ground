import { Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='sticky top-0 bg-cyan-500 p-4 text-white'>
      <div className='flex flex-col items-center'>
        <div className='bg-cyan-950 p-5 rounded-full'>
          <Link to='/'>
            <Home />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;