import React from "react";

import { useLocation } from "react-router-dom";
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

  const palabraSanta = {
    email: "palabrasanta.contacto@gmail.com",
    instagram: "https://www.instagram.com/palabrasantaok",
    tikTok: "https://www.tiktok.com/@palabrasantaok",
    twitter: "https://www.twitter.com/palabrasantaok",
  };

  function handler() {
    let current = {};
    if (pathname === "/palabra-santa") {
      current = palabraSanta;
    } else {
      current = quefla;
    }

    return (
      <Grid item xs={12} md={4}>
        <div className="footer__contacto-box">
          <p> {current.email}</p>
          <p> {current.instagram}</p>
          <p> {current.twitter}</p>
          <p> {current.tikTok}</p>
          {/* <a href={instagram} target="_blank">
            Instagram
          </a> */}
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
        {handler()}
      </Grid>
    </div>
  );
};

export default Footer;
