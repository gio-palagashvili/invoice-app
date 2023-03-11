import React from "react";

const LoginNav = (props) => {
  return (
    <nav>
      {/* temp linkedin logo */}
      <div className="flex place-items-center gap-2">
        <img
          src={props.image}
          alt=""
          className="object-contain self-center w-10"
        />
        <h1 className="text-2xl self-end">Invoice.io</h1>
      </div>
    </nav>
  );
};

export default LoginNav;
