import styled from "styled-components";

import { colors } from "../../styles/colors";

import orcamento from "../../assets/images/orcamento.png";

export const Container = styled.div`
  width: 100%;
  padding-top: 26px;
  padding-bottom: 42px;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    justify-content: space-around;
  }
`;

export const DivLeft = styled.div`
  width: 774px;
  height: 444px;
  background-image: url(${orcamento});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 575px) {
    width: 320px;
    height: 200px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 450px;
    height: 320px;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 300px;
    height: 260px;
  }
`;

export const DivRight = styled.div`
  min-height: 246px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.h1`
  width: 286px;
  height: 106px;
  font-family: "BrandonBold", sans-serif;
  font-size: 43px;
  line-height: 47px;
  color: ${colors.black};
  span {
    color: ${colors.pumpikinLight1};
  }

  @media (max-width: 1199px) {
    width: 217px;
    font-size: 33px;
    line-height: 40px;
  }
`;

export const Description = styled.p`
  width: 487px;
  height: 54px;
  font-size: 18px;
  font-family: "PlayFair", sans-serif;
  line-height: 28px;
  color: ${colors.veryDarkGray};

  @media (max-width: 575px) {
    max-width: 350px;
    width: 90%;
    min-height: 100px;
    font-size: 16px;
    line-height: 28px;
  }
  @media (min-width: 576px) and (max-width: 1199px) {
    width: 409px;
    height: 100px;
    font-size: 16px;
    line-height: 28px;
  }
`;

export const WhatsApp = styled.p`
  font-family: "BrandonMedium", sans-serif;
  width: 200px;
  color: ${colors.black};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    width: 80%;
    text-align: right;
    font-size: 20px;
  }

  svg {
    color: ${colors.pumpikinLight1};
  }
`;
