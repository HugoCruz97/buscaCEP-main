import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
