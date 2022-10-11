import React from "react";

const BaseBody = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-slate-600 min-w-[720px] ">
      {children}
    </div>
  );
};

export default BaseBody;
