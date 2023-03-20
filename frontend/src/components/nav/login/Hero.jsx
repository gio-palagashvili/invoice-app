import React from "react";

const Hero = (props) => {
  return (
    <div className="flex flex-col gap-4 md:w-[500px] lg:w-full">
      <h1 className="w-full font-sans text-6xl font-semibold">
        {props.slogan}
      </h1>
      <p className="w-full lg:w-[100%] text-[#c5bfbf] font-sans break-normal">
        {props.p}{" "}
        <a
          className="font-sans underline bold cursor-pointer"
          href={props.href}
        >
          {props.a}
        </a>
      </p>
    </div>
  );
};

export default Hero;
