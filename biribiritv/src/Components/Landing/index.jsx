import React from "react";

import "./landing.css";

import Logo from "../../assets/LandingImage.png";

import Grid from "@mui/material/Grid";

const Landing = () => {
  return (
    <div className="main">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} md={4}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipiscing elit fusce litora,
            et molestie viverra ullamcorper suspendisse tincidunt montes posuere
            accumsan sem, massa tempus elementum ac conubia etiam morbi
            efficitur. Luctus eu convallis viverra imperdiet...
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <img src={Logo} className="left-img" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
