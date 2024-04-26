import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./shared/components/header";
import Footer from "./shared/components/footer";
import CoreStock from "./features/core-stock/containers/CoreStock";
import Home from "./features/home/Home";
import AlphaIntelligence from "./features/alpha-intelligence/containers/AlphaIntelligence";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/core-stock/:timeSeries" element={<CoreStock />} />
          <Route path="/alpha-intelligence/:alphaFunction" element={<AlphaIntelligence />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
