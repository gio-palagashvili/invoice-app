import React from "react";

const DropDown = (props) => {
  return (
    <div className="w-44 h-[125px] bg-[#1F2139] absolute z-10 drop-shadow-2xl rounded-lg p-5 content">
      <div>
        <ul className="capitalize flex flex-col">
          <li className="flex justify-items-center gap-2 place-items-center ">
            <label class="custom-checkbox">
              <input type="checkbox" />
              <span class="checkmark"></span>
              <p className="text-sm">paid</p>
            </label>
          </li>
          <li className="flex justify-items-center gap-2 place-items-center ">
            <label class="custom-checkbox">
              <input type="checkbox" />
              <span class="checkmark"></span>
              <p className="text-sm">pending</p>
            </label>
          </li>
          <li className="flex justify-items-center gap-2 place-items-center ">
            <label class="custom-checkbox">
              <input type="checkbox" />
              <span class="checkmark"></span>
              <p className="text-sm">draft</p>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
