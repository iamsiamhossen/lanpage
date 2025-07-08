import React from "react";
import "./App.css";  // ✅ Correct path (inside src)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // ✅ Correct path (inside src/pages)  // ✅ Correct path (inside src/pages)
import ApplyPage from "./components/common/ApplyPage";
import Home from "./components/layout/Herosection";  // ✅ Correct path (inside src/components/layout)
import Footer from "./components/common/Footer";  // ✅ Correct path (inside src/components/common)



function App  ()  {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplyPage />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
