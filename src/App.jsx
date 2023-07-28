import React, { Suspense, useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const Ganaste = React.lazy(() => import('./components/ganaste/Ganaste'));
const Gracias = React.lazy(() => import('./components/perdiste/Gracias'));
import Counter from './components/counter';

const App = () => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {countdown > 0 ? (
        <div className='bg-pink-300 h-screen w-screen flex items-center justify-center'>
          {/* <h1 className='bg-pink-300 h-screen w-screen flex items-center justify-center'>{countdown}</h1> */}
          <Counter />
        </div>
      ) : (
        <Suspense fallback={<div className='h-max h-screen w-screen bg-pink-300'>Loading...</div>}>
          <BrowserRouter>
            <Routes>
              <Route path="/ganaste" element={<Ganaste />} />
              <Route path="/gracias" element={<Gracias />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      )}
    </div>
  );
};

export default App;