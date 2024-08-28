/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';

// Utils
import {
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  LogoBottom,
  LogoTop,
} from '@/utils/animations';

const index = () => {
  useEffect(() => {
    async function loadReveal() {
      const sr = (await import('scrollreveal')).default();
      sr.reveal('#LogoTop', LogoTop);
      sr.reveal('#LogoBottom', LogoBottom);
      sr.reveal('#Logo1', Logo1);
      sr.reveal('#Logo2', Logo2);
      sr.reveal('#Logo3', Logo3);
      sr.reveal('#Logo4', Logo4);
    }
    loadReveal();
  }, []);

  return (
    <div className='h-screen w-full bg-truckInicial bg-no-repeat bg-cover bg-center flex flex-col items-center md:justify-start xxs:justify-center overflow-hidden'>
      <img
        draggable='false'
        src='/InicialScreen/LogoAnatonelly.svg'
        alt='Caminhão'
        id='LogoBottom'
      />
      <img
        draggable='false'
        className='w-3/6 md:flex '
        src='/InicialScreen/LogoGrupoAnatonelly.svg'
        alt='Caminhão'
        id='LogoBottom'
      />
      <div className='h-auto py-2 w-full bg-neutral-500/80 flex flex-row items-center justify-center md:gap-40 xxs:gap-4'>
        <img
          draggable='false'
          src='/InicialScreen/AnatonellyTech.svg'
          alt='Caminhão'
          id='Logo1'
          className='md:w-auto xxs:w-1/6'
        />
        <img
          draggable='false'
          src='/InicialScreen/GlobalTransportes.svg'
          alt='Caminhão'
          className='md:w-auto xxs:w-1/6'
          id='Logo2'
        />
        <img
          draggable='false'
          src='/InicialScreen/AnatonellyLLC.svg'
          alt='Caminhão'
          className='md:w-auto xxs:w-1/6'
          id='Logo3'
        />
        {/* <img
          draggable='false'
          src='/InicialScreen/GlobalTransportes.svg'
          alt='Caminhão'
          className='md:w-auto xxs:w-1/6'
          id='Logo4'
        /> */}
      </div>
    </div>
  );
};

export default index;
