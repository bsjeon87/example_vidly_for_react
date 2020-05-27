import { Route } from "react-router-dom";
import React, { Component } from "react";

//const ProtectedRoute = (props) => {
const ProtectedRoute = ({ component: Component, ...rest }) => {
  //console.log("log pr", path);
  // console.log("prop", props);
  console.log("log pr", { ...rest });

  return (
    <Route
      {...rest} // 부모인  <Switch>에서 전달하는 인자. path가 아닌 location이라는 오브젝트가 포함됨(오브젝트 내에 path, url...가 별도존재)
      render={(props) => {
        console.log("props2", props); //props는 route 컴포넌트에서 render호출시 전달하는 인자

        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
