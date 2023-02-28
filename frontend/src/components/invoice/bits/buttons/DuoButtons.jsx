import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DuoButtons = (props) => {
  const navigate = useNavigate();
  const clicked = () => {
    props.remove();
    navigate("../");
  };

  return (
    <div className="flex place-items-center w-full gap-1 sm:w-1/2 ml-auto">
      <button className="ml-auto p-3 bg-[#252945] text-sm rounded-full w-1/3 hover:bg-[#151728] duration-200 ">
        Edit
      </button>
      <button
        className="p-3 bg-red-500 text-sm rounded-full w-1/3 hover:bg-red-800 duration-200"
        onClick={clicked}
      >
        Delete
      </button>
      {props.status != "paid" ? (
        <button
          className="p-3 bg-[#7C5DFA] md:text-[10px] sm:text-xs rounded-full md:w-[120px] capitalize 
          duration-200 hover:bg-[#694dd8] w-1/2 sm:p-4"
          onClick={props.paid}
        >
          mark as paid
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default DuoButtons;
