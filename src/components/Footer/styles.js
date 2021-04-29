import styled from "styled-components";
import { colors } from "../../styles/colors";

import { Link } from "react-router-dom";

import logo2 from "../../assets/images/logo2.png";

export const Container = styled.div`
  background: ${colors.grayLight3};
  width: 100%;
  padding: 56px 200px 45px 200px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const DivSuperior = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Logo = styled.div`
  width: 147px;
  height: 147px;
  background: url(${logo2}) no-repeat center center;
  background-size: cover;
  margin: 0 !important;
`;

export const DivEndereco = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 391px;
  height: 145px;
`;

export const Descricao = styled.p`
  color: ${colors.black};
  font-family: "BrandonRegular", sans-serif;
  font-size: 16px;
  line-height: 24px;
`;

export const Endereco = styled.p`
  color: ${colors.black};
  font-family: "BrandonRegular", sans-serif;
  font-size: 16px;
  line-height: 24px;

  .linkMaps {
    color: ${colors.pumpkin};
    margin: 5px;
  }
`;

export const Ligue = styled.p`
  color: ${colors.black};
  font-family: "BrandonRegular", sans-serif;
  font-size: 16px;
  line-height: 24px;
`;

export const DivMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const LinkFooter = styled(Link)`
  font-family: "BrandonBold", sans-serif;
  font-size: 16px;
  text-transform: uppercase;

  margin-bottom: 7px;
  color: ${colors.black};
  &:first-child {
    margin-bottom: 13px;
    color: ${colors.pumpkin};
  }
`;

export const DivSociais = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const TitleSociais = styled.h1`
  color: ${colors.pumpkin};
  font-family: "BrandonBold", sans-serif;
  font-size: 16px;
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
`;

export const Facebook = styled.p`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: ${colors.black};
  color: ${colors.white};
  text-align: center;
  padding: 10px;
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background: ${colors.black};
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const DivDev = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Direitos = styled.p`
  color: ${colors.black};
  font-family: "BrandonRegular", sans-serif;
  font-size: 16px;
  line-height: 24px;
`;

export const Dev = styled.p`
  color: ${colors.black};
  font-family: "BrandonRegular", sans-serif;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;
