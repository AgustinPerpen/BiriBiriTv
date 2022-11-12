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
              Lorem ipsum dolor sit amet consectetur adipiscing elit fusce
              litora, et molestie viverra ullamcorper suspendisse tincidunt
              montes posuere accumsan sem...
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
