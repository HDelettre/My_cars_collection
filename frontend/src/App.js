import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORT COMPONENTS
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
