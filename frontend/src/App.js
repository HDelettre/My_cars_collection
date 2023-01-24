import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORT COMPONENTS
import Home from "./components/home/Home";
import LoginContainer from "./components/login/LoginContainer";
import AdminContainer from "./components/admin/AdminContainer";
import SeasonsContainer from "./components/menuSections/seasonsContainer";
import TeamsContainer from "./components/menuSections/teamsContainer";
import DriversContainer from "./components/menuSections/driversContainer";
import ModelcarsContainer from "./components/modelcars/ModelcarsContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/admin" element={<AdminContainer />} />
        <Route path="/seasons" element={<SeasonsContainer />} />
        <Route path="/teams" element={<TeamsContainer />} />
        <Route path="/drivers" element={<DriversContainer />} />
        <Route path="/modelcars/:id" element={<ModelcarsContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
