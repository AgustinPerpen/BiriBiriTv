import React from 'react'
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom"; 

import "../Landing/landing.scss";

import PalabraSantaLogo from '../../assets/PalabraSantaLogo.png'

const PalabraSanta = () => {
  return (
    <div>
        
        <div className="landing__subContainer">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <div className="landing__subContainer-info">
              Lorem ipsum dolor sit amet consectetur adipiscing elit fusce
              litora, et molestie viverra ullamcorper suspendisse tincidunt
              montes posuere accumsan sem...
            </div>
            <div>
              <Link to="/palabra-santa"><button>Ver detalles</button></Link>
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <img src={PalabraSantaLogo} className="landing__subContainer-img" />
          </Grid>
        </Grid>
      </div>      
    </div>
  )
}

export default PalabraSanta