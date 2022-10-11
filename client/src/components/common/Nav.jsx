import React from "react";

const Nav = () => {
  return (
    <div className="absolute w-screen h-14 bg-slate-700 border-b-2 border-b-slate-400 ">
      <div className="flex h-full items-center justify-end">
        <div className="h-10 w-10 mr-10 rounded-full bg-gray-200 border-1 hover:cursor-pointer"></div>
        <div className="h-10 w-20 bg-slate-300 text-center py-[8px] rounded-lg border-black border-1 mr-5 hover:cursor-pointer">
          sign In
        </div>
        <div className="h-10 w-20 bg-slate-300 text-center py-[8px] rounded-lg border-white border-1 mr-5 hover:cursor-pointer">
          sign Up
        </div>
      </div>
    </div>
  );
};

export default Nav;
