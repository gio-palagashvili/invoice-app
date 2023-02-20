import React, { useState } from "react";
import { motion } from "framer-motion";
import downIcon from "../../../assets/down_arrow.svg";
import DropDown from "./DropDown";

const FilterButton = (props) => {
  const [isOpenDd, setDd] = useState(false);

  return (
    <>
      <h6
        className="text-sm flex gap-4 justify-center place-items-center cursor-pointer"
        onClick={() => setDd((current) => !current)}
      >
        filter by status
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
    </>
  );
};

export default FilterButton;
