import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";

class App extends Component {
  render() {
    return (
      //container is the most basic layout element in bootstrap
      //& required when using default grid system
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;
