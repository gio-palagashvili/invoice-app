import React from "react";

const Address = (props) => {
  return (
    <div className="text-sm flex flex-col font-[50] md:ml-auto">
      <span className="text-gray-300 w-[150px]">{props.billingAddress}</span>
      <span className="text-gray-300">{props.city}</span>
      <span className="text-gray-300">{props.postalCode}</span>
      <span className="text-gray-300">{props.country}</span>
    </div>
  );
};

export default Address;
