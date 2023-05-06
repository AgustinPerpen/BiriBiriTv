import React from "react";
import Grid from "@mui/material/Grid";

import "./contacto.scss";

const Contacto = () => {
  return (
    <div className="contacto">
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} md={6}>
          <div className="contacto__info-container">
            <p>
              Quefla TV representa la creación de un medio de comunicación
              audiovisual multiplataforma con base en las nuevas formas de
              transmitir y comunicar vía internet.
            </p>
            <p>
              Como medio pretendemos crear un abordaje sobre diferentes formatos
              anclándonos en el profesionalismo, la experimentación radial y
              audiovisual. Nuestro fin es informar y entretener pero nunca con
              un carácter tradicional y hegemónico.
            </p>
            <p>
              Buscamos promover la cultura nacional y extranjera e innovar en
              las formas de comunicar mediante una propuesta joven, digital,
              amplia y diversa.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contacto;
