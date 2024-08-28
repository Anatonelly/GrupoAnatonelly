/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { useEffect } from 'react';

// Components
import CardGuidance from '@/components/CardGuidance';

// Icons
import { FaHandshake } from 'react-icons/fa';
import { RiMedalFill } from 'react-icons/ri';
import { HiUserGroup } from 'react-icons/hi';
import { FaRecycle } from 'react-icons/fa';
import { FaCity } from 'react-icons/fa6';

// Utils
import { TitleLetter, Paragraph, Lists, Img } from '@/utils/animations';

const index = () => {
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

  return (
    <div
      id='AnatonellyTransportes'
      className='w-full h-auto flex flex-col overflow-hidden bg-Anatonelly-Primary  '
    >
      <span
        id='TitleLetter'
        className='text-white p-10 flex items-start justify-start font-black lg:text-6xl md:text-6xl sm:text-4xl xs:text-2xl xxs:xl text-start'
      >
        Sobre nós
      </span>
      <div className='md:h-screen xxs:h-auto w-full flex justify-center items-center p-5'>
        <div className='flex flex-col justify-center items-start gap-10'>
          <span
            id='Paragraph'
            className='text-white md:text-5xl xxs:text-xl font-bold w-auto inline-block	'
          >
            Nossa História
          </span>

          <div
            id='Paragraph'
            className='flex flex-col justify-center items-center'
          >
            <span className='text-white md:text-2xl xxs:text-base font-normal w-1/2 '>
              A Anatonelly Transportes iniciou suas atividades em março de 2023
              no coração do Parque Tecnológico Biopark, em Toledo-PR.
            </span>
            <span className='text-white md:text-2xl xxs:text-base font-normal w-1/2 '>
              Embora nossa jornada oficial tenha começado há pouco mais de um
              ano, nossa expertise em logística tem raízes profundas, com mais
              de cinco anos de experiência consolidada. Nascemos em meio à
              pandemia global, período de incertezas, como uma extensão da
              empresa matriz, Global Transportes, sediada em Contagem-MG
            </span>
          </div>
        </div>
      </div>

      <div className='md:h-screen xxs:h-auto w-full flex  bg-neutral-200 pt-10 xxs:pb-10 md:pb-0 gap-6'>
        <div className='flex flex-col md:w-2/3 xxs:w-full items-center justify-center gap-5'>
          <span id='TitleLetter' className='md:text-5xl xxs:text-xl font-bold'>
            Como Surgiu?
          </span>

          <p
            id='Paragraph'
            className='md:text-2xl xxs:text-base font-normal w-2/3'
          >
            O Insight para nossa mudança veio ao assistir um filme chamado
            Robôs, onde o personagem soldador fala uma simples frase mas que
            trouxe-me um grande impacto
          </p>

          <div>
            <p id='Paragraph' className='md:text-2xl xxs:text-base font-normal'>
              - Viu a necessidade?
            </p>
            <p id='Paragraph' className='md:text-2xl xxs:text-base font-normal'>
              - Atenda!
            </p>
          </div>

          <p
            id='Paragraph'
            className='md:text-2xl xxs:text-base font-normal w-2/3'
          >
            Deste modo foi criada a Global Transportes Logística Inteligente e
            Digital, conectando mais de 2 milhões de caminhoneiros autônomos,
            empresas e novos parceiros
          </p>
        </div>
        <div
          id='Img'
          className='md:flex xxs:hidden flex-col justify-end items-end w-1/3 '
        >
          <img
            className='object-contain -mb-1 '
            src='/AboutUs/Robots.svg'
            alt=''
          />
        </div>
      </div>
      <div className='h-screen w-full bg-AboutUs bg-cover flex justify-center flex-col md:gap-32 xxs:gap-10 p-6'>
        <span
          id='TitleLetter'
          className='md:text-5xl xxs:text-xl  px-14 font-black text-white'
        >
          Nossos Números
        </span>
        <div className='flex items-center justify-center'>
          <div className='flex flex-col gap-5 items-center justify-center'>
            <div id='Lists' className='flex w-full gap-5'>
              <img
                src='/AboutUs/CheckAboutUs.svg'
                className='md:w-auto xxs:w-5'
                alt='Check'
              />
              <p className='text-white font-bold md:text-2xl xxs:text-sm'>
                Mais de 600 transportadoras parceiras
              </p>
            </div>
            <div id='Lists' className='flex w-full gap-5'>
              <img
                src='/AboutUs/CheckAboutUs.svg'
                className='md:w-auto xxs:w-5'
                alt='Check'
              />
              <p className='text-white font-bold md:text-2xl xxs:text-sm'>
                Mais de 95 milhões em cargas transportadas
              </p>
            </div>
            <div id='Lists' className='flex w-full gap-5'>
              <img
                src='/AboutUs/CheckAboutUs.svg'
                className='md:w-auto xxs:w-5'
                alt='Check'
              />
              <p className='text-white font-bold md:text-2xl xxs:text-sm'>
                18.000 clientes atendidos direta ou indiretamente
              </p>
            </div>
            <div id='Lists' className='flex w-full gap-5'>
              <img
                src='/AboutUs/CheckAboutUs.svg'
                className='md:w-auto xxs:w-5'
                alt='Check'
              />
              <p className='text-white font-bold md:text-2xl xxs:text-sm'>
                Contamos com 100 mil motoristas cadastrados.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='h-screen w-full flex flex-col justify-center items-center gap-10 p-5'>
        <span
          id='Lists'
          className='text-white md:text-5xl xxs:text-xl font-bold'
        >
          Nossos Diferenciais
        </span>
        <div className='flex md:flex-row xxs:flex-col w-full justify-center md:items-center xxs:items-start md:gap-52 '>
          <div className='flex flex-col '>
            <li
              id='Lists'
              className='text-white md:text-2xl xxs:text-base font-normal text-wrap w-full'
            >
              Sistema de Frota Virtual e Frete 2.0
            </li>{' '}
            <li
              id='Lists'
              className='text-white md:text-2xl xxs:text-base font-normal'
            >
              Gestão da frota
            </li>
            <li
              id='Lists'
              className='text-white md:text-2xl xxs:text-base font-normal'
            >
              Redução de custos
            </li>{' '}
            <li
              id='Lists'
              className='text-white md:text-2xl xxs:text-base font-normal'
            >
              Aumento da perfomance
            </li>{' '}
            <li
              id='Lists'
              className='text-white md:text-2xl xxs:text-base font-normal'
            >
              + 24 transportadoras
            </li>
          </div>
          <div className='flex flex-col'>
            <li
              id='Lists'
              className='text-white md:text-2xl xxs:text-base font-normal'
            >
              Cursos para caminhoneiros
            </li>
            <li
              id='Lists'
              className='text-white md:text-2xl xxs:text-base font-normal'
            >
              Cashback
            </li>
            <li
              id='Lists'
              className='text-white md:text-2xl xxs:text-base font-normal'
            >
              Carga seca
            </li>
            <li
              id='Lists'
              className='text-white md:text-2xl xxs:text-base font-normal'
            >
              Material biológico
            </li>
            <li
              id='Lists'
              className='text-white md:text-2xl xxs:text-base font-normal'
            >
              + 12 mil caminhões
            </li>
          </div>
        </div>
      </div>
      <div className='h-auto w-full bg-neutral-200 flex justify-center items-center flex-col gap-32 p-6 pt-20'>
        <span
          id='TitleLetter'
          className='md:text-5xl xxs:text-xl font-black md:text-start xxs:text-center '
        >
          Orientação Estratégica
        </span>
        <div className='flex flex-col gap-10 items-center justify-center'>
          <div className='flex flex-col gap-5 items-center justify-center'>
            <span id='Lists' className='md:text-4xl xxs:text-lg font-bold'>
              Missão
            </span>
            <div className='flex flex-col items-center gap-4' id='Paragraph'>
              <span className='md:w-1/2 xxs:w-full md:text-lg xxs:text-sm text-center '>
                A empresa tem como objetivo primordial otimizar toda a cadeia de
                suprimentos, desde a coleta e armazenamento até a distribuição
                dos produtos, garantindo que cada etapa do processo seja
                executada com excelência.
              </span>
              <span className='md:w-1/2 xxs:w-full md:text-lg xxs:text-sm text-center h-full'>
                Para isso, ela conta com uma equipe altamente qualificada,
                tecnologia de ponta e uma ampla rede de parceiros logísticos,
                que permitem a agilidade nas operações e a maximização da
                satisfação dos clientes.
              </span>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-5 items-center justify-center'>
          <span id='Lists' className='md:text-4xl xxs:text-lg font-bold'>
            Visão
          </span>
          <div className='flex'>
            <img
              src='/AboutUs/OrientacaoEstrategica.png'
              className='xxs:hidden md:flex w-1/3 h-80 object-contain'
              alt=''
              id='Img'
            />
            <div
              className='flex flex-col  justify-center w-full gap-5 '
              id='Paragraph'
            >
              <span className='md:text-lg xxs:text-sm '>
                Liderar a revolução da logística inteligente, redefinindo a
                forma como as pessoas e mercadorias são conectadas globalmente.
              </span>
              <div className='flex flex-col'>
                <span className='italic md:text-lg xxs:text-sm '>
                  Buscamos ser reconhecidos como a principal plataforma que une
                  motoristas confiáveis a pessoas e empresas que precisam
                  realizar fretes de maneira eficiente, segura e sustentável.{' '}
                </span>
                <span className='not-italic md:text-lg xxs:text-sm '>
                  {' '}
                  Ao integrar tecnologia de ponta, dados precisos e uma
                  abordagem centrada no cliente, aspiramos criar um impacto
                  positivo nas vidas das pessoas, otimizar a utilização de
                  recursos e contribuir para um mundo mais conectado e
                  interdependente.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-5 items-center justify-center'>
          <span id='Lists' className='md:text-4xl xxs:text-lg font-bold'>
            Valores
          </span>
          <span id='Paragraph'>O que move nossa empresa é você!</span>
          <div className='flex flex-col md:gap-10 xxs:gap-5 items-center justify-center'>
            <div
              id='Lists'
              className='flex xxs:flex-col md:flex-row  items-center justify-center w-full gap-5 '
            >
              <CardGuidance
                icon={<FaHandshake size={30} className='invert' />}
                title={'Compromisso'}
                text={
                  'Nossa empresa reconhece a importância do cumprimento de prazose da garantia de satisfação dos clientes em todas as etapas do processo logístico.'
                }
              />

              <CardGuidance
                icon={<RiMedalFill size={30} className='invert' />}
                title={'Excelência'}
                text={
                  'Investimos constantemente em tecnologia, rastreamento em tempo real e sistemas avançados para garantir precisão e segurança em toda entrega.'
                }
              />

              <CardGuidance
                icon={<HiUserGroup size={30} className='invert' />}
                title={'Parcerias estratégicas'}
                text={
                  'Estamos sempre nos fortalecendo com ajuda de nossos parceiros, com isso oferecemos sempre o melhor serviço com os melhores profissionais do mercado!'
                }
              />
            </div>
            <div
              id='Lists'
              className='flex xxs:flex-col md:flex-row items-center justify-center w-full gap-5 pb-20'
            >
              <CardGuidance
                icon={<FaRecycle size={30} className='invert' />}
                title={'Sustentabilidade'}
                text={
                  'Entre nossas ações envolvidas estão a reutilização de materiais que seriam descartados na natureza para produção de mobília sustentável.'
                }
              />
              <CardGuidance
                icon={<FaCity size={30} className='invert' />}
                title={'Responsabilidade Social'}
                text={
                  'Nosso compromisso para com a comunidade é constante, investimos constantemente em projetos sociais e zelamos pelo bem estar de todos.'
                }
              />
            </div>
            <div className='flex md:w-1/3 xxs:w-full gap-5 items-center justify-center pb-10'>
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
        </div>
      </div>
    </div>
  );
};

export default index;
