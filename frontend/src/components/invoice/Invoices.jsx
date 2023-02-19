import React, { useState, useContext } from "react";
import Header from "./bits/Header";
import PlusButton from "./bits/PlusButton";
import Invoice from "./Invoice";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FilterButton from "./bits/FilterButton";
import { AppContext } from "../context/AppContext";

const Invoices = () => {
  const { invoices, setInvoices } = useContext(AppContext);

  return (
    <div
      className="flex flex-col border-1 w-full m-auto mt-7 lg:w-[60%] lg:place-items-center lg:p-12 gap-10 p-3 
    md:w-[80%] lg:min-w-[800px]"
    >
      <div className="flex w-full">
        <Header />
        <div className="rigth capitalize ml-auto flex justify-center place-items-center gap-10">
          <div className="flex relative">
            <FilterButton />
          </div>
          <PlusButton />
        </div>
      </div>
      <div className="invoices w-full flex flex-col gap-3 overflow-scroll h-[70vh]">
        {invoices.map((invoice, index) => {
          return (
            <motion.div
              initial={{ y: "50%" }}
              key={index}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 + index / 2 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Link to={"invoice/RTX3080"}>
                  <Invoice
                    id={invoice.id}
                    due={invoice.due}
                    name={invoice.clientName}
                    amount={invoice.total}
                    status={invoice.status}
                  />
                </Link>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Invoices;
