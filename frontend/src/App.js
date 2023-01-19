import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORT COMPONENTS
import Home from "./components/home/Home";
import LoginContainer from "./styles/components/login/LoginContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
