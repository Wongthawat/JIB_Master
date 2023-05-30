import React from "react";
import { Nav } from "react-bootstrap/";
import "./HeaderPage.css";

const HeaderPage = () => {
  let token = window.localStorage.getItem("accessToken");

  const handleRemove = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("dataUser");
    localStorage.removeItem("roles");
    location.href = "/LoginPage"
  }

  return (
    <div>
      <Nav className="menu-bar">
        <div className="col-lg-2 text-center">
            <a href="">
                <img src="/src/assets/logo-w.webp" alt="logoJIB" className="ImgLogo" />
            </a>
        </div>
        <div>
            {Roles.role}
        </div>
        <div className="col-lg-1 item-logout">
          {!token ? <></> : <a onClick={handleRemove}>Logout</a>}
        </div>
      </Nav>
    </div>
  );
};

export default HeaderPage;
