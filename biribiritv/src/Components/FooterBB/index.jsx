import React from "react";
import Grid from "@mui/material/Grid";

import "./footerBB.scss";
import FooterImage from "../../Assets/FooterImage.png";
import YouTubeIcon from "../../Assets/icons/youtube.png";
import TwitchIcon from "../../Assets/icons/twitch.png";
import InstagramIcon from "../../Assets/icons/instagram.png";
import TwitterIcon from "../../Assets/icons/twitter.png";

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
            <span> quefla.contacto@gmail.com</span>
            <span> 341-7121552</span>
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <div className="footer-BB__box-redes">
            <>
              <img src={YouTubeIcon} className="footer-BB__link-icon"></img>
              <a href="https://www.youtube.com/@Quefla_Tv">
                Youtube
              </a>
            </>
            <>
              <img src={TwitchIcon} className="footer-BB__link-icon"></img>
              <a href="https://www.twitch.tv/quefla_tv">Twitch</a>
            </>
          </div>
          <div className="footer-BB__box-redes">
            <>
              <img src={InstagramIcon} className="footer-BB__link-icon"></img>
              <a href="https://www.instagram.com/quefla_tv/">Instagram</a>
            </>
            <>
              <img src={TwitterIcon} className="footer-BB__link-icon"></img>
              <a href="https://twitter.com/quefla_tv">Twitter</a>
            </>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterBB;
