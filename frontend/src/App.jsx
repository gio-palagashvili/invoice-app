import React, { useState } from "react";
import Home from "./pages/home";
import Invoice from "./pages/invoice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppContext } from "./components/context/AppContext";

const App = () => {
  const [invoices, setInvoices] = useState([
    {
      id: "RTX3080",
      billingAddress: "8 McCullough Dr, U126363",
      city: "New Castle",
      postCode: "19726",
      country: "United States",
      description: "asl",
      clientName: "Alex grim",
      clientEmail: "girgi1201@gnail.com",
      date: "Feb 14, 2023",
      due: "mar 14, 2023",
      status: "paid",
      itemList: [{ itemName: "thing", qty: 2, price: 2 }],
      total: 4,
    },
    {
      id: "ZTX2090",
      billingAddress: "8 McCullough Dr, U126363",
      city: "New Castle",
      postCode: "19726",
      country: "United States",
      description: "asl",
      clientName: "light yagami",
      clientEmail: "girgi1201@gnail.com",
      date: "Feb 14, 2023",
      due: "mar 14, 2023",
      status: "pending",
      itemList: [{ itemName: "lol", qty: 1, price: 2 }],
      total: 2,
    },
  ]);

  const setInvoiceStatus = (id, status) => {
    let invoicesTemp = invoices;
    invoicesTemp = invoicesTemp.map((invoice) => {
      if (invoice.id == id) {
        invoice.status = status;
      }
      return invoice;
    });
    setInvoices(invoicesTemp);
  };

  const removeInvoice = (id) => {
    let newArr = invoices;
    newArr.splice(
      invoices.findIndex((invoice) => invoice.id == id),
      1
    );
    setInvoices(newArr);
  };

  return (
    <AppContext.Provider
      value={{ invoices, setInvoices, setInvoiceStatus, removeInvoice }}
    >
      <Router>
        <Routes>
          <Route path="/invoice/:id" element={<Invoice />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
