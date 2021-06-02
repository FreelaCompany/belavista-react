import React from "react";
import Swiper from "react-id-swiper";

import "swiper/css/swiper.css";

import { Container, Content, Title, Slide } from "./styles";

import parceiro1 from "../../assets/images/parceiro1.png";
import parceiro2 from "../../assets/images/parceiro2.png";
import parceiro3 from "../../assets/images/parceiro3.png";

export default function Parceiros({ sobre }) {
  const params = {
    loop: true,
    autoplay: {
      delay: 8500,
      disableOnInteraction: false,
    },
    slidesPerView: 3,

    breakpoints: {
      // when window width is >= 320px
      250: {
        slidesPerView: 1,
        spaceBetween: 50,
      },

      585: {
        slidesPerView: 2,
        spaceBetween: 60,
      },

      // when window width is >= 640px
      995: {
        slidesPerView: 3,
        spaceBetween: 120,
      },
    },
  };

  return (
    <Container sobre>
      <Title>Marcas Parceiras</Title>
      <Content>
        <Swiper {...params}>
          <a href="http://siermoveis.com.br/pt_br/" target="_blank">
            <Slide url={parceiro1} />
          </a>
          <a href="https://www.bellarte.com.br/" target="_blank">
            <Slide url={parceiro2} />
          </a>
          <a href="https://www.greenhousemoveis.com.br/" target="_blank">
            <Slide url={parceiro3} />
          </a>
        </Swiper>
      </Content>
    </Container>
  );
}
