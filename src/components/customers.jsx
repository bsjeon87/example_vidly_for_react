import React, { Component } from "react";

const Customers = () => {
  localStorage.setItem("test", 3);
  window.location = "/";
  return <h1>Customers</h1>;
};

export default Customers;
