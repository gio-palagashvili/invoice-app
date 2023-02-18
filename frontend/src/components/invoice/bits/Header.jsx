import React from "react";

const Header = (props) => {
  return (
    <div className="left">
      <h1 className="text-5xl font-500">Invoices</h1>
      <p className="text-sm text-gray-300 font-[200]">
        There are 6 total invoices
      </p>
    </div>
  );
};

export default Header;
