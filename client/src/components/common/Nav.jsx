import React from "react";
import { useAuth } from "../../context/AuthContext";

const Nav = () => {
  const { authState, signOut } = useAuth();

  return (
    <div className="absolute w-screen h-14 bg-slate-700 border-b-2 border-b-slate-400 ">
      <div className="flex h-full items-center justify-end">
        {authState ? (
          <div
            className="h-10 w-20 bg-slate-300 text-center py-[8px] rounded-lg border-white border-1 mr-10 hover:cursor-pointer"
            onClick={signOut}
          >
            sign out
          </div>
        ) : (
          <div className="h-10 w-20 bg-slate-300 text-center py-[8px] rounded-lg border-black border-1 mr-10 hover:cursor-pointer">
            sign In
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
