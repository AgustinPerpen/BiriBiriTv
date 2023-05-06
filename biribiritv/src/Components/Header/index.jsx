import React from "react";
import Grid from "@mui/material/Grid";

import "./header.scss";

import HeaderBtn from "../HeaderBtn";

import Logo from "../../Assets/HeaderLogo.png";

const Header = () => {
  return (
    <div className="header">
      <Grid container alignItems="center" justifyContent={"center"}>
        <Grid item xs={12} md={6}>
          <img src={Logo} className="header__logo" />
        </Grid>

        <Grid item xs={12} md={6}>
          <div className="header__links-container">
            <HeaderBtn to="/" label="Home" />
            <HeaderBtn to="/programas" label="Programas" />
            <HeaderBtn to="/contacto" label="Quefla" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
