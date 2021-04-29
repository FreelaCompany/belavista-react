import React from "react";
import Swiper from "react-id-swiper";

import "swiper/css/swiper.css";

import { Container, Content, Title, Slide } from "./styles";

import parceiro1 from "../../assets/images/parceiro1.png";
import parceiro2 from "../../assets/images/parceiro2.png";
import parceiro3 from "../../assets/images/parceiro3.png";

export default function Parceiros() {
  const params = {
    loop: false,
    autoplay: {
      delay: 8500,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  };

  return (
    <Container>
      <Title>Marcas Parceiras</Title>
      <Content>
        <Swiper {...params}>
          <Slide url={parceiro1} />
          <Slide url={parceiro2} />
          <Slide url={parceiro3} />
        </Swiper>
      </Content>
    </Container>
  );
}
