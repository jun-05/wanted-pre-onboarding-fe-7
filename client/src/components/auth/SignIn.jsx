import React, { useState } from "react";
import { useEffect } from "react";

import InputBox from "./InputBox";
import { validateAuthInput } from "./../../utils/inputValidation";

const SignIn = ({ signIn, signUp }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [infoValidation, setInfoValidation] = useState(false);

  const onInfoChange = (e) => {
    setUser({ ...user, [e.target.type]: e.target.value });
  };

  useEffect(() => {
    const validation = validateAuthInput(user.email, user.password);
    setInfoValidation(validation);
  }, [user.email, user.password]);

  const onSignIn = () => {
    signIn(user);
  };
  const onSignUp = () => {
    signUp(user);
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex justify-center items-center w-[720px] h-full bg-slate-500 min-h-screen">
        <div className="flex justify-center items-center flex-col">
          <div className="text-3xl font-bold">Sign In</div>
          <div className="mt-10">
            <InputBox
              type="email"
              placeholder="Email"
              onChange={onInfoChange}
            />
            <InputBox
              type="password"
              placeholder="password"
              onChange={onInfoChange}
            />
            <button
              className="w-full bg-slate-100 rounded-md border-2 hover:border-black hover:border-collapse disabled:cursor-not-allowed disabled:text-red-500"
              disabled={!infoValidation}
              onClick={onSignIn}
            >
              로그인
            </button>
            <div className="text-center my-1"> or </div>
            <button
              className="w-full bg-slate-100 rounded-md border-2 hover:border-black hover:border-collapse disabled:cursor-not-allowed disabled:text-red-500"
              disabled={!infoValidation}
              onClick={onSignUp}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
