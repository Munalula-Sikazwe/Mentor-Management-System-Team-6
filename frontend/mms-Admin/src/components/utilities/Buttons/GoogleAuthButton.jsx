/* eslint-disable react/prop-types */
import React from 'react';
import { GoogleLogo } from '../../../assets/images';

function GoogleAuthButton({ styling }) {
  return (
    <button
      className={`border-[1px] border-pri1 text-pri1 w-full rounded-[10px] flex items-center justify-center h-[50px] ${styling}`}
      type="submit"
    >
      <GoogleLogo styling="w-[38px]" />
      <p className="font-[600] font-mukta ml-[10px]">signin with Google</p>
    </button>
  );
}

export default GoogleAuthButton;
