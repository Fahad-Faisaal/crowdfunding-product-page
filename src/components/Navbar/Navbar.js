import React from 'react';
import hamburger from '../../images/icon-hamburger.svg'

const Navbar = () => {
  return (
    <div>
      <nav>
        <img src={hamburger}  alt="menu" className='w-6' />
      </nav>
    </div>  
  );
};

export default Navbar;