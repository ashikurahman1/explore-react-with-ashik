import React, { useState } from 'react';

const ShowHideToggle = () => {
  const [show, setShow] = useState(false);

  const handlerShowHide = () => {
    setShow(!show);
  };

  return (
    <div className="bg-white text-black p-6 shadow-md hover:translate-y-1 transition">
      <h4 className="text-2xl font-semibold text-blue-500">
        Show / Hide Text App
      </h4>
      <div className="flex flex-col justify-center items-center mt-10 space-y-4">
        <button
          className="btn btn-primary w-40 shadow-lg shadow-blue-500"
          onClick={handlerShowHide}
        >
          {show ? 'Hide' : 'Show'}
        </button>
        <h3 className="text-2xl mt-6">{show && 'Hello Guest 😍 '}</h3>
      </div>
    </div>
  );
};

export default ShowHideToggle;
