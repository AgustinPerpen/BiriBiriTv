import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "./header.scss";

import Logo from "../../assets/HeaderLogo.png";

const Header = () => {
  return (
    <div className="header">
      <Grid
        container
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <Link to="/">
            <img src={Logo} className="header__logo" />
          </Link>
        </Grid>

        {/* <Grid item xs={12} md={4}>
          <div></div>
        </Grid> */}

        <Grid item xs={12} md={6}>
          <div>
            <Link to="/">Home</Link>
            <MoreVertIcon className="header__nav-icon1" />
            <Link to="/programas">Programas</Link>
            <MoreVertIcon className="header__nav-icon2" />
            <Link to="/contacto">Contacto</Link>
            <MoreVertIcon className="header__nav-icon3" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
