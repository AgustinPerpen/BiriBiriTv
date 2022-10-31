import React from "react";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import "./footer.scss";

import FooterImage from "../../assets/FooterImage.png";

const Footer = () => {
  return (
    <div className="footer">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4}>
          <img src={FooterImage} className="footer__img" />
        </Grid>

        <Grid item xs={12} md={4}>
          <div>Lorem ipsum</div>
        </Grid>

        <Grid item xs={12} md={4}>
          <div className="footer__links">
            <a href="">
              <span>
                <InstagramIcon />
              </span>
              Instagram
            </a>
            <a href="">
              <span></span>
              Twitch
            </a>
            <a href="">
              <span>
                <TwitterIcon />
              </span>
              Twitter
            </a>
            <a href="">
              <span></span>Spotify
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
