// Libs
import React from 'react';
import Marquee from 'react-fast-marquee';

// Documentação da lib
// https://www.npmjs.com/package/react-fast-marquee

const index = () => {
  const Publis = [
    {
      empresa: 'Delrey Minerals',
      src: '/Clientes/DelRey.png',
    },
    {
      empresa: 'Sinalmig Moveis',
      src: '/Clientes/Sinalmig.svg',
    },
    {
      empresa: 'Hipica Boulevard',
      src: '/Clientes/hipica-logo.svg',
    },
    {
      empresa: 'Hipica Boulevard',
      src: '/Clientes/BlowPet.png',
    },
    {
      empresa: 'Vortice Mineral',
      src: '/Clientes/Vortice.png',
    },
    {
      empresa: 'DMA Distribuidora S/A',
      src: '/Clientes/DMA.png',
    },
    {
      empresa: 'Galzer',
      src: '/Clientes/Galzer.webp',
    },

    {
      empresa: 'Frigorifico Valencio',
      src: '/Clientes/FrigorificoValencio.png',
    },

    {
      empresa: 'Bubuyog Comeia de aço',
      src: '/Clientes/Bubuyog.png',
    },
  ];

  return (
    <div className='flex flex-col w-full bg-gradient-to-b from-neutral-200 to-Anatonelly-Primary '>
      <div className='flex flex-col w-full'>
        <h1 className='lg:text-7xl md:text-6xl text-wrap text-black font-bold sm:text-5xl xs:text-4xl xxs:text-3xl text-center'>
          Conheça nossos Clientes
        </h1>
      </div>
      <Marquee pauseOnHover pauseOnClick autoFill>
        {Publis.map((publi, index) => (
          <div
            className='flex justify-center items-center ml-10 gap-1 '
            key={index}
          >
            <div className=' rounded-full w-32 h-32 justify-center items-center flex'>
              <img
                className='object-scale-down w-32 h-32 rounded-full'
                src={publi.src}
                alt={publi.empresa}
              />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default index;
