/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';

// Components
import Footer from '@/components/Footer';

// libs
import * as Dialog from '@radix-ui/react-dialog';
import ModalNoticia from '@/components/ModalNoticia';

// Utils
import spentTime from '@/utils/spentTime';
import LoadingForComponents from '@/components/Loading';

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://6i0go4dj.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27news%27%5D+%7B%0A++title%2C%0A++subtitle%2C%0A++description%2C%0A++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++createdAt%2C%0A%7D'
      );
      const json = await response.json();

      const data = json.result;
      const sortedData = data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setData(sortedData);
    }

    fetchData();
  }, []);

  return data.length > 0 ? (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-2 pt-2 justify-center items-center bg-neutral-50'>
        <div className='w-full flex items-center justify-between px-9'>
          <p className=' text-start md:text-8xl xxs:text-4xl font-black '>
            Notícias
          </p>
          <a className=' flex cursor-default items-center' href='/'>
            <p className=' cursor-pointer text-center px-5 py-1 bg-neutral-200 hover:bg-neutral-300 shadow-inner shadow-neutral-500 rounded font-bold md:text-2xl xxs:text-lg'>
              Voltar
            </p>
          </a>
        </div>
        <div className='flex md:flex-row xxs:flex-col w-full h-auto bg-neutral-50 p-10'>
          <div className='flex flex-col  items-center justify-center xxs:w-full md:w-2/3 p-2 gap-5'>
            {data.map((item, index) => (
              <>
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <div
                      key={index}
                      className='cursor-pointer hover:scale-101 duration-500  flex md:flex-row xxs:flex-row-reverse rounded-lg shadow-inner shadow-neutral-400 bg-neutral-200 hover:bg-neutral-300 w-full items-center md:justify-start xxs:justify-between gap-2 '
                    >
                      <div className=' overflow-hidden flex rounded-lg'>
                        <img
                          className='rounded-lg xxs:w-20 xxs:h-20 xxs:rounded md:rounded-none  md:w-64 md:h-64 object-cover transition-transform hover:scale-125 duration-500 '
                          src={item.imageUrl}
                          alt={item.title}
                          draggable
                        />
                      </div>
                      <div className='md:p-5 xxs:p-3 flex flex-col xxs:w-[60%] md:w-auto pl-5 md:justify-center '>
                        <p className='font-black md:text-2xl xxs:text-base '>
                          {item.title}
                        </p>
                        <p className='xxs:text-ellipsis  xxs:text-nowrap xxs:overflow-hidden md:text-wrap  font-semibold text-xl xxs:text-sm text-black/60'>
                          {item.subtitle}
                        </p>
                        <p>{spentTime(item.createdAt)}</p>
                      </div>
                    </div>
                  </Dialog.Trigger>
                  <ModalNoticia item={item} />
                </Dialog.Root>
              </>
            ))}
          </div>
          <div className='flex flex-col xxs:w-full md:w-1/3 h-auto p-2 gap-5'>
            {data.map(() => (
              <>
                <div className='flex w-full xxs:h-auto md:h-64 items-center justify-center shadow shadow-black'>
                  publicidade
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div className='flex justify-center items-center w-full h-screen bg-neutral-50'>
      <LoadingForComponents />
    </div>
  );
};

export default Blog;
