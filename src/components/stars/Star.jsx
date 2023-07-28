import React from 'react';

const Star = ({ style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="yellow"
      width="24"
      height="24"
      style={style}
    >
      <path d="M12 2l2.58 7.88h6.65l-5.36 4.09 2.58 7.88-6.71-5.05-6.71 5.05 2.58-7.88-5.36-4.09h6.65z" />
    </svg>
  );
};

export default Star;