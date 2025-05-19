import "./App.css";
import React, { Component } from "react";
import NewsList from "./components/NewsList";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        

        {/* Route Configuration */}
        <Routes>
          <Route path="/" element={<NewsList key={"home"} />} />
          <Route path="/business" element={<NewsList key={"business"} category={"business"} />} />
          <Route path="/entertainment" element={<NewsList key={"entertainment"} category={"entertainment"} />} />
          <Route path="/health" element={<NewsList key={"health"} category={"health"} />} />
          <Route path="/science" element={<NewsList key={"science"} category={"science"} />} />
          <Route path="/sports" element={<NewsList key={"sports"} category={"sports"} />} />
          <Route path="/technology" element={<NewsList key={"technology"} category={"technology"} />} />
        </Routes>
      </>
    );
  }
}

export default App;
