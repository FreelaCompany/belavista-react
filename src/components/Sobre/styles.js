import styled from "styled-components";

import { colors } from "../../styles/colors";

import imgLocation from "../../assets/images/location.png";
import imgWhatsapp from "../../assets/images/whatsapp.png";

import sobre1 from "../../assets/images/sobre1.png";
import sobre2 from "../../assets/images/sobre2.png";

export const Container = styled.div`
  width: 100%;
  background: ${colors.white};
  display: flex;
  justify-content: center;
  padding: 64px 0 32px 0;
`;

export const Content = styled.div`
  height: 532px;
  width: 1200px;
  background-image: url(${sobre1});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 77px 115px 100px 100px;
`;

export const DivLeft = styled.div`
  height: 464px;
  width: 468px;
  background-image: url(${sobre2});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: -29px;
  padding: 106px 121px 157px 96px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.h1`
  font-family: "BrandonBold", sans-serif;
  color: ${colors.white};
  font-size: 20px;
  text-transform: uppercase;
  width: 200px;
  position: relative;
`;

export const SubTitle = styled.p`
  font-size: 43px;
  font-family: "BrandonBold", sans-serif;
  color: ${colors.white};
  width: 248px;
  line-height: 47px;
  position: relative;

  span {
    color: ${colors.pumpikinLight1};
  }
`;

export const DivRight = styled.div`
  width: 580px;
  height: 310px;
  background: transparent;
  align-self: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Description = styled.p`
  font-family: "PlayFair", sans-serif;
  color: ${colors.white};
  font-size: 20px;
  width: 515px;
  line-height: 38px;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.white};
`;

export const DivBottom = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Location = styled.p`
  font-family: "BrandonMedium", sans-serif;
  width: 295px;
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    width: 85%;
    font-size: 15px;
    text-transform: uppercase;
  }
`;

export const WhatsApp = styled.p`
  font-family: "BrandonMedium", sans-serif;
  width: 200px;
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    width: 80%;
    text-align: right;
    font-size: 20px;
  }
`;

export const LocationIMG = styled.img.attrs({
  src: imgLocation,
})`
  width: 100%;
  max-width: max-content;
  height: max-content;
`;

export const WhatsAppIMG = styled.img.attrs({
  src: imgWhatsapp,
})`
  width: 100%;
  max-width: max-content;
  height: max-content;
`;
