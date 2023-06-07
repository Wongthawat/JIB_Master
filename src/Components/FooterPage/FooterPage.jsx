import React from "react";
import { AppBar, Toolbar } from "@mui/material";

const FooterPage = () => {
  return (
    <>
      <AppBar sx={{ top: "auto", bottom: 0, zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor:'#383e4a' }}>
        <Toolbar>
          <div className="flex row">
            <span className="text-xs">
              2023 JIB COMPUTER GROUP All rights reserved
            </span>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default FooterPage;
