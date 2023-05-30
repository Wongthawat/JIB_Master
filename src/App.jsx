import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { LoginPage, HomePage } from "./Pages/index";
import HeaderPage from "./Components/HeaderPage/HeaderPage";

function App() {

  const token = localStorage.getItem("accessToken")
  if(!token){
    return <LoginPage />
  }

  return (
    <>
      <HeaderPage />
      <Routes>
        <Route path="/" element={<Navigate to="/LoginPage" />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="HomePage" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
