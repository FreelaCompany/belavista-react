import styled from "styled-components";

import { colors } from "../../styles/colors";

import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Estilos = styled.section`
  width: 1220px;
  align-self: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 107px;

  .img {
    width: 590px;
    height: 418px;
  }
`;

export const TitlePage = styled.div`
  width: 1220px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 245px;
  margin-bottom: 56px;
`;

export const TitleAmb = styled.h1`
  font-size: 43px;
  font-family: "BrandonBold";
  line-height: 47px;
  color: ${colors.black}000;
  margin-bottom: 27px;
`;

export const SubtitleArq = styled.p`
  height: 140px;
  width: 910px;
  font-size: 18px;
  font-family: "PlayFair", sans-serif;
  line-height: 28px;
  color: ${colors.veryDarkGray};
`;

export const BackButton = styled(Link)`
  width: 90px;
  font-family: "BrandonBold";
  color: ${colors.pumpikinLight1};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const FollowArchitect = styled.h3`
  margin-bottom: 25px;
`;

export const DivSociais = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 40px;
`;

export const DivLogos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 117px;
  margin-top: 13px;
`;

export const Instagram = styled.p`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: ${colors.black};
  color: ${colors.white};
  text-align: center;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Facebook = styled.p`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: ${colors.black};
  color: ${colors.white};
  text-align: center;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 50;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 130px 90px 90px 90px;
`;

export const BoxModal = styled.div`
  position: relative;
  /* background-color: rgba(51,23,123,0.85); */
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  height: 90%;
  /* max-height: 531px; */
  text-align: center;
  /* padding: 40px 0;*/
  img {
    width: 100%;
    max-width: 100%;
    border-radius: 5px;
  }
  @media only screen and (max-width: 575px) {
    width: 95%;
    height: 90%;
  }
`;

export const BtnFecharModal = styled.a`
  position: absolute;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border-radius: 50%;
  background-color: ${colors.white};
  color: ${colors.black};
  top: -20px;
  right: -20px;
  cursor: pointer;
`;
