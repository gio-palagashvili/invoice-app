import React, { useState, useEffect } from "react";
import Home from "./pages/home";
import Invoice from "./pages/invoice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import protectedRoutes from "./components/utils/protectedRoutes";
import { AppContext } from "./components/context/AppContext";
import axios from "axios";
import Login from "./pages/login";

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
        { itemName: "no", qty: 2, price: 2, itemTotalPrice: 4 },
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
  const [user, setUser] = useState(null);

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
  useEffect(() => {
    let userToken = localStorage.getItem("user");
    if (userToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
      axios
        .post("http://localhost:5500/user/verify")
        .then((x) => {
          setUser(x.data.token);
        })
        .catch((err) => {
          setUser(null);
        });
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        invoices,
        setInvoices,
        setInvoiceStatus,
        removeInvoice,
        user,
        setUser,
      }}
    >
      <Router>
        {user ? (
          <Routes>
            <Route path="/invoice/:id" element={<Invoice />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/*" element={<Login />} />
          </Routes>
        )}
      </Router>
    </AppContext.Provider>
  );
};

export default App;
