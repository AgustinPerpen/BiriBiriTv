import React from "react";
import ReactPlayer from "react-player";
import Grid from "@mui/material/Grid";

import "./landing.scss";
import Logo from "../../Assets/LandingImage.png";
import FooterBB from "../FooterBB";

const Landing = () => {
  return (
    <div className="landing">
      <Grid container alignItems="center">
        <Grid item xs={12} md={6}>
          <div className="landing__info-box">
            <p>
              Biri Biri TV representa la creación de un medio de comunicación
              audiovisual multiplataforma con base en las nuevas maneras de
              transmitir y comunicar vía internet.
            </p>
            <p>
              Como medio queremos poder crear un abordaje sobre diferentes
              formatos anclándonos en el profesionalismo y la experimentación
              radial y audiovisual. Nuestro fin es informar y entretener pero
              nunca con un carácter tradicional y hegemónico.
            </p>
            <p>
              Buscamos promover tanto la cultura nacional como extranjera e
              innovar en las formas de comunicar con una propuesta joven,
              digital, amplia y diversa.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={Logo} className="landing__img-box" />
        </Grid>
      </Grid>

      <div className="landing__twitch-player">
        <ReactPlayer url="https://www.twitch.tv/quefla_tv" playing />
      </div>
      <FooterBB />
    </div>
  );
};

export default Landing;
