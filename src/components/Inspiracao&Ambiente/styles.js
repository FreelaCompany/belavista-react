import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  background: ${colors.black};
  height: 868px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 88px;
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-size: 20px;
  font-family: "BrandonBold", sans-serif;
  line-height: 38px;
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-size: 43px;
  font-family: "BrandonBold", sans-serif;
  line-height: 47px;
  width: 532px;
  height: 106px;
  color: ${colors.white};
  text-align: center;
  span {
    color: ${colors.pumpikinLight1};
  }
`;

export const Legenda = styled.span`
  color: ${colors.darkGray};
  font-size: 16px;
  font-family: "BrandonRegular", sans-serif;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 401px;
  position: relative;

  .swiper-pagination {
    position: unset;
    text-align: center;
    margin-top: 20px;
  }

  .swiper-pagination-bullet {
    border: 2px solid ${colors.mediumGray};
  }

  .swiper-pagination-bullet-active {
    background: ${colors.white};
    border: 2px solid ${colors.white};
  }
`;

export const Slide = styled.div`
  width: 401px;
  height: 401px;
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
  z-index: 99999;
  left: -60px;
  top: 200px;
  transition: 300ms ease;

  &:hover {
    transform: scale(1.2);
  }

  // @media screen and (max-width: 1100px) {
  //   transform: scale(1.3);
  //   right: 154px;
  // }

  // @media screen and (max-width: 680px) {
  //   left: 48px;
  //   top: 40%;
  // }
`;

export const ButtonNext = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  background-color: transparent;
  color: ${colors.white};
  position: absolute;
  z-index: 99999;
  right: -60px;
  top: 200px;
  transition: 300ms ease;

  &:hover {
    transform: scale(1.2);
  }

  // @media screen and (max-width: 1100px) {
  //   transform: scale(1.3);
  //   right: 154px;
  // }

  // @media screen and (max-width: 680px) {
  //   right: 48px;
  //   top: 40%;
  // }
`;
