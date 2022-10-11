import React from "react";

const BaseBody = ({ children }) => {
  return (
    <div className="w-screen min-h-screen h-auto bg-slate-600 ">{children}</div>
  );
};

export default BaseBody;
