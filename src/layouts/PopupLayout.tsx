import React from 'react';

export const PopupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute flex h-full w-full items-center justify-center bg-dark/40 backdrop-blur-sm">
      <div className="w-full bg-dark">
        <div className="mx-auto flex w-3/4 flex-col gap-4 py-8 sm:w-1/2">
          {children}
        </div>
      </div>
    </div>
  );
};
