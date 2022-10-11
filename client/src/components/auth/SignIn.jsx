import React from "react";
import InputBox from "./InputBox";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center pt-14 w-full h-full ">
      <div className="w-[720px] h-full bg-slate-500 flex justify-center items-center">
        <div className="flex justify-center items-center flex-col">
          <div className="text-3xl font-bold">Sign In</div>
          <form className="mt-10">
            <InputBox type="email" placeholder="Email" />
            <InputBox type="password" placeholder="password" />
            <button
              className="w-full bg-red-50 rounded-md border-2 hover:border-black hover:border-collapse"
              disabled
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
