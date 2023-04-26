import React from 'react';
import './SplashScreen.css';

export default function SplashScreen() {
  return (
    <div className="bg grid h-screen place-items-center">
      <div className="wrap">
        <img className="logo" src="/assets/logo.png" alt="logo" />
        <h1 className="logoText">Mentor Management System</h1>
      </div>
    </div>
  );
}
