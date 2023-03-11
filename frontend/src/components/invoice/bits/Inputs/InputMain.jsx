import React from "react";

const InputMain = (props) => {
  const errorStyleH1 = "capitalize font-[100] text-red-500 text-[15px] mb-1";
  const errorStyleInput =
    "bg-[#1F2139] border-red-500 w-[100%] p-3 h-12 border-solid border-[1px] rounded-[4px]";

  return (
    <>
      <h1
        className={"capitalize font-[100] text-gray-300 text-[15px] mb-1 flex"}
      >
        {props.h1}
        <span className="text-[12px] text-red-500 ml-auto">
          {props.errorMessage}
        </span>
      </h1>
      {props.value ? (
        <input
          type={props.name.includes("password") ? "password" : "text"}
          className={
            props.errorMessage
              ? errorStyleInput
              : "bg-[#1F2139] border-[#252945] w-[100%] p-3 h-12 border-solid border-[1px] rounded-[4px] font-[200] focus:border-[#8E74F8] duration-200"
          }
          style={{ ...props.style }}
          placeholder={props.place}
          value={props.value}
          name={props.name}
          onChange={props.change}
        />
      ) : (
        <input
          type={props.name.includes("password") ? "password" : "text"}
          className={
            props.errorMessage
              ? errorStyleInput
              : "bg-[#1F2139] border-[#252945] w-[100%] p-3 h-12 border-solid border-[1px] rounded-[4px]"
          }
          style={{ ...props.style }}
          placeholder={props.place}
          name={props.name}
          onChange={props.change}
        />
      )}
    </>
  );
};

export default InputMain;
