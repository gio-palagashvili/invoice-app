import React, { useContext } from "react";
import logo from "../../assets/logo.svg";
import { AppContext } from "../context/AppContext";

const Nav = (props) => {
  const { setUser } = useContext(AppContext);
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
          <svg
            className="cursor-pointer"
            onClick={() => setUser(null)}
            stroke="#5a6089"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Nav;
