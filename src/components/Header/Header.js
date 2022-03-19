import React from 'react';
import Navbar from '../Navbar/Navbar';
import logo from '../../images/logo.svg';


const Header = () => {
  return (
    <div>
      <header className='bg-black flex justify-between px-5 py-7'>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <Navbar />
      </header>
    </div>
  );
};

export default Header;