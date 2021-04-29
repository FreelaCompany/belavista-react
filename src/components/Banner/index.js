import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { Container, Slide, ButtonPrev, ButtonNext, Modernity } from "./styles";

import ListBannerActions from "../../store/ducks/banner-list";
import { useDispatch, useSelector } from "react-redux";

import banner0 from "../../assets/images/bg-image.png";
import banner1 from "../../assets/images/bg-image.png";
import btnNext from "../../assets/images/btnNext.png";
import btnPrev from "../../assets/images/btnPrev.png";

export default function Banner() {
  const [swiper, updateSwiper] = useState(null);

  const params = {
    loop: true,
    autoplay: {
      delay: 8500,
      disableOnInteraction: false,
    },
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

  const dispatch = useDispatch();

  async function handleSearchData() {
    dispatch(ListBannerActions.listBannerRequest());
  }

  useEffect(() => {
    handleSearchData();
  }, []);

  const { data: bannerList } = useSelector((state) => state.bannerList);

  console.log(bannerList);

  return (
    <Container id="banner">
      {bannerList && (
        <Swiper getSwiper={updateSwiper} {...params}>
          {bannerList.map((banner) => (
            <Slide url={banner.banner} />
          ))}
        </Swiper>
      )}
      {/* <Modernity>modernidade</Modernity> */}
      <ButtonPrev onClick={goPrev}>
        <img src={btnPrev} alt="" />
      </ButtonPrev>
      <ButtonNext onClick={goNext}>
        <img src={btnNext} alt="" />
      </ButtonNext>
    </Container>
  );
}
