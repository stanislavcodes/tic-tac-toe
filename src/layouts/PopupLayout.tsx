import React from 'react';

export const PopupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute h-full w-full bg-dark/40 backdrop-blur-sm flex justify-center items-center">
      <div className="w-full bg-dark">
        <div className="mx-auto flex w-1/2 flex-col py-8 gap-4">
          {children}
        </div>
      </div>
    </div>
  );
};
