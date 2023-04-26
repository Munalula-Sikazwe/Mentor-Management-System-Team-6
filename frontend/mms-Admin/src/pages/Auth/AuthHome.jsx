/* eslint-disable arrow-parens */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { BrandLogo } from '../../assets/images';
import PasswordResetModal from '../../components/Modals/PasswordResetModal';

function AuthHome() {
  return (
    <div>
      <PasswordResetModal />
      <div className="w-screen h-screen md:grid grid-cols-2">
        {/* left hand side of the page */}
        <div className="bg-pri3 h-full hidden md:flex flex-col items-center justify-center">
          {/* imported mentor management system logo */}
          <BrandLogo styling="w-[35%]" />
          <h1 className="text-white font-[700] font-mukta text-[30px]">
            Mentor Management System
          </h1>
        </div>
        {/* right hand side of the page */}
        <div className="bg-white flex justify-center items-center md:block h-full">
          <Outlet />
        </div>
      </div>
    </div>
    // the whole page both left and right
  );
}

export default AuthHome;
