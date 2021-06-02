import styled from "styled-components";

import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Estilos = styled.section`
  max-width: 1220px;
  width: 90%;
  align-self: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 107px;
`;

export const TitlePage = styled.div`
  max-width: 1220px;
  width: 90%;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 36px 0;
`;

export const TitleAmbIns = styled.h1`
  margin-top: 245px;
  font-size: 43px;
  font-family: "BrandonBold";
  line-height: 47px;
  color: ${colors.black}000;
`;

export const SubtitlePagAmbIns = styled.p`
  max-width: 487px;
  width: 90%;
  font-size: 18px;
  font-family: "PlayFair", sans-serif;
  line-height: 28px;
  color: ${colors.veryDarkGray};
  margin-top: 27px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${colors.grayLight2};
  margin-bottom: 50px;
  margin-top: 30px;
`;
