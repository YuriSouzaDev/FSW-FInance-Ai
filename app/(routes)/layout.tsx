import React from 'react';
import Navbar from '../_components/navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex h-full flex-col overflow-hidden">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
