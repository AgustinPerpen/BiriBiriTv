import React, { useState } from "react";
import Grid from "@mui/material/Grid";

import "../PalabraSanta/palabraSanta.scss";
import PalabraSantaLogo from "../../Assets/PalabraSantaLogo.png";
import Adri from "../../Assets/Adri.jpg";
import Nano from "../../Assets/Nano.jpg";
import Martu from "../../Assets/Martu.jpg";

import FooterPS from "../FooterPS";

const PalabraSanta = () => {
  const [showInfoAdri, setShowInfoAdri] = useState(false);
  const [showInfoNano, setShowInfoNano] = useState(false);
  const [showInfoMartu, setShowInfoMartu] = useState(false);

  return (
    <div className="palabra-santa">
      <Grid container alignItems="center">
        <Grid item xs={12} md={6}>
          <div
            className="palabra-santa__info-box
          "
          >
            <p>
              Palabra Santa, un programa de streaming diario. Nos juntamos todos
              los días de 17 a 19hs a hacer el programa que queremos hacer.
            </p>
            <p>
              En palabra santa nos importa el entretenimiento, el humor y nos
              tomamos muy en serio lo absurdo.
            </p>
            <p>
              Conducen: Nano, Martu y Adri. Entrevistas, sketches, invitados,
              juegos y biri biri.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={PalabraSantaLogo} className="palabra-santa__img-box" />
        </Grid>
      </Grid>

      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={4}>
          <div
            onMouseEnter={() => setShowInfoAdri(true)}
            onMouseLeave={() => setShowInfoAdri(false)}
            className="palabra-santa__conductor-container"
          >
            <img src={Adri} />
            <p hidden={!showInfoAdri}>
              "Hola, soy Adri. Me gusta cagarme a trompadas y tomar falopa del
              cul… nah, mentira. Me gusta actuar, jugar al fútbol, reírme con
              amigos y ahora… y ahora?."
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div
            onMouseEnter={() => setShowInfoNano(true)}
            onMouseLeave={() => setShowInfoNano(false)}
            className="palabra-santa__conductor-container"
          >
            <img src={Nano} />
            <p hidden={!showInfoNano}>
              "Soy Nano, me gusta hacer reír pero más me gusta cuando me pagan.
              Ex atleta de la NBA. Me echaron por discriminación."
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div
            onMouseEnter={() => setShowInfoMartu(true)}
            onMouseLeave={() => setShowInfoMartu(false)}
            className="palabra-santa__conductor-container"
          >
            <img src={Martu} />
            <p hidden={!showInfoMartu}>
              "Hola soy Martu Bovyn, de día hago cosas en Palabra Santa, de
              noche me acuesto temprano. De chica soñaba con ser nadadora
              olímpica pero me daba tanta ansiedad competir que tuve que dejar.
              Fanática de los bizcochos y militante del porro con filtro. Futura
              famosa con aires de diva y un poco de humildad."
            </p>
          </div>
        </Grid>
      </Grid>

      <FooterPS />
    </div>
  );
};

export default PalabraSanta;
