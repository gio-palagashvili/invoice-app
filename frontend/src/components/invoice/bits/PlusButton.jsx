import React from "react";

const PlusButton = (props) => {
  return (
    <button className="flex gap-1 bg-[#7C5DFA] justify-center place-items-center rounded-full capitalize h-[45px] p-3">
      <span className="dot flex justify-center place-items-center bg-white scale-75">
        <p className="text-[#7C5DFA] text-3xl mt-[4px]">+</p>
      </span>
      <p className="text-sm">New invoice</p>
    </button>
  );
};

export default PlusButton;
