import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="app bg-bg text-white">
      <div className="container mx-auto flex h-screen w-full flex-col items-center justify-center ">
        <Outlet />
      </div>
    </div>
  );
};
