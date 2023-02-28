import React from "react";
import logo from "../../assets/logo.svg";

const Nav = (props) => {
  return (
    <div className="bg-[#1F2139] w-full h-[5rem] rounded-tr-xl flex lg:w-[6rem] lg:h-[100vh] lg:flex-col lg:rounded-br-3xl lg:rounded-tr-3xl fixed z-30">
      <div className="logo bg-[#7C5DFA] h-full rounded-tr-3xl rounded-br-3xl flex justify-center w-[80px] lg:flex-col lg:w-full lg:h-[90px]">
        <img src={logo} alt="" className="w-[31px] h-[28px] self-center" />
      </div>
      <div className="flex place-content-center ml-auto gap-5 lg:mt-auto lg:flex-col lg:ml-[0] lg-h-[10rem] h-min-[1200px]">
        <div
          className="border-l-[0.5px] border-[#494E6E] flex place-items-center w-[5.5rem] justify-center lg:border-t-[0.5px]
        lg:w-full h-20
        "
        >
          <span className="dot self-center bg-gray-900"></span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
