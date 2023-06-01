import React, { useState } from "react";
import { Drawer, Toolbar, List, ListItem } from '@mui/material';
import { useNavigate } from "react-router-dom";

import DataMenu from "./Index.json";
import "./Navbar.css"

const NavbarPage = () => {
    const navigate = useNavigate();
    const NavigateTo = (urlpath) => {
        navigate("/" + urlpath.toLocaleLowerCase());
    };

  return (
    <>
      <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0, display:{ xs: "none", sm: "block" },
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" }}}>
        <Toolbar />
          <List>
            {DataMenu.map((item, index) => (
              <ListItem key={index} disablePadding>
                <div className="py-1 mx-1 my-1 list-name border" onClick={() => NavigateTo(item.path)}>
                    <>{item.title}</>
                </div>
              </ListItem>
            ))}
          </List>
      </Drawer>
    </>
  );
};

export default NavbarPage;
