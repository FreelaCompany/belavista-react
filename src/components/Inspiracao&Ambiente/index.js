import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

import ListAmbientesActions from "../../store/ducks/ambientes-list";

import inspiracao1 from "../../assets/images/inspiracao1.png";
import inspiracao2 from "../../assets/images/inspiracao2.png";
import inspiracao3 from "../../assets/images/inspiracao3.png";
import btnNext from "../../assets/images/btnNext.png";
import btnPrev from "../../assets/images/btnPrev.png";
import { Link } from "react-router-dom";

export default function InspiracaoAmbiente() {
  const [swiper, updateSwiper] = useState(null);

  const dispatch = useDispatch();

  async function handleSearchData() {
    dispatch(ListAmbientesActions.listAmbientesRequest());
  }

  useEffect(() => {
    handleSearchData();
  }, []);

  const { data: ambientesList } = useSelector((state) => state.ambientesList);

  const params = {
    loop: false,
    centeredSlides: ambientesList?.length > 2 ? false : true,
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
        {ambientesList?.length && (
          <Swiper getSwiper={updateSwiper} {...params}>
            {ambientesList.map((ambiente) => (
              <Link to={`/ambientes/${ambiente.id_ambiente}`}>
                <Slide url={ambiente.foto} />
              </Link>
            ))}
          </Swiper>
        )}
        {ambientesList?.length > 3 && (
          <>
            <ButtonPrev onClick={goPrev}>
              <img src={btnPrev} alt="" />
            </ButtonPrev>
            <ButtonNext onClick={goNext}>
              <img src={btnNext} alt="" />
            </ButtonNext>
          </>
        )}
      </Content>
    </Container>
  );
}
