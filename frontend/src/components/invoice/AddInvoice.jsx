import React, { useState } from "react";
import ButtonRoundedFull from "./bits/buttons/ButtonRoundedFull";
import InputMain from "./bits/Inputs/InputMain";
import ItemInputs from "./bits/ItemInputs";

const AddInvoice = () => {
  const today = new Date().toISOString().substring(0, 10);
  const handleDateChange = () => {};

  const [items, setItems] = useState([{}]);
  const [itemsA, setItemsA] = useState(1);

  const addItemInput = () => {
    setItemsA(itemsA + 1);
  };

  const divs = [];
  for (let i = 0; i < itemsA; i++) {
    divs.push(<ItemInputs key={i} />);
  }

  return (
    <div className="absolute w-full h-full z-10 flex bg-[#00000089]">
      <div
        className="w-full flex justify-center place-items-center bg-[#141625] pt-[5rem] lg:pt-0 md:rounded-tr-2xl lg:pl-[5rem]
      md:rounded-br-2xl sm:rounded-none md:w-[80%] md:pl-0 overflow-x-scroll lg:w-[45rem] overflow-y-scroll"
      >
        <div className="w-[80%] h-[90%] ">
          <h1 className="text-3xl">Create Invoice</h1>
          <div className="inputs flex flex-col gap-4">
            <h1 className="text-[#7C5DFA] mt-10">Bill from</h1>
            {/* input divs */}
            <div className="flex flex-col">
              <div className="flex flex-col gap-2">
                <h1 className="capitalize font-[100] text-gray-300 text-[15px]">
                  street address
                </h1>
                <input
                  type="text"
                  className="bg-[#1F2139] border-[#252945] w-full p-3 h-12 border-solid border-[1px] rounded-[4px]"
                />
              </div>
              <div className="block gap-2 mt-4 sm:flex">
                <div className="gap-2 flex justify-between w-full">
                  <div className="w-[90%] sm:w-[30%]">
                    <InputMain h1="city" />
                  </div>
                  <div className="w-[90%] sm:w-[30%]">
                    <InputMain h1="street address" />
                  </div>
                  <div className="hidden sm:block w-[120%] sm:w-[30%]">
                    <InputMain h1="country" />
                  </div>
                </div>
                <div className="w-full mt-5 sm:mt-0 sm:w-[30%] sm:hidden ml-auto">
                  <h1 className="capitalize font-[100] text-gray-300 text-[15px] mb-1">
                    country
                  </h1>
                  <input
                    type="text"
                    className="bg-[#1F2139] border-[#252945] w-[100%] p-3 h-12 border-solid border-[1px] rounded-[4px]"
                  />
                </div>
              </div>
            </div>
            {/* dates */}
            <h1 className="text-[#7C5DFA]">Bill from</h1>
            <div className="w-full">
              <InputMain h1="client's name" />
            </div>
            <div className="w-full">
              <InputMain h1="client's email" />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <h1 className="capitalize font-[100] text-gray-300 text-[15px] mb-1">
                  invoice date
                </h1>
                <input
                  defaultValue={today}
                  type="date"
                  className="bg-[#1F2139] border-[#252945] w-[100%] p-3 h-12 border-solid border-[1px] rounded-[4px]"
                />
              </div>
              <div className="w-1/2">
                <h1 className="capitalize font-[100] text-gray-300 text-[15px] mb-1">
                  payment terms
                </h1>
                <select
                  name=""
                  id=""
                  className="bg-[#1F2139] border-[#252945] w-[100%] p-3 h-12 border-solid border-[1px] rounded-[4px] font-[500]"
                >
                  <option value="30">Net 30 days</option>
                  <option value="14">Net 14 day</option>
                  <option value="7">Net 7 day</option>
                  <option value="1">Net 1 day</option>
                </select>
              </div>
            </div>
            <div className="w-full">
              <InputMain h1="Description" place="e.g Graphic Design Service" />
            </div>
            <div className="mt-5 relative pb-[10rem]">
              <h1 className="text-2xl">Item List</h1>
              <div className="flex flex-col gap-2">{divs}</div>
              <ButtonRoundedFull text="+ add new item" />
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 bg-[#141625] w-full h-[7rem] flex place-items-center p-4">
          <div className="w-1/2">
            <button className="text-sm p-3 bg-[#252945] capitalize rounded-full hover:bg-[#20233b] duration-200 w-[7rem]">
              discard
            </button>
          </div>
          <div className="w-full flex justify-end pr-3 gap-3 place-items-center">
            <button className="w-[9rem] text-sm p-3 bg-[#252945] capitalize rounded-full hover:bg-[#20233b] duration-200">
              save as a draft
            </button>
            <button className="w-[7rem] p-3 text-sm bg-[#7C5DFA] capitalize rounded-full hover:bg-[#674cd4] duration-200">
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInvoice;
