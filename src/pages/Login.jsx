import React from "react";
import log from "../assets/log.jpg";
function Login() {
  return (
    <div className="flex items-center justify-center h-[100vh] w-full">
      <div className="h-[100vh] lg:w-[50%] md:w-[50%] sm:w-0">
        <img src={log} className="h-[100vh] object-cover" />
      </div>
      <div className="relative flex flex-col items-center justify-center xl:gap-5 lg:gap-5 md:gap-3 sm:gap-8   lg:right-0  lg:w-[50%] sm:w-[100%] lg:h-[100%] md:h-[100%] sm:h-[100%] bg-[#fbfafa] p-5 sm:p-0">
        <span className="items-center justify-center text-5xl text-indigo-700">
          Sign In
        </span>
        <input
          placeholder="Username..."
          type="text"
          className=" sm:flex border-solid border-2 border-x-indigo-600 w-[60%] text-2xl p-8 rounded-full outline-0 h-9"
        ></input>
        <input
          placeholder="Password..."
          type="text"
          className=" sm:flex w-[60%] p-8 border-solid border-2 border-x-indigo-600 text-2xl rounded-full outline-0 h-9"
        ></input>
        <button className="flex items-center justify-center  w-[60%] p-8 border-solid border-2 bg-[#367BF6] rounded-full outline-0 h-9 text-stone-50">
          <span className="text-2xl">Log In</span>
        </button>
        <span>-or-</span>
        <button className="flex items-center justify-center  w-[60%] p-8 border-solid border-2 border-x-indigo-900 bg-[#D85040] rounded-full outline-0 h-9 text-stone-50">
          <span className="text-2xl">Logın With Google</span>
        </button>
        <button className="flex items-center justify-center  w-[60%] p-8 border-solid border-2 border-x-indigo-500 bg-[#405993] rounded-full outline-0 h-9 text-stone-50">
          <span className="text-2xl">Logın With Facebook</span>
        </button>
        <button className="flex items-center justify-center  w-[60%] p-8 border-solid border-2 border-r-neutral-600 bg-[#4BA0EA] rounded-full outline-0 h-9 text-stone-50">
          <span className="text-2xl">Logın With Twitter</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
