import React, { useState, useContext, useRef, useEffect } from "react";
import Header from "./bits/Header";
import PlusButton from "./bits/buttons/PlusButton";
import Invoice from "./Invoice";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FilterButton from "./bits/buttons/FilterButton";
import { AppContext } from "../context/AppContext";
import AddInvoice from "./AddInvoice";

const Invoices = () => {
  const { invoices } = useContext(AppContext);
  const [filter, setFilter] = useState("");

  const handleClick = (name) => {
    if (filter == name) {
      setFilter("");
    } else {
      setFilter(name);
    }
  };

  return (
    <>
      <AddInvoice />
      <div
        className="flex flex-col border-1 w-full m-auto lg:w-[60%] lg:place-items-center lg:p-12 gap-10 p-3 lg:mt-10 mt-28
    md:w-[80%] lg:min-w-[800px]"
      >
        <div className="flex w-full">
          <Header />
          <div className="rigth ucapitalize ml-auto flex justify-center place-items-center gap-10">
            <div className="flex relative">
              <FilterButton clicked={handleClick} />
            </div>
            <PlusButton />
          </div>
        </div>
        <div className="invoices w-full flex flex-col gap-3 overflow-scroll h-[70vh]">
          {invoices.map((invoice, index) => {
            if (invoice.status === filter || filter.length == 0) {
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
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Invoices;
