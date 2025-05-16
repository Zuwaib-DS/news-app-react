import "./App.css";
import React, { Component } from "react";
import NewsList from "./components/NewsList";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {

    return (
      <>
        <Navbar />
        <NewsList />
      </>
    );
  }
}

export default App;
