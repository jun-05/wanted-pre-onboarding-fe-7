import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";

import InputBox from "./InputBox";

const SignIn = ({ onSignIn, onSignUp }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [infoValidation, setInfoValidation] = useState(false);

  const validateInfo = useCallback(() => {
    const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    const passwordRegex = new RegExp(".{8,15}");

    const emailVal = emailRegex.test(user.email);
    const passwordVal = passwordRegex.test(user.password);

    return emailVal && passwordVal;
  }, [user]);

  const onInfoChange = (e) => {
    setUser({ ...user, [e.target.type]: e.target.value });
  };

  useEffect(() => {
    const validation = validateInfo();
    setInfoValidation(validation);
  }, [validateInfo]);

  const onClickSignIn = () => {
    onSignIn(user);
  };
  const onClickSignUp = () => {
    onSignUp(user);
  };

  return (
    <div className="flex justify-center items-center pt-14 w-full h-full ">
      <div className="w-[720px] h-full bg-slate-500 flex justify-center items-center">
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
              onClick={onClickSignIn}
            >
              로그인
            </button>
            <div className="text-center my-1"> or </div>
            <button
              className="w-full bg-slate-100 rounded-md border-2 hover:border-black hover:border-collapse disabled:cursor-not-allowed disabled:text-red-500"
              disabled={!infoValidation}
              onClick={onClickSignUp}
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
