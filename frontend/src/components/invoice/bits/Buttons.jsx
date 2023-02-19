import React from "react";

const Buttons = () => {
  return (
    <div className="flex place-items-center w-1/3 gap-2">
      <button className="p-3 ml-auto bg-[#252945] text-sm rounded-full w-[90px]">
        Edit
      </button>
      <button className="p-3 bg-red-500 text-sm rounded-full w-[90px]">
        Delete
      </button>
    </div>
  );
};

export default Buttons;
