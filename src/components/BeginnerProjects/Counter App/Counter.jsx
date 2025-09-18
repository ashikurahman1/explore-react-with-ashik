import React, { useState } from 'react';
import { FiRefreshCcw } from 'react-icons/fi';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="bg-white text-black p-6 shadow-md hover:translate-y-1 transition">
      <h4 className="text-2xl font-semibold text-blue-500">Counter App</h4>
      <div className="text-center">
        <h3
          className={`text-9xl font-bold ${
            counter > 0 ? 'text-blue-500' : 'text-red-500'
          }`}
        >
          {counter}
        </h3>
        <div className="mt-8">
          <button
            className="btn w-20 btn-accent mr-10 text-lg"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            +
          </button>

          <button
            className="btn w-20 btn-error mr-10 text-lg"
            onClick={() => {
              setCounter(0);
            }}
          >
            {' '}
            <FiRefreshCcw />
          </button>
          <button
            className="btn w-20 btn-info text-lg"
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
