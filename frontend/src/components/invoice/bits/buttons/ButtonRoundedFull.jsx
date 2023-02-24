import React from "react";

const ButtonRoundedFull = (props) => {
  return (
    <button
      className="w-full bg-[#252945] capitalize p-3 rounded-full hover:bg-[#20233b] duration-200"
      onClick={props.clicked}
    >
      {props.text}
    </button>
  );
};

export default ButtonRoundedFull;
