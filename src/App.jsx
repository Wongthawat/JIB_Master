import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

import { LoginPage, HomePage, BannerPage, Page404 } from "./Pages/index";
import HeaderPage from "./Components/HeaderPage/HeaderPage";
import NavbarPage from "./Components/NavbarPage/NavbarPage";
import FooterPage from "./Components/FooterPage/FooterPage";

function App() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return <LoginPage />;
  }

  return (
    <>
      <HeaderPage />
      {/* <NavbarPage /> */}
      <div className=" p-3 w-100 h-100">
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="*" element={<Page404 />} />
          {/* <Route path="LoginPage" element={<LoginPage />} /> */}
          <Route path="HomePage" element={<HomePage />} />
          <Route path="imagebanner" element={<BannerPage />} />
        </Routes>
        {/* <FooterPage /> */}
      </div>
    </>
  );
}

export default App;
