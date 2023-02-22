import React from "react";

const StatusButton = (props) => {
  switch (props.status) {
    case "pending":
      return (
        <button className="bg-[#ff91001f] p-3 custom text-sm flex justify-center place-items-center gap-2 text-[#FF8F00] font-[500]">
          <span className="h-[0.45rem] w-[0.45rem] rounded-full bg-[#FF8F00]"></span>
          Pending
        </button>
      );
    case "paid":
      return (
        <button className="bg-[#29b4861e] p-3 custom text-sm flex justify-center place-items-center gap-2 text-[#33D69F] font-[500]">
          <span className="h-[0.45rem] w-[0.45rem] rounded-full bg-[#33D69F]"></span>
          Paid
        </button>
      );
  }
};

export default StatusButton;
