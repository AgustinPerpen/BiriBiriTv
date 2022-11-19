import React from "react";
import Grid from "@mui/material/Grid";

import "./footerPS.scss";
import FooterImage from "../../Assets/FooterImage.png";
import InstagramIcon from "../../Assets/icons/instagram.png";
import TikTokIcon from "../../Assets/icons/tik-tok.png";
import TwitterIcon from "../../Assets/icons/twitter.png";

const FooterPS = () => {
  return (
    <div className="footer-PS">
      <Grid container alignItems="center">
        <Grid item xs={12} md={4}>
          <img src={FooterImage} className="footer-PS__img" />
        </Grid>

        <Grid item xs={12} md={4}>
          <div className="footer-PS__contacto-box">
            <span className="title">Contactanos:</span>
            <span> palabrasanata.contacto@gmail.com</span>
            <span> 341-7121552</span>
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <div className="footer-PS__box-redes">
            <>
              <img src={InstagramIcon} className="footer-PS__link-icon"></img>
              <a href="https://www.instagram.com/palabrasantaok">Instagram</a>
            </>
            <>
              <img src={TikTokIcon} className="footer-PS__link-icon"></img>
              <a href="https://www.tiktok.com/@palabrasantaok">TikTok</a>
            </>
          </div>
          <div className="footer-PS__box-redes">
            <>
              <img src={TwitterIcon} className="footer-PS__link-icon"></img>
              <a href="https://www.twitter.com/palabrasantaok">Twitter</a>
            </>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterPS;
