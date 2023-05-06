import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "animate.css";

import "../Programas/programas.scss";

import PalabraSanta from "../../Assets/PalabraSanta.png";
import Arrow from "../../Assets/Arrow.png";

const Programas = () => {
  return (
    <div className="programas">
      <Grid container>
        <Grid item xs={12}>
          <Link to="/palabra-santa">
            <div className="programas__ps">
              <img src={PalabraSanta} className="programas__ps-img" />
              <img
                src={Arrow}
                className="programas__arrow-img animate__animated animate__bounce"
              />
            </div>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Programas;
