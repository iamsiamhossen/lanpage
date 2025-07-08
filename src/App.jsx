import React from "react";
import "./App.css";  // ✅ Correct path (inside src)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";  // ✅ Correct path (inside src/pages)
import NotFound from "./pages/notfound";  // ✅ Correct path (inside src/pages)
import ApplyPage from "./components/common/ApplyPage";
// import Header from "./components/common/header";


function App  ()  {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/apply" element={<ApplyPage />} />

      </Routes>
    </Router>
  );
};

export default App;
