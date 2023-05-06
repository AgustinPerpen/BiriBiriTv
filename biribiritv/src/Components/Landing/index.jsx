import React from "react";
import ReactPlayer from "react-player";
import Grid from "@mui/material/Grid";

import "./landing.scss";

const Landing = () => {
  return (
    <div className="landing">
      <Grid container>
        <Grid item xs={12}>
          <div className="landing__twitch-player">
            <ReactPlayer url="https://www.twitch.tv/quefla_tv" playing />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
