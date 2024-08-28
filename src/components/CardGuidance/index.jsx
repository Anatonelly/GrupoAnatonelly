/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

const index = ({ icon, title, text }) => {
  return (
    <div className='flex md:w-1/3 xxs:w-full md:h-56 xxs:h-auto flex-col gap-3 items-center justify-center bg-Anatonelly-Primary rounded-md shadow-lg shadow-black hover:bg-Anatonelly-Secundary hover:scale-105 transition-all duration-300 p-4'>
      <div className='flex flex-col items-center justify-center'>
        {icon}
        <span className='font-bold text-lg text-white'>{title}</span>
      </div>
      <span className='text-center text-white'>{text}</span>
    </div>
  );
};

export default index;
