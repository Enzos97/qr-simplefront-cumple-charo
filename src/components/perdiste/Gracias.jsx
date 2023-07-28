import React, { useEffect, useState } from 'react';

const Gracias = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 3400);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='bg-image w-screen h-screen flex items-center justify-center bg-pink-300 animate-rotate-y animate-once'>
        <div className={`w-64 justify-center justify-items-center text-center justify-self-center bg-pink-300 rounded-lg border-4 border-pink-50 animate-jump-in animate-thrice animate-duration-1000 ${showAnimation ? 'transition duration-700 opacity-75 hover:opacity-100' : 'opacity-100'}`}>
            <p className='text-lg  font-semibold'>Gracias por compartir conmigo éste dia🎉</p>
            <h1 className='text-xl animate-once'>Charo 💕</h1>
        </div>
    </div>
  );
};

export default Gracias;