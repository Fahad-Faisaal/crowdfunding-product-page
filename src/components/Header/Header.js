import React from 'react';
import Navbar from '../Navbar/Navbar';
import logo from '../../images/logo.svg';


const Header = () => {
  return (
    <header className='flex justify-between px-5 py-7 absolute w-full z-10'>
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <Navbar />
    </header>
  );
};

export default Header;