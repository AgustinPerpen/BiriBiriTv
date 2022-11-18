import React from "react";
import ReactPlayer from "react-player";
import Grid from "@mui/material/Grid";
import FooterBB from "../FooterBB"

import "./landing.scss";

import Logo from "../../assets/LandingImage.png";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <Grid container alignItems="center">
          <Grid item xs={12} md={6}>
            <div className="landing__box-info">
              <div className="landing__paragaph-info">
              Biri Biri TV representa la creación de un medio de comunicación audiovisual multiplataforma con base en las nuevas maneras de transmitir y comunicar vía internet.
              </div>
              <div className="landing__paragaph-info">
              Como medio queremos poder crear un abordaje sobre diferentes formatos anclándonos en el profesionalismo y la experimentación radial y audiovisual. Nuestro fin es informar y entretener  pero nunca con un carácter tradicional y hegemónico. 
              </div>
              <div className="landing__paragaph-info">
              Buscamos promover tanto la cultura nacional como extranjera e innovar en las formas de comunicar con una propuesta joven ,digital, amplia y diversa.
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={Logo} className="landing__box-img" />
          </Grid>
        </Grid>
      </div>

      <div className="landing__twitch-player">
        <ReactPlayer url="https://www.twitch.tv/biribiri_tv" playing />
      </div>
      <FooterBB />
    </div>
  );
};

export default Landing;
