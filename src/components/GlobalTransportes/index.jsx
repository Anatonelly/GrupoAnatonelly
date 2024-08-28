'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '@/components/GlobalTransportes/style.css';
import Clientes from '@/components/Clientes';
import { useGSAP } from '@gsap/react';
import { TitleLetter, Paragraph, Lists, Img } from '@/utils/animations';

const Index = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  const textEdit = useRef(null);

  useEffect(() => {
    async function loadReveal() {
      const sr = (await import('scrollreveal')).default();

      sr.reveal('#TitleLetter', TitleLetter);
      sr.reveal('#Paragraph', Paragraph);
      sr.reveal('#Lists', Lists);
      sr.reveal('#Img', Img);
    }
    loadReveal();
  }, []);

  useGSAP(
    () => {
      const scrub = 0.5;

      gsap.set('.p > .span', {
        '--progress': 0,
        backgroundPositionX:
          'calc(-200vmax + (var(--progress) * 200vmax)), calc(-200vmax + (var(--progress) * 200vmax)), 0',
        color: 'transparent',
        markers: true,
      });
      gsap.to('.p > .span', {
        '--progress': 1,
        scrollTrigger: {
          // markers: true,
          trigger: '#textEditDiv',
          scrub,
          start: 'top-=10% center+=10%',
          end: 'center-=20% center',
        },
      });
      gsap.to('.p > .span', {
        color: 'black',
        scrollTrigger: {
          trigger: '#textEditDiv',
          // markers: true,
          scrub,
          start: 'top-=10% center',
          end: 'center-=20% center',
        },
      });
      //span2
      gsap.set('.p > .span2', {
        '--progress': 0,
        backgroundPositionX:
          'calc(-200vmax + (var(--progress) * 200vmax)), calc(-200vmax + (var(--progress) * 200vmax)), 0',
        color: 'transparent',
        markers: true,
      });
      gsap.to('.p > .span2', {
        '--progress': 1,
        scrollTrigger: {
          // markers: true,
          trigger: '#textEditDiv2',
          scrub,
          start: 'top-=10% center+=10%',
          end: 'center-=20% center',
        },
      });
      gsap.to('.p > .span2', {
        color: 'black',
        scrollTrigger: {
          trigger: '#textEditDiv2',
          // markers: true,
          scrub,
          start: 'top-=10% center',
          end: 'center-=20% center',
        },
      });
      //span3
      gsap.set('.p > .span3', {
        '--progress': 0,
        backgroundPositionX:
          'calc(-200vmax + (var(--progress) * 200vmax)), calc(-200vmax + (var(--progress) * 200vmax)), 0',
        color: 'transparent',
        markers: true,
      });
      gsap.to('.p > .span3', {
        '--progress': 1,
        scrollTrigger: {
          // markers: true,
          trigger: '#textEditDiv3',
          scrub,
          start: 'top-=10% center+=10%',
          end: 'center-=20% center',
        },
      });
      gsap.to('.p > .span3', {
        color: 'black',
        scrollTrigger: {
          trigger: '#textEditDiv3',
          // markers: true,
          scrub,
          start: 'top-=10% center',
          end: 'center-=20% center',
        },
      });

      //span3
      gsap.set('.p > .span4', {
        '--progress': 0,
        backgroundPositionX:
          'calc(-200vmax + (var(--progress) * 200vmax)), calc(-200vmax + (var(--progress) * 200vmax)), 0',
        color: 'transparent',
        markers: true,
      });
      gsap.to('.p > .span4', {
        '--progress': 1,
        scrollTrigger: {
          // markers: true,
          trigger: '#textEditDiv4',
          scrub,
          start: 'center-=60% center+=10%',
          end: 'bottom-=30% center',
        },
      });
      gsap.to('.p > .span4', {
        color: 'black',
        scrollTrigger: {
          trigger: '#textEditDiv4',
          // markers: true,
          scrub,
          start: 'center-=30% center-=10%',
          end: 'center center-=10%',
        },
      });
    },
    { scope: textEdit }
  );

  return (
    <div
      className='w-screen h-auto pt-10 bg-neutral-200 bg-Global bg-auto bg-fixed bg-no-repeat bg-center '
      id='GlobalTransportes'
      ref={textEdit}
    >
      <div
        className='w-full flex flex-col items-start bg-neutral-200 p-5 sm:text-6xl text-3xl font-bold pl-10'
        id='TitleLetter'
      >
        <span className='text-black p-10 flex items-start justify-start font-black lg:text-6xl md:text-6xl sm:text-4xl xs:text-2xl xxs:xl text-start  '>
          Global Transportes
        </span>
      </div>
      <div className='h-auto w-full sm:gap-20 gap-10  text-black font-semibold sm:text-4xl text-2xl flex items-center justify-start flex-col sm:p-20 p-10'>
        <div className='sm:w-10/12 w-full flex items-start justify-between text-black'>
          <p id='Paragraph' className='text-black '>
            Quem Somos
          </p>
        </div>
        <div
          id='Paragraph'
          className='sm:w-2/3 w-full sm:text-2xl text-lg text-black bg-neutral-200'
        >
          Na Global Transportes, somos especialistas em simplificar e otimizar a
          logística para empresas e autônomos em todo o país. Com uma equipe
          dedicada e uma vasta rede de parceiros, estamos comprometidos em
          oferecer soluções eficientes e confiáveis para todas as suas
          necessidades de transporte de carga.
        </div>
      </div>
      <div
        id='textEditDiv'
        className='h-auto sm:pb-32 pb-12 w-full flex flex-col items-center justify-start '
      >
        <section className='flex flex-col items-center justify-start gap-20 '>
          <p className='p font-bold '>
            <span className='span text-start '>Nossa Especialidade:</span>
            <br />
            <br />
            <br />
            <span className='span font-medium '>
              Fretes e Controle de Frota de Autônomos.
            </span>
          </p>
        </section>
        <div
          id='Img'
          className='flex h-auto sm:w-3/5 w-full sm:mt-32 mt-12 items-center justify-start flex-col bg-neutral-200 sm:p-20 p-10 rounded-full shadow-lg shadow-neutral-500'
        >
          {' '}
          <span className='sm:text-2xl text-lg text-black sm:w-5/6 w-full text-center h-full flex items-center justify-center p-10'>
            Nosso foco principal é encontrar fretes em aberto no mercado e
            conectar essas oportunidades com motoristas autônomos altamente
            qualificados. Ao fazer isso, não apenas ajudamos a preencher lacunas
            na capacidade de transporte, mas também proporcionamos oportunidades
            valiosas para os autônomos expandirem seus negócios.
          </span>
        </div>
      </div>
      <div
        id='textEditDiv2'
        className='h-auto sm:pb-32 pb-12 w-full flex flex-col items-center justify-start '
      >
        <section className='flex flex-col items-center justify-start gap-20 '>
          <p className='p text-neutral-800 font-bold '>
            <span className='span2 font-medium '>
              Eliminando as Dores de Cabeça da Logística
            </span>
          </p>
        </section>
        <div
          id='Img'
          className='flex h-auto sm:w-3/5 w-full sm:mt-32 mt-12 items-center justify-start flex-col bg-neutral-200 sm:p-20 p-10 rounded-full shadow-lg shadow-neutral-500'
        >
          {' '}
          <span className='sm:text-2xl text-lg text-black sm:w-5/6 w-full text-center h-full flex items-center justify-center p-10'>
            Sabemos que a logística pode ser complicada e estressante. É por
            isso que estamos aqui para tirar essa dor de cabeça do seu caminho.
            Ao confiar na Global Transportes, você pode ter certeza de que sua
            carga está em boas mãos. Nós cuidamos de tudo, desde a emissão do
            seguro da carga até o acompanhamento e rastreamento do motorista em
            tempo real.
          </span>
        </div>
      </div>
      <div
        id='textEditDiv3'
        className='h-auto sm:pb-32 pb-12 w-full flex flex-col items-center justify-start '
      >
        <section className='flex flex-col items-center justify-start gap-20 '>
          <p className='p text-neutral-800 font-bold '>
            <span className='span3 font-medium '>Conecte-se Conosco</span>
          </p>
        </section>
        <div
          id='Img'
          className='flex h-auto sm:w-3/5 w-full sm:mt-32 mt-12 items-center justify-start flex-col bg-neutral-200 sm:p-20 p-10 rounded-full shadow-lg shadow-neutral-500'
        >
          {' '}
          <span className='sm:text-2xl text-lg text-black sm:w-5/6 w-full text-center h-full flex items-center justify-center p-10'>
            Se você está procurando uma parceria confiável para suas
            necessidades de transporte de carga ou é um motorista autônomo em
            busca de oportunidades emocionantes, a Global Transportes é o seu
            destino. Entre em contato conosco hoje mesmo para descobrir como
            podemos ajudá-lo a alcançar seus objetivos logísticos.
          </span>
        </div>
      </div>
      <div
        id='textEditDiv4'
        className='h-auto sm:pb-32 pb-12 w-full flex flex-col items-center justify-start '
      >
        <section className='flex flex-col items-center justify-start gap-20 '>
          <p className='p p4 text-black text-center '>
            <span className='span4 font-black  '>
              Juntos, vamos levar sua logística para novos patamares!
            </span>
          </p>
        </section>
      </div>
        <Clientes/>
    </div>
  );
};

export default Index;
