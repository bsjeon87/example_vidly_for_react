import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import ProtectedRoute from "./components/common/protectedRoute";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      //container is the most basic layout element in bootstrap
      //& required when using default grid system
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm}></Route>
            <ProtectedRoute
              path="/login" //switch는 자식들을 검색하며 path속성을 비교.
              component={LoginForm}
            ></ProtectedRoute>
            <Route path="/movies/:id" component={MovieForm}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies"></Redirect>
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
