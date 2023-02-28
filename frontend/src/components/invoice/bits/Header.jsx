import React from "react";

const Header = (props) => {
  return (
    <div className="left">
      <h1 className="md:text-5xl font-500 text-2xl">Invoices</h1>
      <p className="text-sm text-gray-300 font-[200]">
        There are {props.count} total invoices
      </p>
    </div>
  );
};

export default Header;
