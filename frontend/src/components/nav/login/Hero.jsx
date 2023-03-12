import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 md:w-[500px] lg:w-full">
      <h1 className="w-full font-sans text-6xl font-semibold">
        This slogan makes perfect sense.
      </h1>
      <p className="w-full lg:w-[100%] text-[#c5bfbf] font-sans break-normal">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea explicabo
        odio.{" "}
        <a className="font-sans underline bold cursor-pointer" href="/register">
          To create an account click here
        </a>
      </p>
    </div>
  );
};

export default Hero;
