import React, { useContext } from "react";
import Nav from "../components/nav/Nav";
import { motion, AnimatePresence } from "framer-motion";
import Invoices from "../components/invoice/Invoices";

const Home = () => {
  return (
    <div className="z-1 flex flex-col ">
      <Nav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="z-1 flex flex-col lg:flex-col"
      >
        <Invoices />
      </motion.div>
    </div>
  );
};

export default Home;
