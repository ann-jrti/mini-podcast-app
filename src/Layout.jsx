import { Outlet } from 'react-router-dom';
import { AppTitle } from './pages/components/AppTitle';
export const Layout = () => {
  return (
    <div>
      <AppTitle />
      <Outlet />
    </div>
  );
};
