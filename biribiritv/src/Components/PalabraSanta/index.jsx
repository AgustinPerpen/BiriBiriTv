import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import FooterPS from "../FooterPS";


import "../PalabraSanta/palabraSanta.scss"

import PalabraSantaLogo from '../../assets/PalabraSantaLogo.png'
import Vivo from '../../assets/Vivo.jpg'
import Horarios from '../../assets/horariosTrans.png'
import Uno from '../../assets/uno.jpg'
import Dos from '../../assets/dos.jpg'
import Tres from '../../assets/tres.jpg'

const PalabraSanta = () => {
  return (
    <div className='palabra-santa'>            
        <div className="palabra-santa__subContainer">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={4}>
              <div className="palabra-santa__subContainer-info">
                Lorem ipsum dolor sit amet consectetur adipiscing elit fusce
                litora, et molestie viverra ullamcorper suspendisse tincidunt
                montes posuere accumsan sem...
              </div>
            </Grid>
            <Grid item xs={12} md={8}>
              <img src={PalabraSantaLogo} className="palabra-santa__box-img" />
            </Grid>
          </Grid>
        </div>
        <div className="palabra-santa__photo">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={4}>
                <img src={Uno} className="palabra-santa__box-img" />
                <p className='palabra-santa__photo-info'>Tu vieja en tanga</p>
              </Grid>
              <Grid item xs={12} md={4}>
                <img src={Dos} className="palabra-santa__box-img" />
              </Grid>
              <Grid item xs={12} md={4}>
                <img src={Tres} className="palabra-santa__box-img" />
              </Grid>          
            </Grid>
        </div>
        <FooterPS />
    </div>
  );
};

export default PalabraSanta;
