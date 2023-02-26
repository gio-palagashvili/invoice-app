import React from "react";
import InputMain from "./Inputs/InputMain";

const ItemInputs = (props) => {
  return (
    <div className="flex flex-col sm:flex-row w-full sm:justify-between">
      <div className="w-full mt-5 sm:mt-3 sm:1/3">
        <InputMain h1="item name" name="itemName" change={props.change} />
      </div>
      <div className="flex gap-5 mt-3 sm:ml-5">
        <div className="w-1/6 sm:w-1/3">
          <InputMain h1="Qty" name="qty" change={props.change} />
        </div>
        <div className="w-1/3">
          <InputMain h1="price" name="price" change={props.change} />
        </div>
        <div className="w-1/3">
          <h1 className="capitalize font-[100] text-gray-300 text-[15px] mb-1">
            total
          </h1>
          <input
            type="text"
            defaultValue={0}
            className="bg-transparent w-[100%] p-3 h-12 border-none rounded-[4px] text-gray-300"
          />
        </div>
        <div className="w-[10%] flex justify-center place-items-center">
          <button className="p-10" onClick={props.remove}>
            <svg
              width="13"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#888EB0] hover:fill-[#5f637e]"
            >
              <path
                d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                fillRule="nonzero"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemInputs;
