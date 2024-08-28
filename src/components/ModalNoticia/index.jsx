/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/no-anonymous-default-export */
import * as Dialog from '@radix-ui/react-dialog';

// eslint-disable-next-line react/display-name
export default ({ item }) => (
  <Dialog.Portal>
    <Dialog.Overlay className='bg-black/20 fixed inset-0' />
    <Dialog.Content className='flex flex-col w-2/3 h-3/4 overflow-y-auto rounded-lg bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-start'>
      <div className='flex flex-col h-60 w-full bg-black sticky -top-0 -translate-y-1 justify-start shadow-lg shadow-neutral-400 rounded-b-lg'>
        <img
          className='w-full h-full object-cover opacity-50 rounded-b-lg'
          src={item.imageUrl}
          alt=''
          draggable='false'
        />
      </div>
      <div className='flex flex-col p-4 gap-4 '>
        <p className='font-black text-2xl'>{item.title}</p>
        <p className='font-semibold text-base text-black/60'>{item.subtitle}</p>
        <p className='font-semibold text-base text-black/60 whitespace-break-spaces'>
          {item.description}
        </p>
      </div>
      <Dialog.Close />
    </Dialog.Content>
  </Dialog.Portal>
);
