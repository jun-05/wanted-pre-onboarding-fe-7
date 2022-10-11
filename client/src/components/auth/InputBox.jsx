import React from "react";

const InputBox = ({ type, placeholder }) => {
  return (
    <div className="mb-2">
      <input
        type={type}
        placeholder={placeholder}
        className="border-2 w-60 border-slate-400 rounded-md pl-2"
      ></input>
    </div>
  );
};

export default InputBox;
