import React from "react";
import { motion } from "framer-motion";
import Nav from "../components/nav/Nav";
import InvoiceDetail from "../components/invoice/bits/InvoiceDetail";

const Invoice = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="z-1 flex flex-col lg:flex-row">
        <Nav />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full"
        >
          <InvoiceDetail />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Invoice;
