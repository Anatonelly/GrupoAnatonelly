import React from 'react';

const index = () => {
  return (
    <a
      href='https://wa.me/553199351905/?text=Ol%C3%A1%2C%20gostaria%20de%20cotar%20um%20frete%20!%0AOrigem%20%3A%20%0ADestino%20%3A%20%0APeso%20%3A%20%0AVolume%20%3A%20%0AValor%20da%20NF%20%3A%20'
      className='Whatsapp rounded-full items-center justify-center fixed flex flex-col w-16 h-16 bottom-5 right-5 z-50 hover:scale-105'
    >
      <img
        className=' flex z-10 object-contain'
        src='/WhatsappLogo.png'
        alt=''
      />
      <div className='Cotacao bg-white w-20 z-10 h-auto -translate-y-14 rounded-md'>
        <p className='text-center'>Faça sua Cotação</p>
      </div>
    </a>
  );
};

export default index;
