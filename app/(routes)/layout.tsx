import React from 'react';
import Navbar from '../_components/navbar';
import { Toaster } from '../_components/ui/sonner';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex h-full flex-col overflow-hidden">
        <Navbar />
        {children}
        <Toaster />
      </div>
    </div>
  );
};

export default Layout;
