import React from "react";
import logo from "../assets/LinkedIn_logo_initials.png";
import ButtonRoundedFull from "../components/invoice/bits/buttons/ButtonRoundedFull";
import InputMain from "../components/invoice/bits/Inputs/InputMain";
import Hero from "../components/nav/login/Hero";
import LogninNav from "../components/nav/login/LoginNav";

const login = () => {
  return (
    <div className="w-[90%] h-[90vh] m-auto mt-5 flex flex-col gap-12 font-sans">
      <LogninNav image={logo} />
      <div className="flex flex-col">
        <Hero />
        <div className="mt-4 md:w-[500px] lg:w-[40%]">
          <InputMain h1="username" name="username" />
          <div className="mt-2">
            <InputMain h1="password" name="password" />
          </div>
          <button className="mt-4 w-full bg-[#775EF1] p-3 rounded-md hover:bg-[#6751d4] duration-150">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default login;
