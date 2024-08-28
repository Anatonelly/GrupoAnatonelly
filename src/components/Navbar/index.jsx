import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const [selected, setSelected] = useState('AnatonellyTransportes');
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (sectionId) => {
    setSelected(sectionId);
    const section = document.getElementById(sectionId);
    const mainPage = document.getElementById('mainPage');
    const navbarHeight = document.getElementById('navbar').offsetHeight;

    if (section && mainPage) {
      const mainPageRect = mainPage.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();

      // Calcule a posição do elemento relativamente ao topo da mainPage,
      // subtraindo a altura da barra de navegação
      const offsetTop = sectionRect.top - mainPageRect.top - navbarHeight;

      // Adicione a posição do elemento ao valor de scroll da mainPage
      const scrollTop = mainPage.scrollTop + offsetTop;

      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const number = Math.trunc(scrolled);
    document.getElementById('loadingNav').style.width = `${number}%`;
    for (let i = 0; i < 100; i++) {}
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div
      id='navbar'
      className={`md:flex flex flex-col md:items-start items-end xxs:justify-start md:w-full md:px-2 px-1 w-auto h-auto bg-neutral-700 shadow-2xl shadow-neutral-900 sticky md:top-0 top-3 right-3 z-50 md:rounded-none rounded-md transition-all duration-300  border-b-4 border-neutral-800 md:gap-4`}
    >
      <div
        className={
          'md:hidden w-10 h-10 cursor-pointer flex flex-col items-center justify-center gap-1 relative '
        }
        onClick={toggleMenu}
      >
        <div
          className={`w-6 h-0.5 bg-white transition-all ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-all ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-all ${
            isMenuOpen ? '-rotate-45 -translate-y-1' : ''
          }`}
        ></div>
      </div>
      {/* Lista de itens da navegação */}
      <ul
        className={`md:flex md:flex-row bg-neutral-700 w-auto md:gap-5 xxs:gap-3 transition-all duration-500 md:px-5 px-3 md:mt-4 mt-0 ${
          isMenuOpen ? 'flex flex-col items-center' : 'hidden'
        }`}
      >
        <li className='md:w-auto w-full'>
          <a
            className={`block py-3 px-6 cursor-pointer lg:text-xl md:text-base sm:text-sm text-xs transition-all duration-300 hover:drop-shadow-neon hover:scale-105 md:rounded-t-md rounded-md shadow-inner shadow-black ${
              selected === 'AnatonellyTransportes'
                ? 'drop-shadow-neon bg-Anatonelly-Primary font-bold text-cyan-300 scale-105'
                : 'text-neutral-700 font-bold bg-neutral-300 '
            }`}
            onClick={() => handleNavigation('AnatonellyTransportes')}
          >
            Anatonelly Transportes
          </a>
        </li>
        <li className='md:w-auto w-full'>
          <a
            className={` block py-3 px-6 cursor-pointer lg:text-xl md:text-base sm:text-sm text-xs transition-all duration-300 hover:drop-shadow-neon hover:scale-105 md:rounded-t-md rounded-md shadow-inner shadow-black ${
              selected === 'AnatonellyLLC'
                ? 'drop-shadow-neon font-bold text-cyan-300 scale-105 bg-Anatonelly-Primary'
                : 'text-neutral-700 font-bold bg-neutral-300 '
            }`}
            onClick={() => handleNavigation('AnatonellyLLC')}
          >
            Anatonelly LLC
          </a>
        </li>
        <li className='md:w-auto w-full'>
          <a
            className={`block py-3 px-6 cursor-pointer lg:text-xl md:text-base sm:text-sm text-xs transition-all duration-300 hover:drop-shadow-neon hover:scale-105 md:rounded-t-md rounded-md shadow-inner shadow-black ${
              selected === 'AnatonellyTech'
                ? 'drop-shadow-neon font-bold text-cyan-300 scale-105 bg-Anatonelly-Primary'
                : 'text-neutral-700 font-bold bg-neutral-300 '
            }`}
            onClick={() => handleNavigation('AnatonellyTech')}
          >
            Anatonelly Tech
          </a>
        </li>
        <li className='md:w-auto w-full'>
          <a
            className={`block py-3 px-6 cursor-pointer lg:text-xl md:text-base sm:text-sm text-xs transition-all duration-300 hover:drop-shadow-neon hover:scale-105 md:rounded-t-md rounded-md shadow-inner shadow-black ${
              selected === 'GlobalTransportes'
                ? 'drop-shadow-neon font-bold text-cyan-300 scale-105 bg-Anatonelly-Primary'
                : 'text-neutral-700 font-bold bg-neutral-300 '
            }`}
            onClick={() => handleNavigation('GlobalTransportes')}
          >
            Global Transportes
          </a>
        </li>
        <li className='md:w-auto w-full'>
          <a
            href='/Blog'
            className={`flex py-3 px-6 cursor-pointer lg:text-xl md:text-base sm:text-sm text-xs transition-all duration-300 hover:drop-shadow-neon h-full justify-center items-center hover:scale-105 md:rounded-t-md rounded-md shadow-inner shadow-black ${
              selected === 'Noticias'
                ? 'drop-shadow-neon font-bold text-cyan-300 scale-105 bg-Anatonelly-Primary'
                : 'text-neutral-700 font-bold bg-neutral-300 '
            }`}
            onClick={() => handleNavigation('Noticias')}
          >
            Noticias
          </a>
        </li>
      </ul>
      {/* Barra de progresso */}
      <div
        id='loadingNav'
        className={`h-[3px] relative transition-width duration-1000 md:flex xxs:hidden `}
      >
        <div className='bg-cyan-500 w-full h-[6px] flex'></div>
      </div>
    </div>
  );
};

export default Navbar;
