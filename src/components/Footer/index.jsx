/* eslint-disable @next/next/no-img-element */
import React from 'react';
// Components
import PrivacyPolicy from '@/components/PrivacyPolicy';
import Terms from '@/components/Terms';

// Icons
import { FaMapPin, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const index = () => {
  return (
    <div>
      <div className='h-auto w-full bg-Anatonelly-Primary flex flex-col md:justify-between items-center p-5 pb-24   xxs:gap-10 '>
        <img
          draggable={false}
          className='md:w-1/3 xxs:w-full object-contain'
          src='/Footer/LogoFooter.png'
          alt=''
        />
        <div className='flex md:w-1/3 xxs:w-full gap-5 items-center justify-center'>
          <a href='#'>
            <img draggable={false} src='/Footer/Facebook.png' alt='' />
          </a>
          <a href='#'>
            <img draggable={false} src='/Footer/X.png' alt='' />
          </a>
          <a href='https://www.instagram.com/transportes.global'>
            <img draggable={false} src='/Footer/Instagram.png' alt='' />
          </a>
          <a href='https://wa.me/553199351905/?text=Ol%C3%A1%2C%20gostaria%20de%20cotar%20um%20frete%20!%0AOrigem%20%3A%20%0ADestino%20%3A%20%0APeso%20%3A%20%0AVolume%20%3A%20%0AValor%20da%20NF%20%3A%20'>
            <img draggable={false} src='/Footer/Whatsapp.png' alt='' />
          </a>
        </div>
      </div>
      <div className='md:w-full xxs:w-full flex flex-col justify-center  gap-16 '>
        <div className='flex items-center justify-center'>
          <span className='text-white font-black md:text-4xl xxs:text-xl xxs:text-center md:text-start'>
            FALE CONOSCO
          </span>
        </div>
        <div className='flex lg:flex-row xxs:flex-col justify-center pb-10 md:gap-0 xxs:gap-10'>
          <div className='flex flex-col lg:w-1/3 xxs:w-full gap-5 items-center'>
            <span className='font-bold text-white text-xl'>
              Anatonelly Tech
            </span>
            <div className='flex flex-col w-full pl-5 gap-5'>
              <div className='flex flex-col'>
                <div className='flex items-center w-full gap-3 text-white'>
                  <span className='text-white'>
                    <MdEmail className='invert text-2xl' />
                  </span>
                  <span className='font-bold text-white'>Email:</span>
                </div>
                <div className='flex flex-col justify-center md:pl-10 xxs:pt-5'>
                  <span className='text-white md:text-base xxs:text-sm '>
                    diretoria@grupoanatonelly.com
                  </span>
                  <span className='text-white md:text-base xxs:text-sm '>
                    operacional@grupoanatonelly.com
                  </span>
                  <span className='text-white md:text-base xxs:text-sm '>
                    financeiro@grupoanatonelly.com
                  </span>
                  <span className='text-white md:text-base xxs:text-sm '>
                    comercial@grupoanatonelly.com
                  </span>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex items-center gap-3'>
                  <FaPhoneAlt className='invert text-2xl' />
                  <span className='font-bold text-white'>Telefone:</span>
                </div>
                <div className='flex flex-col justify-center md:pl-10 xxs:pt-5'>
                  <span className='text-white md:text-base xxs:text-sm '>
                    +55 (31) 99491-6651
                  </span>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex items-center gap-3'>
                  <FaMapPin className='invert text-2xl' />
                  <span className='font-bold text-white'>Localização:</span>
                </div>
                <div className='flex flex-col justify-center md:pl-10 xxs:pt-5'>
                  <span className='text-white md:text-base xxs:text-sm text-wrap'>
                    Rua Dona Francisca, 8300 (Bloco Hub- Sala 105 (Ágora Tech
                    Park)) Zona Industrial Norte, Joinville | Santa Catarina
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col lg:w-1/3 xxs:w-full gap-5 items-center'>
            <span className='font-bold text-white text-xl'>
              Global Transportes
            </span>
            <div className='flex flex-col w-full pl-5 gap-5'>
              <div className='flex flex-col'>
                <div className='flex items-center w-full gap-3 text-white'>
                  <span className='text-white'>
                    <MdEmail className='invert text-2xl' />
                  </span>
                  <span className='font-bold text-white'>Email:</span>
                </div>
                <div className='flex flex-col justify-center md:pl-10 xxs:pt-5'>
                  <span className='text-white md:text-base xxs:text-sm '>
                    comercial@globaltransportes.log.br
                  </span>
                  <span className='text-white md:text-base xxs:text-sm '>
                    financeiro@globaltransportes.log.br{' '}
                  </span>
                  <span className='text-white md:text-base xxs:text-sm '>
                    operacional@globaltransportes.log.br
                  </span>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex items-center gap-3'>
                  <FaPhoneAlt className='invert text-2xl' />
                  <span className='font-bold text-white'>Telefone:</span>
                </div>
                <div className='flex flex-col justify-center md:pl-10 xxs:pt-5'>
                  <span className='text-white md:text-base xxs:text-sm '>
                    +55 (31) 3220-9915
                  </span>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex items-center gap-3'>
                  <FaMapPin className='invert text-2xl' />
                  <span className='font-bold text-white'>Localização:</span>
                </div>
                <div className='flex flex-col justify-center md:pl-10 xxs:pt-5'>
                  <span className='text-white md:text-base xxs:text-sm text-wrap'>
                    Rua Tratoy - 396/ Distrito Industrial Jardim Piemont Norte,
                    32689-338, Betim | Minas Gerais
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col lg:w-1/3 xxs:w-full gap-5 items-center'>
            <span className='font-bold text-white text-xl'>Anatonelly LLC</span>
            <div className='flex flex-col w-full pl-5 gap-5'>
              <div className='flex flex-col'>
                <div className='flex items-center w-full gap-3 text-white'>
                  <span className='text-white'>
                    <MdEmail className='invert text-2xl' />
                  </span>
                  <span className='font-bold text-white'>Email:</span>
                </div>
                <div className='flex flex-col justify-center md:pl-10 xxs:pt-5'>
                  <span className='text-white md:text-base xxs:text-sm '>
                    amex@anatonellyllc.com
                  </span>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex items-center gap-3'>
                  <FaMapPin className='invert text-2xl' />
                  <span className='font-bold text-white'>Localização:</span>
                </div>
                <div className='flex flex-col justify-center md:pl-10 xxs:pt-5'>
                  <span className='text-white md:text-base xxs:text-sm text-wrap'>
                    7345 W SAND LAKE RD STE 210 OFFICE 4261, FL 32819, Orlando |
                    Flórida
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex pb-10'>
          <PrivacyPolicy />
          <Terms />
        </div>
      </div>
    </div>
  );
};

export default index;
