import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { LoginPage, HomePage, BannerPage } from "./Pages/index";
import HeaderPage from "./Components/HeaderPage/HeaderPage";
import NavbarPage from "./Components/NavbarPage/NavbarPage";

function App() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return <LoginPage />;
  }

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <HeaderPage />
        <NavbarPage />
        <div className=" p-3 w-100 h-100">
          <Toolbar />
          <Routes>
            <Route path="/" element={<Navigate to="/loginpage" />} />
            <Route path="*" element={<HomePage />} />
            <Route path="LoginPage" element={<LoginPage />} />
            <Route path="HomePage" element={<HomePage />} />
            <Route path="imagebanner" element={<BannerPage />} />
          </Routes>
        </div>
      </Box>
    </>
  );
}

export default App;
