import React from 'react';
import bookmarkIcon from '../../images/icon-bookmark.svg';
import mastercraftLogo from '../../images/logo-mastercraft.svg';

const Description = () => {
  return (
    <div>
      <section className='relative text-center flex flex-col gap-6 items-center bg-white w-11/12 mx-auto px-3 py-5 rounded-lg shadow-md -mt-11'>
        <div className='absolute -mt-12'>
          <img src={mastercraftLogo} alt="" />
        </div>
        <div className='mt-10'>
          <h1 className='font-bold text-2xl mb-6'>Mastercraft Bamboo Monitor Riser</h1>
          <p className='text-gray-600'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        </div>
        <div className='flex gap-3'>
          <button className='px-6 py-4 bg-mastercraft text-white text-lg font-bold rounded-full'>Back this project</button>
          <button><img src={bookmarkIcon} alt="" /></button>
        </div>
      </section>
    </div>
  );
};

export default Description;