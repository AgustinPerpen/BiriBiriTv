import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

import "../Programas/programas.scss";
import PalabraSantaLink from "../../Assets/PalabraSantaLink.jpg";
import FooterBB from "../FooterBB";

const Programas = () => {
  return (
    <div className="programas">
      <div className="programas__container">
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
            <Link to="/palabra-santa">
              <img src={PalabraSantaLink} className="programas__img-box" />
            </Link>
          </Grid>
        </Grid>
      </div>
      <FooterBB />
    </div>
  );
};

export default Programas;
