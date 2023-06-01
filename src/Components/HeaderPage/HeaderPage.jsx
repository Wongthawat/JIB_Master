import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "./HeaderPage.css";
import { Gradient } from "@mui/icons-material";

const HeaderPage = () => {
  let token = window.localStorage.getItem("accessToken");

  const handleRemove = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("dataUser");
    localStorage.removeItem("roles");
    location.href = "/loginpage";
  };

  return (
    <>
      <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: 'linear-gradient(to right bottom, #36EAEF, #6B0AC9)'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            <img src="/src/assets/logo-w.webp" alt="" className="ImgLogo" />
          </Typography>
          <Typography sx={{ flexGrow: 1 }}></Typography>
          {!token ? (
            <></>
          ) : (
            <div className="item-logout" onClick={handleRemove}>
              <span className="">LOGOUT</span>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HeaderPage;
