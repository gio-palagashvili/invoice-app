import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DuoButtons = (props) => {
  const navigate = useNavigate();
  const clicked = () => {
    props.remove();
    navigate("../");
  };

  return (
    <div className="flex place-items-center w-1/2 gap-2">
      <button className="p-3 ml-auto bg-[#252945] text-sm rounded-full w-[90px] hover:bg-[#151728] duration-200">
        Edit
      </button>
      <button
        className="p-3 bg-red-500 text-sm rounded-full w-[90px] hover:bg-red-800 duration-200"
        onClick={clicked}
      >
        Delete
      </button>
      {props.status != "paid" ? (
        <button
          className="p-3 bg-[#7C5DFA] text-sm rounded-full w-[120px] capitalize duration-200 hover:bg-[#694dd8]"
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
