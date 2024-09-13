import React from "react";
import { NavCommon } from "../common/NavCommon";
export const LoginPage = () => {
  return (
    <>
    <NavCommon></NavCommon>
      <div className="w-[280px] md:w-[400px] h-[380px] md:h-[500px] bg-gray-400 mx-auto mt-10 rounded-md">
            <h1 className="px-4 pt-8 text-2xl text-white font-bold">Login</h1>
            <form action="">
              <div className="mt-8 px-4">
              <label htmlFor="" className="text-white">Enter email address</label>
              <br />
              <input type="text" className="mt-3 w-full p-2 rounded-md" placeholder="Your ID"/> <br />
              </div>
              <div className="mt-8 px-4">
              <label htmlFor="" className="text-white">Enter Your Password</label>
              <br />
              <input type="text" className="mt-3 w-full p-2 rounded-md" placeholder="Password"/> <br />
              </div>
              <div className="mt-8 px-4">
                <button className="w-full p-2 bg-[#003459] rounded-md text-white font-semibold hover:bg-[#0b1f2e]">
                  Sign in
                </button>
              </div>
            </form>
      </div>
      </>
  );
};
