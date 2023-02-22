import React from "react";

const InputMain = (props) => {
  return (
    <>
      <h1 className="capitalize font-[100] text-gray-300 text-[15px] mb-1">
        {props.h1}
      </h1>
      <input
        type="text"
        className="bg-[#1F2139] border-[#252945] w-[100%] p-3 h-12 border-solid border-[1px] rounded-[4px]"
        style={{ ...props.style }}
        placeholder={props.place}
      />
    </>
  );
};

export default InputMain;
