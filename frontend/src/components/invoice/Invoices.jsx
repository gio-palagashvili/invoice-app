import React from "react";
import Header from "./bits/Header";
import PlusButton from "./bits/PlusButton";
import Invoice from "./Invoice";
import downIcon from "../../assets/down_arrow.svg";

const Invoices = () => {
  return (
    <div className="flex flex-col m-auto mt-7 lg:w-[60%] lg:place-items-center lg:p-12 gap-10 p-3">
      <div className="flex w-full">
        <Header />
        <div className="rigth capitalize ml-auto flex justify-center place-items-center gap-10">
          <h6 className="text-sm flex gap-4 justify-center place-items-center">
            filter by status
            <img src={downIcon} alt="" className="self-center" />
          </h6>
          <PlusButton />
        </div>
      </div>
      <div className="invoices w-full flex flex-col gap-3 overflow-scroll h-[70vh]">
        <Invoice
          id="RTX308"
          due="19 Mar 2023"
          name="alex grim"
          amount="3"
          status="paid"
        />
        <Invoice
          id="RTX308"
          due="19 Mar 2023"
          name="alex grim"
          amount="3"
          status="pending"
        />
        <Invoice
          id="RTX308"
          due="19 Mar 2023"
          name="alex grim"
          amount="3"
          status="pending"
        />
        <Invoice
          id="RTX308"
          due="19 Mar 2023"
          name="alex grim"
          amount="3"
          status="pending"
        />
        <Invoice
          id="RTX308"
          due="19 Mar 2023"
          name="alex grim"
          amount="3"
          status="pending"
        />
        <Invoice
          id="RTX308"
          due="19 Mar 2023"
          name="alex grim"
          amount="3"
          status="pending"
        />
        <Invoice
          id="RTX308"
          due="19 Mar 2023"
          name="alex grim"
          amount="3"
          status="pending"
        />
        <Invoice
          id="RTX308"
          due="19 Mar 2023"
          name="alex grim"
          amount="3"
          status="pending"
        />
        <Invoice
          id="RTX308"
          due="19 Mar 2023"
          name="alex grim"
          amount="3"
          status="pending"
        />
        <Invoice
          id="RTX308"
          due="19 Mar 2023"
          name="alex grim"
          amount="3"
          status="pending"
        />
        <Invoice
          id="RTX308"
          due="19 Mar 2023"
          name="alex grim"
          amount="3"
          status="pending"
        />
        <Invoice
          id="RTX308"
          due="19 Mar 2023"
          name="alex grim"
          amount="3"
          status="pending"
        />
      </div>
    </div>
  );
};

export default Invoices;
