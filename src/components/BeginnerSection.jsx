import React from 'react';
import Counter from './BeginnerProjects/Counter App/Counter';
import ShowHideToggle from './BeginnerProjects/ShowHideToggle/ShowHideToggle';
import ToDoApp from './BeginnerProjects/ToDoApp/ToDoApp';
import FetchAPIData from './BeginnerProjects/FetchAPIData/FetchAPIData';

const BeginnerSection = () => {
  return (
    <div className="bg-gray-700 ">
      <div className="w-full lg:w-10/12 container p-5 mx-auto">
        <h2 className="text-3xl font-bold">Beginner Projects</h2>
        <div className="flex flex-col gap-10 my-8">
          <Counter />
          <ShowHideToggle />
          <ToDoApp />
          <FetchAPIData />
        </div>
      </div>
    </div>
  );
};

export default BeginnerSection;
