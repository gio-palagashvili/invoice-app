import React from "react";

const FixedNavButtons = (props) => {
  return (
    <div className="fixed bottom-0 bg-[#141625] flex place-items-center p-4 w-[inherit] lg:w-[40rem] lg:pl-[5rem] md:w-[80%]">
      <div className="w-1/2">
        <button
          className="text-sm p-3 bg-[#252945] capitalize rounded-full 
                hover:bg-[#20233b] duration-200 w-[7rem]"
          onClick={props.discard}
        >
          discard
        </button>
      </div>
      <div className="w-full flex justify-end pr-3 gap-3 place-items-center">
        {props.draft ? (
          <button
            className="w-[9rem] text-sm p-3 bg-[#252945] capitalize rounded-full hover:bg-[#20233b] duration-200"
            onClick={props.draft}
          >
            save as a draft
          </button>
        ) : null}
        <button
          className="w-[7rem] p-3 text-sm bg-[#7C5DFA] capitalize rounded-full hover:bg-[#674cd4] duration-200"
          onClick={props.submit}
        >
          save
        </button>
      </div>
    </div>
  );
};

export default FixedNavButtons;
