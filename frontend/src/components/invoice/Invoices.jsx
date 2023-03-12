import React, { useState, useContext, useRef, useEffect } from "react";
import Header from "./bits/Header";
import PlusButton from "./bits/buttons/PlusButton";
import Invoice from "./Invoice";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FilterButton from "./bits/buttons/FilterButton";
import { AppContext } from "../context/AppContext";
import AddInvoice from "./AddInvoice";
import axios from "axios";

const Invoices = () => {
  const { invoices, setInvoices, user } = useContext(AppContext);
  const [filter, setFilter] = useState("");
  const [invoiceOpen, setInvoiceOpen] = useState(false);
  const ref = useRef(null);

  const handleClick = (name) => {
    if (filter == name) {
      setFilter("");
    } else {
      setFilter(name);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setInvoiceOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref]);
  useEffect(() => {
    axios
      .get("http://localhost:5500/invoice/user")
      .then((res) => {
        setInvoices(res.data.invoices);
      })
      .catch((err) => {});
  }, [user]);
  return (
    <>
      <AddInvoice
        discard={() => setInvoiceOpen(false)}
        item={invoiceOpen}
        refr={ref}
      />
      <div
        className="flex flex-col border-1 w-full m-auto lg:w-[60%] lg:place-items-center lg:p-12 gap-10 p-3 lg:mt-10 mt-28
    md:w-[80%] lg:min-w-[800px]"
      >
        <div className="flex w-full">
          <Header count={invoices.length} />
          <div className="rigth ucapitalize ml-auto flex justify-center place-items-center gap-10">
            <div className="flex relative ml-auto">
              <FilterButton clicked={handleClick} />
            </div>
            <PlusButton clicked={() => setInvoiceOpen(true)} />
          </div>
        </div>
        <div className="invoices w-full flex flex-col gap-3 overflow-scroll h-[70vh]">
          {invoices.map((invoice, index) => {
            if (invoice.invoice_status === filter || filter.length == 0) {
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
                    <Link to={`invoice/${invoice.invoice_id}`}>
                      <Invoice
                        id={invoice.invoice_id}
                        due={invoice.due_date}
                        name={invoice.client_name}
                        amount={invoice.invoice_total}
                        status={invoice.invoice_status}
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
