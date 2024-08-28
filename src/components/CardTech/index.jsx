/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

const index = ({ icon, title, topics }) => {
  return (
    <div className='flex w-full md:h-56 xxs:h-auto flex-col gap-5 items-center justify-center bg-Anatonelly-Primary rounded-md shadow-lg shadow-black hover:bg-Anatonelly-Secundary hover:scale-105 xxs:ml-0 md:ml-2 transition-all duration-300 xxs:p-6 md:p-12'>
      <div className='flex flex-col items-center justify-center gap-2'>
        {icon}
        <span className='font-bold xxs:text-base md:text-lg text-center text-white'>
          {title}
        </span>
      </div>
      <div className='flex flex-col itens-start w-full gap-5'>
        {topics.map((topic, index) => (
          <li
            key={index}
            className='text-start md:text-base xxs:text-sm text-white'
          >
            {topic}
          </li>
        ))}
      </div>
    </div>
  );
};

export default index;
