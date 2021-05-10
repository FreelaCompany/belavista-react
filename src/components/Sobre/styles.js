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
  max-width: 1200px;
  width: 90%;
  background-image: url(${sobre1});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 77px 115px 100px 100px;

  @media (max-width: 420px) {
    padding: 167px 33px 60px 38px;
    .espaço {
      display: none;
    }
  }
  @media (min-width: 421px) and (max-width: 576px) {
    padding: 167px 33px 60px 38px;
    .espaço {
      display: none;
    }
  }

  @media (min-width: 577px) and (max-width: 767px) {
    padding: 167px 33px 60px 38px;

    .espaço {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 167px 33px 60px 38px;
    .espaço {
      display: none;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    padding: 35px 33px 60px 38px;

    .espaço {
      display: block;
    }
  }
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

  @media (max-width: 576px) {
    height: 204px !important;
    width: 204px !important;
    left: -19px;
    top: -19px;
    padding: 42px 31px;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    height: 270px !important;
    width: 270px !important;
    left: -19px;
    top: -65px;
    padding: 42px 31px 50px 31px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    height: 270px !important;
    width: 270px !important;
    left: -19px;
    top: -90px;
    padding: 42px 31px 50px 31px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    height: 350px;
    width: 350px;
    position: absolute;
    left: -29px;
    top: 48px;
    padding: 15px 55px 45px 60px;
    justify-content: space-evenly;
  }
  @media (min-width: 1200px) {
  }
`;

export const Title = styled.h1`
  font-family: "BrandonBold", sans-serif;
  color: ${colors.white};
  font-size: 20px;
  text-transform: uppercase;
  width: 200px;
  position: relative;

  @media (max-width: 576px) {
    font-size: 13px;
    width: 100%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    font-size: 18px;
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 18px;
    width: 100%;
  }
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

  @media (max-width: 576px) {
    font-size: 24px;
    width: 100%;
    line-height: 30px;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    font-size: 34px;
    width: 100%;
    line-height: 44px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 34px;
    width: 100%;
    line-height: 44px;
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

  @media (max-width: 576px) {
    width: 100%;
    justify-content: space-evenly;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    width: 100%;
    justify-content: space-evenly;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    justify-content: space-evenly;
  }
`;

export const Description = styled.p`
  font-family: "PlayFair", sans-serif;
  color: ${colors.white};
  font-size: 20px;
  width: 515px;
  line-height: 38px;

  @media (max-width: 420px) {
    font-size: 12px;
    width: 100%;
    line-height: 18px;
  }
  @media (min-width: 421px) and (max-width: 576px) {
    font-size: 15px;
    width: 100%;
    line-height: 30px;
  }
  @media (min-width: 577px) and (max-width: 991px) {
    font-family: "PlayFair", sans-serif;
    color: #fff;
    font-size: 17px;
    width: 100%;
    line-height: 29px;
    padding: 0 33px;
  }
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

  @media (max-width: 420px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 83px;
  }
  @media (min-width: 421px) and (max-width: 991px) {
    justify-content: space-evenly;
  }
`;

export const Location = styled.p`
  font-family: "BrandonMedium", sans-serif;
  width: 295px;
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 420px) {
    width: 100%;
    justify-content: center;
  }
  span {
    width: 85%;
    font-size: 15px;
    text-transform: uppercase;
    @media (max-width: 420px) {
      font-size: 10px;
      margin-left: 10px;
    }
    @media (min-width: 421px) and (max-width: 576px) {
      font-size: 12px;
    }
  }
`;

export const WhatsApp = styled.p`
  font-family: "BrandonMedium", sans-serif;
  width: 200px;
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 420px) {
    width: 100%;
    justify-content: center;
  }
  span {
    width: 80%;
    text-align: right;
    font-size: 20px;

    @media (max-width: 420px) {
      text-align: left;
      font-size: 18px;
      margin-left: 10px;
    }
    @media (min-width: 421px) and(max-width: 576px) {
      text-align: left;
      font-size: 18px;
    }
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
