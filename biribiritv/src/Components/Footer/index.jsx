import React from "react";
import Grid from "@mui/material/Grid";
import InstagramIcon from "../../assets/icons/instagram.png";
import TwitchIcon from "../../assets/icons/twitch.png";
import FacebookIcon from "../../assets/icons/facebook.png";
import SpotifyIcon from "../../assets/icons/spotify.png";

import "./footer.scss";

import FooterImage from "../../assets/FooterImage.png";

const Footer = () => {
  return (
    <div className="footer">
      <Grid container alignItems="center">
        <Grid item xs={12} md={4}>
          <img src={FooterImage} className="footer__img" />
        </Grid>

        <Grid item xs={12} md={4}>
          <div>BiriBiri</div>
        </Grid>

        <Grid item xs={12} md={4}>
          <div>
            <div className="footer__link-box">
              <>
                <img src={InstagramIcon} className="footer__link-icon"></img>
                <a href="">Instagram</a>
              </>

              <>
                <img src={TwitchIcon} className="footer__link-icon"></img>
                <a href="">Twitch</a>
              </>

              <>
                <img src={FacebookIcon} className="footer__link-icon"></img>
                <a href="">Facebook</a>
              </>

              <>
                <img src={SpotifyIcon} className="footer__link-icon"></img>
                <a href="">Spotify</a>
              </>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
