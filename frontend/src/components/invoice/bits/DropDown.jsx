import React from "react";

const DropDown = (props) => {
  return (
    <div className="w-44 h-[125px] bg-[#1F2139] absolute bottom-[60%] z-10 drop-shadow-2xl rounded-lg p-5">
      <div className="div">
        <ul>
          <li className="flex justify-items-center gap-2 place-items-center text-[15px]">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-4 accent-red-200"
            />
            Paid
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
