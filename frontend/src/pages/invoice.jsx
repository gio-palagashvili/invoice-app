import React from "react";
import { Link, useParams } from "react-router-dom";

const Invoice = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default Invoice;
