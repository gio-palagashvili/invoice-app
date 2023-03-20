import React, { useState, useEffect } from "react";
import Home from "./pages/home";
import Invoice from "./pages/invoice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import protectedRoutes from "./components/utils/protectedRoutes";
import { AppContext } from "./components/context/AppContext";
import axios from "axios";
import Login from "./pages/login";
import ProtectedRoutes from "./components/utils/ProtectedRoutes";
import Register from "./pages/register";

const App = () => {
  const [invoices, setInvoices] = useState([]);
  const [user, setUser] = useState(null);

  const removeInvoice = (id) => {
    // let newArr = invoices;
    // newArr.splice(
    //   invoices.findIndex((invoice) => invoice.id == id),
    //   1
    // );
    // setInvoices(newArr);
  };

  useEffect(() => {
    let userToken = localStorage.getItem("user");
    if (userToken) {
      axios
        .post(
          "http://localhost:5500/user/verify",
          {},
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        )
        .then((response) => {
          setUser(response.data.token);
        })
        .catch((error) => {
          setUser(null);
          localStorage.removeItem("user");
          console.log("token expired or invalid");
        });
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        invoices,
        setInvoices,
        removeInvoice,
        user,
        setUser,
      }}
    >
      <Router>
        <Routes>
          {user ? (
            <>
              <Route path="/invoice/:id" element={<Invoice />} />
              <Route path="/*" element={<Home />} />
            </>
          ) : (
            <>
              <Route path="/register" element={<Register />} />
              <Route path="/*" element={<Login />} />
            </>
          )}
        </Routes>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
