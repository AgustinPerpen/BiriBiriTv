import React from "react";

import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "./footer.scss";

import FooterImage from "../../Assets/FooterImage.png";

import InstagramIcon from "../../Assets/icons/instagram.png";
// import TwitterIcon from "../../Assets/icons/twitter.png";
// import TwitchIcon from "../../Assets/icons/twitch.png";
// import YouTubeIcon from "../../Assets/icons/youtube.png";

const Footer = () => {
  const { pathname } = useLocation();

  const quefla = {
    email: "quefla.contacto@gmail.com",
    instagram: "https://instagram.com/quefla_tv",
    twitter: "https://twitter.com/quefla_tv",
  };

  const palabraSanta = {
    email: "palabrasanta.contacto@gmail.com",
    instagram: "https://www.instagram.com/palabrasantaok",
    twitter: "https://www.twitter.com/palabrasantaok",
    tikTok: "https://www.tiktok.com/@palabrasantaok",
  };

  function handler() {
    let current = {};
    if (pathname === "/palabra-santa") {
      current = palabraSanta;
    } else {
      current = quefla;
    }

    return (
      <>
        <Grid item xs={12} md={4}>
          <div>
            <p> {current.email}</p>
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <div className="footer__element">
            <a href={current.instagram} target="_blank">
              <img src={InstagramIcon} className="footer__icon" />
              <span>Instagram</span>
            </a>
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <a href={current.twitter} target="_blank">
            <div>twitter</div>
          </a>
        </Grid>

        <Grid item xs={12} md={4}>
          <div>
            <a href={current.tikTok} target="_blank">
              <div>tikTok</div>
            </a>
          </div>
        </Grid>
      </>
    );
  }

  return (
    <div className="footer">
      <Grid container alignItems="center">
        <Grid item xs={12} md={4}>
          <img src={FooterImage} className="footer__logo" />
        </Grid>
        {handler()}
      </Grid>
    </div>
  );
};

export default Footer;
