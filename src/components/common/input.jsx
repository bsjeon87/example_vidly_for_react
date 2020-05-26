import React, { Component } from "react";
import getValue from "../../services/httpService";

console.log("reloading");
let test_val = getValue();

const Input = ({ name, label, error, ...rest }) => {
  console.log("input comp rend", test_val);
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        //초기값.(value)
        {...rest}
        id={name}
        name={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
