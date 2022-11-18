import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

import "../PalabraSanta/palabraSanta.scss";

import PalabraSantaLogo from "../../assets/PalabraSantaLogo.png";
import Uno from "../../assets/uno.jpg";
import Dos from "../../assets/dos.jpg";
import Tres from "../../assets/tres.jpg";

import FooterPS from "../FooterPS";

const PalabraSanta = () => {
  const [infoOne, setInfoOne] = useState("");
  const [infoTwo, setInfoTwo] = useState("");
  const [infoThree, setInfoThree] = useState("");

  const infoOneHandler = () => {
    setInfoOne("Hola, soy Adri. Me gusta cagarme a trompadas y tomar falopa del cul… nah, mentira. Me gusta actuar, jugar al fútbol, reírme con amigos y ahora… y ahora(?");
  };

  const infoTwoHandler = () => {
    setInfoTwo("Soy Nano, me gusta hacer reír pero más me gusta cuando me pagan. Ex atleta de la NBA. Me echaron por discriminación.");
  };

  const infoThreeHandler = () => {
    setInfoThree("Hola soy Martu Bovyn, de día hago cosas en Palabra Santa, de noche me acuesto temprano. De chica soñaba con ser nadadora olímpica pero me daba tanta ansiedad competir que tuve que dejar. Fanática de los bizcochos y militante del porro con filtro. Futura famosa con aires de diva y un poco de humildad.");
  };

  const infoOneRemove = () => {
    setInfoOne("");
  };

  const infoTwoRemove = () => {
    setInfoTwo("");
  };

  const infoThreeRemove = () => {
    setInfoThree("");
  };

  return (
      <div className="palabra-santa">
        <div className="palabra-santa__subContainer">
          <Grid container alignItems="center">
            <Grid item xs={12} md={6}>
              <div className="palabra-santa__box-info">
                <div className="palabra-santa__paragaph-info">
                  Palabra Santa, un programa de streaming diario. Nos juntamos todos los días de 17 a 19hs a hacer el programa que queremos hacer.
                </div>
                <div className="palabra-santa__paragaph-info">
                  En palabra santa nos importa el entretenimiento, el humor y nos tomamos muy en serio lo absurdo.
                </div>
                <div className="palabra-santa__paragaph-info">
                 Conducen: Nano, Martu y Adri. Entrevistas, sketches, invitados, juegos y biri biri.
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={PalabraSantaLogo} className="palabra-santa__box-img" />
            </Grid>
          </Grid>
        </div>
        <div className="palabra-santa__photo">
          <Grid container spacing={3} alignItems="center">
            <Grid className="palabra-santa__photo-one" item xs={12} md={4}>
              <img
                src={Uno}
                onMouseEnter={infoOneHandler}
                onMouseLeave={infoOneRemove}
                className="palabra-santa__box-img"
              />
              <div className="palabra-santa__info-one">{infoOne}</div>
            </Grid>
            <Grid className="palabra-santa__photo-two" item xs={12} md={4}>
              <img
                src={Dos}
                onMouseEnter={infoTwoHandler}
                onMouseLeave={infoTwoRemove}
                className="palabra-santa__box-img"
              />
              <div className="palabra-santa__info-two">{infoTwo}</div>
            </Grid>
            <Grid className="palabra-santa__photo-three" item xs={12} md={4}>
              <img
                src={Tres}
                onMouseEnter={infoThreeHandler}
                onMouseLeave={infoThreeRemove}
                className="palabra-santa__box-img"
              />
              <div className="palabra-santa__info-three">{infoThree}</div>
            </Grid>
          </Grid>
        </div>
        <FooterPS />
      </div>
  );
};

export default PalabraSanta;
