import { Outlet } from 'react-router-dom';
import Bubbles from '../Bubbles/Bubbles';

const Layout = () => {
  return (
    <>
      <Bubbles />
      <Outlet />
    </>
  );
};

export default Layout