import React, { useEffect } from "react";
import { useState } from "react";

import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "./footer.scss";

import FooterImage from "../../Assets/FooterImage.png";

import InstagramIcon from "../../Assets/icons/instagram.png";
import TikTokIcon from "../../Assets/icons/tik-tok.png";
import TwitterIcon from "../../Assets/icons/twitter.png";
import YouTubeIcon from "../../Assets/icons/youtube.png";

const Footer = () => {

  const { pathname } = useLocation();
  const [psActive, setPsActive] = useState(true)

  const quefla = {
    email: "quefla.contacto@gmail.com",
    instagram: "https://instagram.com/quefla_tv",
    twitter: "https://twitter.com/quefla_tv",
    youtube: "https://www.youtube.com/@Quefla_Tv",
  };

  const palabraSanta = {
    email: "palabrasanta.contacto@gmail.com",
    instagram: "https://www.instagram.com/palabrasantaok",
    twitter: "https://www.twitter.com/palabrasantaok",
    tikTok: "https://www.tiktok.com/@palabrasantaok",
  };

  useEffect(() =>{
    if (pathname === "/palabra-santa") {
      setPsActive(true)
    } else {
      setPsActive(false) 
    }
  }, [pathname])

  
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
            <p>341-7121552</p>
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
          <img src={TwitterIcon} className="footer__icon" />
            <div>twitter</div>
          </a>
        </Grid>

        <Grid item xs={12} md={4}>
          <div>
            <>
              {
                psActive
                ?
                <>
                  <a href={current.tikTok} target="_blank">
                  <img src={TikTokIcon} className="footer__icon" />
                    <div>tikTok</div>
                  </a>
                </>
                :
                <>
                <a href={current.youtube} target="_blank">
                <img src={YouTubeIcon} className="footer__icon" />
                  <div>youtube</div>
                </a>
                </>
              }
            </>
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
