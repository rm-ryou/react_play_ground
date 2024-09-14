import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <>
      <h1>Hello, React!!</h1>
      <p>This project is simple application by react</p>
      <Outlet />
    </>
  );
};

export default DefaultLayout;
