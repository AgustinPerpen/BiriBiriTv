import React, { useState, useLayoutEffect } from "react";

import { useLocation, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "./footer.scss";

import FooterImage from "../../Assets/FooterImage.png";

// import YouTubeIcon from "../../Assets/icons/youtube.png";
// import TwitchIcon from "../../Assets/icons/twitch.png";
// import InstagramIcon from "../../Assets/icons/instagram.png";
// import TwitterIcon from "../../Assets/icons/twitter.png";

const Footer = () => {
  const { pathname } = useLocation();

  const quefla = {
    email: "quefla.contacto@gmail.com",
    instagram: "https://instagram.com/quefla_tv",
    twitter: "https://twitter.com/quefla_tv",
  };
  Object.keys(quefla).map(function (key, value) {});

  const palabraSanta = {
    email: "palabrasanta.contacto@gmail.com",
  };
  Object.keys(quefla).map(function (key, value) {});

  function queflaHandler() {
    const { email, instagram, twitter } = quefla;
    return (
      <Grid item xs={12} md={4}>
        <div className="footer__contacto-box">
          <p> {email}</p>
          <a href={instagram} target="_blank">
            Instagram
          </a>
        </div>
      </Grid>
    );
  }

  function palabraSantaHandler() {
    const { email } = palabraSanta;
    return (
      <Grid item xs={12} md={4}>
        <div className="footer__contacto-box">
          <p> {email}</p>
        </div>
      </Grid>
    );
  }

  return (
    <div className="footer">
      <Grid container alignItems="center">
        <Grid item xs={12} md={4}>
          <img src={FooterImage} className="footer__img" />
        </Grid>

        {pathname === "/palabra-santa"
          ? palabraSantaHandler()
          : queflaHandler()}
      </Grid>
    </div>
  );
};

export default Footer;
