import React from "react";

const DropDown = (props) => {
  return (
    <div className="w-44 h-[125px] bg-[#1F2139] absolute z-10 drop-shadow-2xl rounded-lg p-5 content">
      <div className="">
        <ul>
          <li className="flex justify-items-center gap-2 place-items-center text-[15px]">
            <label class="custom-checkbox">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Paid
            </label>
          </li>
          <li className="flex justify-items-center gap-2 place-items-center text-[15px]">
            <label class="custom-checkbox">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Paid
            </label>
          </li>
          <li className="flex justify-items-center gap-2 place-items-center text-[15px]">
            <label class="custom-checkbox">
              <input type="checkbox" value="pending" />
              <span class="checkmark"></span>
              Pending
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
