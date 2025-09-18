import React from 'react';

const Button = ({ text }) => {
  return (
    <div>
      <a className="py-2 px-5 rounded-md ring-2 ring-blue-500 cursor-pointer hover:bg-blue-500 transition">
        {text}
      </a>
    </div>
  );
};

export default Button;
