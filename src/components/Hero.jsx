import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <div className="bg-base-200">
      <div className="hero py-20  w-full lg:w-10/12 container p-5 mx-auto">
        <div className="hero-content text-center">
          <div className=" space-y-4">
            <h1 className="text-5xl font-bold text-blue-500 animate-pulse">
              My React Learning Journey
            </h1>
            <p className="py-6 max-w-xl">
              These projects showcase my progress as I learn React. Starting
              from basic apps like counters and toggles, to more advanced apps
              with routing and API fetching.
            </p>
            <Button text={'Get Started'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
