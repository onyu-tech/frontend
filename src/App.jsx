import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jerry from "./pages/Jerry";
import Ecosystem from "./pages/Ecosystem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jerry" element={<Jerry />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
      </Routes>
    </Router>
  );
}

export default App;