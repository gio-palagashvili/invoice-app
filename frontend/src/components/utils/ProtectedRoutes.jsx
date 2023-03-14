import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  let token = true;
  return token ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
