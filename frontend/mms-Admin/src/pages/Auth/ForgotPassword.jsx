import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/utilities/Buttons/Button';

function ForgotPassword() {
  return (
    <div className="h-full flex flex-col justify-center items-start">
      <div className="w-[80%] md:w-[65%] mx-auto">
        <h1 className="text-black1 text-[32px] font-[700] font-mukta">
          Forgot Password
        </h1>
        <p className="font-mukta text-black5 text-[24px] font-[400]">
          An email has been sent to your registered email. Follow the link to
          reset your password.
        </p>
        <Link to="/set-new-password">
          <Button width="w-full mt-[28px]">Done</Button>
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
