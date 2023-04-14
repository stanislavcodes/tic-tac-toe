import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <div className="app bg-bg text-white selection:bg-primary selection:text-dark">
      <div className="container mx-auto flex h-screen w-full flex-col items-center justify-center ">
        <Outlet />
      </div>
    </div>
  );
};
