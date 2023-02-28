import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import downIcon from "../../../../assets/down_arrow.svg";
import DropDown from "../DropDown";

const FilterButton = (props) => {
  const [isOpenDd, setDd] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setDd(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref]);

  return (
    <div ref={ref}>
      <h6
        className="text-sm flex gap-4 justify-center place-items-center cursor-pointer before:content-['filter'] md:before:content-['filter_by_status']"
        onClick={() => setDd((current) => !current)}
      >
        <motion.div
          animate={{
            rotate: isOpenDd ? 0 : 180,
          }}
          transition={{ duration: 0.3 }}
        >
          <img src={downIcon} alt="" className="self-center rotate-180" />
        </motion.div>
      </h6>
      {isOpenDd ? <DropDown clicked={props.clicked} /> : ""}
    </div>
  );
};

export default FilterButton;
