import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import {
  Container,
  Content,
  Title,
  Description,
  Legenda,
  Slide,
  ButtonPrev,
  ButtonNext,
} from "./styles";

import inspiracao1 from "../../assets/images/inspiracao1.png";
import inspiracao2 from "../../assets/images/inspiracao2.png";
import inspiracao3 from "../../assets/images/inspiracao3.png";
import btnNext from "../../assets/images/btnNext.png";
import btnPrev from "../../assets/images/btnPrev.png";

export default function InspiracaoAmbiente() {
  const [swiper, updateSwiper] = useState(null);

  const params = {
    loop: true,
    autoplay: {
      delay: 8500,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <Container id="ambientes">
      <Title>Inspiração E ambientes</Title>
      <Description>
        Conheça diferentes estilos de decoração de ambientes<span>.</span>
      </Description>
      <Legenda>Clique para ver as imagens</Legenda>
      <Content>
        <Swiper getSwiper={updateSwiper} {...params}>
          <Slide url={inspiracao1} />
          <Slide url={inspiracao2} />
          <Slide url={inspiracao3} />
        </Swiper>
        <ButtonPrev onClick={goPrev}>
          <img src={btnPrev} alt="" />
        </ButtonPrev>
        <ButtonNext onClick={goNext}>
          <img src={btnNext} alt="" />
        </ButtonNext>
      </Content>
    </Container>
  );
}
