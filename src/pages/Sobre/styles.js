import styled from "styled-components";

import sobrenosPNG from "../../assets/images/sobrenos.png";

import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.section`
  width: 100%;
  height: 670px;
  background-image: url(${sobrenosPNG});
  background-position: center;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  display: flex;
  align-self: center; // alinha elemento
  flex-direction: column;
  max-width: 802px;
  width: 100%;
  padding-top: 79px;
  padding-bottom: 50px;
`;

export const Title = styled.h1`
  font-family: "BrandonBold";
  font-size: 43px;
  line-height: 47px;
  color: ${colors.black};
  ${(props) =>
    props.parceiros &&
    `
      align-self: center;
      margin-top: 47px;
      margin-bottom: 43px;
      `}
`;

export const DivTexto = styled.div`
  margin-top: 43px;
  margin-bottom: 79px;
  width: 100%;
`;

export const Paragraph = styled.p`
  margin-bottom: 15px;
  font-family: "PlayFair";
  font-size: 18px;
  line-height: 28px;
  width: 100%;

  &:last-child {
    margin: 0 !important;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${colors.grayLight1};
`;

export const DivParceiros = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Parceiro = styled.img``;
