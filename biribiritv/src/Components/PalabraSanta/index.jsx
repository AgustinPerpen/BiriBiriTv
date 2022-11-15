import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import FooterPS from "../FooterPS";


import "../PalabraSanta/palabraSanta.scss"

import PalabraSantaLogo from '../../assets/PalabraSantaLogo.png'
import Uno from '../../assets/uno.jpg'
import Dos from '../../assets/dos.jpg'
import Tres from '../../assets/tres.jpg'

const PalabraSanta = () => {

  const [infoOne, setInfoOne] = useState("")
  const [infoTwo, setInfoTwo] = useState("")
  const [infoThree, setInfoThree] = useState("")

  const infoOneHandler = () => {
    setInfoOne("ONE ONE ONE ONE")
  }

  const infoTwoHandler = () => {
    setInfoTwo("TWO TWO TWO TWO")
  }

  const infoThreeHandler = () => {
    setInfoThree("THREE THREE THREE THREE")
  }

  const infoOneRemove = () => {
    setInfoOne("")
  }

  const infoTwoRemove = () => {
    setInfoTwo("")
  }

  const infoThreeRemove = () => {
    setInfoThree("")
  }

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
            <Grid container spacing={3} alignItems="center">
              <Grid  className="palabra-santa__photo-one" item xs={12} md={4}>
                <img src={Uno} onMouseEnter={infoOneHandler} onMouseLeave={infoOneRemove} className="palabra-santa__box-img" />
                <div className="palabra-santa__info-one">{infoOne}</div>              
              </Grid>
              <Grid className="palabra-santa__photo-two" item xs={12} md={4}>
                <img src={Dos} onMouseEnter={infoTwoHandler} onMouseLeave={infoTwoRemove} className="palabra-santa__box-img" />
                <div className="palabra-santa__info-two">{infoTwo}</div>
              </Grid>
              <Grid className="palabra-santa__photo-three" item xs={12} md={4}>
                <img src={Tres} onMouseEnter={infoThreeHandler} onMouseLeave={infoThreeRemove} className="palabra-santa__box-img" />
                <div className="palabra-santa__info-three">{infoThree}</div>
              </Grid>          
            </Grid>
        </div>
        <FooterPS />
    </div>
  );
};

export default PalabraSanta;
