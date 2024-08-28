'use client';
import React from 'react';

import '@/styles/globals.css';

// Components
import Carousel from '@/components/Carousel';
import InicialScreen from '@/components/InicialScreen';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnatonellyLLC from '@/components/AnatonellyLLC';
import AnatonellyTransportes from '@/components/AnatonellyTransportes';
import AnatonellyTech from '@/components/AnatonellyTech';
import GlobalTransportes from '@/components/GlobalTransportes';
import WhatsApp from '@/components/WhatsApp';
export default function Home() {
  return (
    <div
      id='mainPage'
      className='min-h-screen h-auto w-full relative -z-50 flex flex-col items-end justify-start bg-Anatonelly-Primary '
    >
      <InicialScreen />
      <Navbar />
      <div className='relative -z-40 flex flex-col h-auto w-full overflow-hidden '>
        <Carousel />
        <AnatonellyTransportes />
        <AnatonellyLLC />
        <AnatonellyTech />
        <GlobalTransportes />
        <Footer />
      </div>
      <WhatsApp/>
    </div>
  );
}
