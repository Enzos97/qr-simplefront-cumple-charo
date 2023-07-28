import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Star from './stars/Star.jsx';

const Counter = () => {
  const [count, setCount] = useState(3);

  const explosion = useSpring({
    from: { scale: 0 },
    to: async (next) => {
      await next({ scale: 8 });
      await next({ scale: 6.5 });
    },
  });
  const explosionH = useSpring({
    from: { scale: 0 },
    to: async (next) => {
      await next({ scale: 1.5 });
      await next({ scale: 0.8 });
    },
  });
  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [count]);

  return (
    <div>
      {count > 0 && (
        <div className="h-max h-screen w-screen flex items-center justify-center">
          <animated.div style={explosion}>
            <Star />
          </animated.div>
          <animated.h1
            className="text-6xl p-6 rounded-full absolute"
            style={explosionH}
          >
            {count}
          </animated.h1>
        </div>
      )}
    </div>
  );
};


export default Counter;