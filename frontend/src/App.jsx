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
      date: "2023-02-27",
      due: "2033-01-29",
      status: "paid",
      net: 30,
      itemList: [
        { itemName: "thing", qty: 2, price: 2, itemTotalPrice: 4 },
        { itemName: "thing", qty: 2, price: 2, itemTotalPrice: 4 },
      ],
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
      date: "2023-02-27",
      due: "2033-03-29",
      net: 1,
      status: "pending",
      itemList: [
        { itemName: "lol", qty: 1, price: 2, itemTotalPrice: 2.52111 },
      ],
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
      value={{
        invoices,
        setInvoices,
        setInvoiceStatus,
        removeInvoice,
      }}
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
