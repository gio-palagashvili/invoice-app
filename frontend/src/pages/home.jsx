import React from "react";
import Nav from "../components/nav/Nav";
import { motion } from "framer-motion";
import Invoices from "../components/invoice/Invoices";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="z-1 flex flex-col lg:flex-row">
        <Nav />
        <Invoices />
      </div>
    </motion.div>
  );
};

export default Home;
