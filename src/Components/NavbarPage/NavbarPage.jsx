import React from "react";
import { Drawer, Toolbar, List, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DataMenu from "./Index.json";

const NavbarPage = () => {
  const navigate = useNavigate();
  const NavigateTo = (urlpath) => {
    navigate("/" + urlpath.toLocaleLowerCase());
  };

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          display: { xs: "none", sm: "block" },
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <List>
          {DataMenu.map((item, index) => (
            <ListItem key={index} disablePadding>
              <div
                className="py-1 mx-1 my-1 w-full text-center text-sm cursor-pointer border-3 border-sky-200 hover:border-sky-500 hover:bg-sky-100 rounded-lg"
                onClick={() => NavigateTo(item.path)}
              >
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
