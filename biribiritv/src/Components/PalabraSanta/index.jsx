import React from "react";
import Grid from "@mui/material/Grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../PalabraSanta/palabraSanta.scss";

import PalabraSantaLogo from "../../Assets/PalabraSanta.png";

const PalabraSanta = () => {
  return (
    <div className="palabra-santa">
      <Grid container alignItems="center">
        <Grid item xs={12} md={6}>
          <img src={PalabraSantaLogo} className="palabra-santa__ps-img" />
        </Grid>
        <Grid item xs={12} md={5}>
          <div className="palabra-santa__info">
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
              juegos y un monton de cosas.
            </p>
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="slide">
              <div class="nanoCard"></div>
            </SwiperSlide>

            <SwiperSlide className="slide">
              <div class="adriCard"></div>
            </SwiperSlide>

            <SwiperSlide className="slide">
              <div class="martuCard"></div>
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </div>
  );
};

export default PalabraSanta;
