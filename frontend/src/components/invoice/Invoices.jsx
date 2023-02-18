import React, { useState } from "react";
import Header from "./bits/Header";
import PlusButton from "./bits/PlusButton";
import Invoice from "./Invoice";
import downIcon from "../../assets/down_arrow.svg";
import { motion } from "framer-motion";
import DropDown from "./bits/DropDown";

const Invoices = () => {
  const [isOpenDd, setDd] = useState(false);
  return (
    <div
      className="flex flex-col border-1 w-full m-auto mt-7 lg:w-[60%] lg:place-items-center lg:p-12 gap-10 p-3 
    md:w-[80%] lg:min-w-[800px]"
    >
      <div className="flex w-full">
        <Header />
        <div className="rigth capitalize ml-auto flex justify-center place-items-center gap-10">
          <div className="flex relative">
            <h6
              className="text-sm flex gap-4 justify-center place-items-center cursor-pointer"
              onClick={() => setDd((current) => !current)}
            >
              filter by status
              <motion.div
                animate={{
                  rotate: isOpenDd ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <img src={downIcon} alt="" className="self-center rotate-180" />
              </motion.div>
            </h6>
            {isOpenDd ? <DropDown /> : ""}
          </div>
          <PlusButton />
        </div>
      </div>
      <div className="invoices w-full flex flex-col gap-3 overflow-scroll h-[70vh]">
        {[-1, 1, 3, 4, 0, 1, 0, 1, 1, 0, 1, 1].map((invoice, index) => {
          return (
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 + index / 2 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
              >
                <Invoice
                  id="RTX308"
                  due="19 Mar 2023"
                  name="alex grim"
                  amount="3"
                  status={invoice > 0 ? "pending" : "paid"}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Invoices;
