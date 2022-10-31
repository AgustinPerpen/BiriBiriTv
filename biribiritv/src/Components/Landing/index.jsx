import React from "react";
import ReactPlayer from 'react-player'
import Grid from "@mui/material/Grid";

import "./landing.scss";

import Logo from "../../assets/LandingImage.png";
import Twitch from "../../assets/TwitchLogo.png";
import PalabraSanta from "../../assets/PalabraSanta.png";

const Landing = () => {
  return (
    <div className="landing">
      <ReactPlayer url="https://www.twitch.tv/south_park_latino_2" playing />    
      <div className="landing__subContainer">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <div className="landing__subContainer-info">
              Lorem ipsum dolor sit amet consectetur adipiscing elit fusce
              litora, et molestie viverra ullamcorper suspendisse tincidunt
              montes posuere accumsan sem...
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <img src={Logo} className="landing__subContainer-img" />
          </Grid>
        </Grid>
      </div>

      <div className="landing__subContainer">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={8}>
            <img
              src={Twitch}
              className="landing__subContainer-img landing__twitch-ps-img"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="landing__subContainer-info">
              Lorem ipsum dolor sit amet consectetur adipiscing elit fusce
              litora, et molestie viverra ullamcorper suspendisse tincidunt
              montes posuere accumsan sem...
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="landing__subContainer">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            
          </Grid>
          <Grid item xs={12} md={8}>            
            <img
              src={PalabraSanta}
              className="landing__subContainer-img landing__twitch-ps-img"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Landing;
