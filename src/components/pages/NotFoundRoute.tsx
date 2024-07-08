import { Link } from 'react-router-dom';

const NotFoundRoute = () => {
  return (
    <div className='mt-52 flex flex-col items-center font-semibold'>
      <h1 className='text-xl'>404 - Not Found</h1>
      <Link to='/' replace>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundRoute;