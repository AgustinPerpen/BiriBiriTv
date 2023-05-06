import React from "react";

import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "./footer.scss";

import FooterQuefla from "../../Assets/FooterQuefla.png";
import FooterPs from "../../Assets/FooterPs.png";

import InstagramIcon from "../../Assets/icons/instagram.png";
import TwitterIcon from "../../Assets/icons/twitter.png";
import YouTubeIcon from "../../Assets/icons/youtube.png";
import TikTokIcon from "../../Assets/icons/tik-tok.png";

const Footer = () => {
  const { pathname } = useLocation();

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

  const logo =
    pathname !== "/palabra-santa" ? (
      <img src={FooterQuefla} className="footer__quefla-img" />
    ) : (
      <img src={FooterPs} className="footer__ps-img" />
    );

  function handler() {
    let current = {};
    if (pathname === "/palabra-santa") {
      current = palabraSanta;
    } else {
      current = quefla;
    }

    return (
      <>
        {pathname === "/contacto" && (
          <Grid item xs={12} className="footer__info">
            <p>{current.email}</p>
            <p>+54 9 341 7 121 552</p>
          </Grid>
        )}

        <Grid item xs={12}>
          <div className="footer__links-container">
            <a href={current.instagram} target="_blank">
              <img src={InstagramIcon} className="footer__icon" />
            </a>

            <a href={current.twitter} target="_blank">
              <img src={TwitterIcon} className="footer__icon" />
            </a>

            {current.youtube && (
              <a href={current.youtube} target="_blank">
                <img src={YouTubeIcon} className="footer__icon" />
              </a>
            )}

            {current.tikTok && (
              <a href={current.tikTok} target="_blank">
                <img src={TikTokIcon} className="footer__icon" />
              </a>
            )}
          </div>
        </Grid>
      </>
    );
  }

  return (
    <div className="footer">
      <Grid container>
        <Grid item xs={12}>
          {logo}
        </Grid>
        {handler()}
      </Grid>
    </div>
  );
};

export default Footer;
