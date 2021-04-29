import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.section`
  width: 100%;
  height: 768px;

  .swiper-pagination {
    margin-bottom: 38px;
  }

  .swiper-pagination-bullet {
    width: 31px;
    height: 6px;
    border-radius: 0;
  }

  .swiper-pagination-bullet-active {
    background: ${colors.white};
  }
`;

export const Modernity = styled.h1`
  font-family: "Delicious";
  color: ${colors.greenSchool};
  font-style: italic;
  z-index: 999;
  position: relative;
  width: 600px;
  font-size: 203px;
  margin: 0 auto;
  top: -80%;
  font-weight: unset;
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 768px;
  background: ${({ url }) =>
    url ? `url(${url}) no-repeat center center;` : `none`};
  background-size: cover;
`;

export const ButtonPrev = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  background-color: transparent;
  color: ${colors.white};
  position: absolute;
  z-index: 999;
  left: 48px;
  top: 40%;
  transition: 300ms ease;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 1100px) {
    transform: scale(1.3);
    right: 154px;
  }

  @media screen and (max-width: 680px) {
    left: 48px;
    top: 40%;
  }
`;

export const ButtonNext = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  background-color: transparent;
  color: ${colors.white}; 
  position: absolute;
  z-index: 999;
  right: 48px;
  top: 40%;
  transition: 300ms ease;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 1100px) {
    transform: scale(1.3);
    right: 154px;
  }

  @media screen and (max-width: 680px) {
    right: 48px;
    top: 40%;
  }
`;
