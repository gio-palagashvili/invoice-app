import React from "react";

const DropDown = (props) => {
  return (
    <div className="w-44 h-[125px] bg-[#1F2139] absolute z-[9] drop-shadow-2xl rounded-lg p-5 content">
      <div>
        <ul className="capitalize flex flex-col">
          <button
            onChange={(e) => {
              props.clicked("paid");
            }}
          >
            <li className="flex justify-items-center gap-2 place-items-center">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <p className="text-sm">paid</p>
              </label>
            </li>
          </button>
          <button
            onChange={(e) => {
              props.clicked("pending");
            }}
          >
            <li className="flex justify-items-center gap-2 place-items-center">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <p className="text-sm">pending</p>
              </label>
            </li>
          </button>
          <button
            onChange={(e) => {
              props.clicked("draft");
            }}
          >
            <li className="flex justify-items-center gap-2 place-items-center">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <p className="text-sm">draft</p>
              </label>
            </li>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
