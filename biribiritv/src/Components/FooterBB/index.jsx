import React from "react";
import Grid from "@mui/material/Grid";

import "./footerBB.scss";
import FooterImage from "../../assets/FooterImage.png";
import YouTubeIcon from "../../assets/icons/youtube.png";
import TwitchIcon from "../../assets/icons/twitch.png";
import InstagramIcon from "../../assets/icons/instagram.png";
import TwitterIcon from "../../assets/icons/twitter.png";

const FooterBB = () => {
  return (
    <div className="footer-BB">
      <Grid container alignItems="center">
        <Grid item xs={12} md={4}>
          <img src={FooterImage} className="footer-BB__img" />
        </Grid>

        <Grid item xs={12} md={4}>
          <div className="footer-BB__contacto-box">
            <span className="title">Contactanos:</span>
            <span> biribiritv.contacto@gmail.com</span>
            <span> 341-7121552</span>
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <div className="footer-BB__box-redes">
            <>
              <img src={YouTubeIcon} className="footer-BB__link-icon"></img>
              <a href="https://www.youtube.com/channel/UCbknDLUYWAUygqjj7c6jJIA ">
                Youtube
              </a>
            </>
            <>
              <img src={TwitchIcon} className="footer-BB__link-icon"></img>
              <a href="https://www.twitch.tv/biribiri_tv">Twitch</a>
            </>
          </div>
          <div className="footer-BB__box-redes">
            <>
              <img src={InstagramIcon} className="footer-BB__link-icon"></img>
              <a href="https://www.instagram.com/biribiri_tv">Instagram</a>
            </>
            <>
              <img src={TwitterIcon} className="footer-BB__link-icon"></img>
              <a href="https://www.twitter.com/biribiri_tv">Twitter</a>
            </>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterBB;
