import styled from "styled-components";

import { colors } from "../../styles/colors";

export const Container = styled.section`
  width: 100%;
  background: ${colors.white};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${colors.black};
  font-family: "BrandonBlack", sans-serif;
  font-size: 22px;
  line-height: 38px;
  text-transform: uppercase;
`;

export const DivBotoes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 800px;
  margin: 15px 0;
`;

export const ButtonFiltro = styled.button`
  width: auto;
  height: 21px;
  font-size: 15px;
  font-family: "BrandonBlack", sans-serif;
  line-height: 38px;
  text-transform: uppercase;
  color: ${colors.veryDarkGray2};
  ${(props) => props.active && `color: ${colors.black};`};
`;

export const DivProdutos = styled.div`
  width: 1220px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const Produto = styled.div`
  width: 385px;
  height: 385px;
  background: ${({ url }) =>
    url ? `url(${url}) no-repeat center center;` : `none`};
  background-size: cover;
  margin: 20px 0;
`;
