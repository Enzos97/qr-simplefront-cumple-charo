import React from 'react';

const Gracias = () => {
  return (
    <div className='bg-image w-screen h-screen flex items-center justify-center bg-pink-300 animate-rotate-y animate-once'>
        <div className='w-80 justify-center justify-items-center text-center justify-self-center bg-pink-300 animate-jump-in animate-thrice animate-duration-1000 rounded-lg border-4 border-pink-50'>
            <h1 className='text-4xl animate-once'>Gracias por venir!</h1>
            <p className='text-lg'>Esperamos que hayas disfrutado tu visita.</p>
        </div>
    </div>
  );
};

export default Gracias;