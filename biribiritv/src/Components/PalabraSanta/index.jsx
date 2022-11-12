import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

import "../Landing/landing.scss";

import PalabraSantaLogo from "../../assets/PalabraSantaLogo.png";
import Vivo from "../../assets/Vivo.jpg";
import Horarios from "../../assets/Horarios.png";

import FooterPS from "../FooterPS"

const PalabraSanta = () => {
  return (
    <>
    <div>
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
            <img src={PalabraSantaLogo} className="landing__subContainer-img" />
          </Grid>
        </Grid>
      </div>
      <div className="landing__subContainer">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={8}>
            <img
              src={Vivo}
              className="landing__subContainer-img landing__twitch-ps-img"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="landing__subContainer-info">
              <img
                src={Horarios}
                className="landing__subContainer-img landing__twitch-ps-img"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
    <FooterPS />
    </>
  );
};

export default PalabraSanta;
