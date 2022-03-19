import React from 'react';
import hamburger from '../../images/icon-hamburger.svg'

const Navbar = () => {
  const hamburgerMenuHandler = () => {
    const navItems = document.getElementById('nav-items');
    navItems.classList.contains('hidden') ? navItems.classList.remove('hidden') : navItems.classList.add('hidden');
  };
  
  return (
    <div>
      <nav> 
        <ul className='absolute bg-white top-24 left-12 w-4/5 rounded-2xl shadow-2xl hidden' id='nav-items'>
          <li className='text-2xl font-medium px-5 border-b py-6'>About</li>
          <li className='text-2xl font-medium px-5 border-b py-6'>Discover</li>
          <li className='text-2xl font-medium px-5 py-6'>Get Started</li>
        </ul>
        <div className='cursor-pointer' onClick={hamburgerMenuHandler}>
          <img src={hamburger}  alt="menu" className='w-6' />
        </div>
      </nav>
    </div>  
  );
};

export default Navbar;