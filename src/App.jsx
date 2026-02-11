import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Jerry from "./pages/Jerry";
import Ecosystem from "./pages/Ecosystem";
import Experience from "./pages/Experience";
import Mission from "./pages/Mission";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jerry" element={<Jerry />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/mission" element={<Mission />} />
      </Routes>
    </Router>
  );
}

export default App;