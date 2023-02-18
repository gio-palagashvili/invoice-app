import React from "react";
import StatusButton from "./bits/StatusButton";
import rightArrow from "../../assets/right_arrow.svg";

const Invoice = (props) => {
  return (
    <div
      className="invoice w-full flex bg-[#1F2139] h-20 rounded-lg cursor-pointer p-3 hover:border-[#7C5DF9]
     border-transparent border-[1px] transition-all duration-500 ease-in-out"
    >
      <div className="l flex w-full">
        <div className="flex gap-5 w-full">
          <div className="flex place-items-center">
            <p className="text-sm">
              <span className="text-[#7E88C3]">#</span>
              {props.id}
            </p>
          </div>
          <div className="flex justify-center place-items-center gap-10">
            <p className="text-sm font-[200]">{props.due}</p>
            <p className="capitalize font-[200]">{props.name}</p>
          </div>
        </div>
      </div>
      <div className="r flex ml-auto gap-10 place-items-center justify-center">
        <h1 className="text-xl">${props.amount}</h1>
        <div className="flex gap-5">
          <StatusButton status={props.status} />
          <img src={rightArrow} alt="" className="self-center" />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
