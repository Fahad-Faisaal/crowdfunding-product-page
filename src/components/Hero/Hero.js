import React from 'react';
import mobileHero from '../../images/image-hero-mobile.jpg'

const Hero = () => {
  return (
    <div>
      <img src={mobileHero} alt="" className='-z-10 brightness-50' />
    </div>
  );
};

export default Hero;