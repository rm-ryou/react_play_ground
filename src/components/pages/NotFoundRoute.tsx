import Header from 'components/organisms/Header';

const NotFoundRoute = () => {
  return (
    <>
      <Header />
      <div className='bg-cyan-950 h-screen'>
        <div className='p-52 flex flex-col items-center font-semibold text-white'>
          <h1 className='text-3xl'>404 - Not Found</h1>
        </div>
      </div>
    </>
  );
};

export default NotFoundRoute;