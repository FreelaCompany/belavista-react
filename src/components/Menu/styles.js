import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles/colors";
import logo from "../../assets/images/logo.png";

export const Container = styled.div`
  width: 100%;
  background-color: transparent;
  z-index: 999;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentDesktop = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1064px) {
    display: none;
  }
  @media (min-width: 1065px) and (max-width: 1199px) {
    width: 100%;
    display: flex;
  }
`;

export const MenuMobile = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.grayishOrange};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 9999;
`;

export const ContentMobile = styled.div`
  background-color: ${colors.grayishOrange};
  width: 100%;
  max-width: 1100px;
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: none;
  @media (max-width: 1064px) {
    display: flex;
    a {
      height: -webkit-fill-available;
    }
  }
  @media (min-width: 1065px) and (max-width: 1199px) {
    display: none;
  }
`;

export const IconMenu = styled.span`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconMenuClose = styled.span`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 30px;
  top: 30px;
`;

export const Logo = styled.img`
  width: 129px;
  height: 119px;
`;

export const LinkMenu = styled(Link)`
  text-transform: uppercase;
  font-family: "BrandonBold", sans-serif;
  color: ${colors.veryDarkBlue};
  transition: 300ms ease;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  &:hover {
    color: ${colors.veryDarkBlue};
    &:after {
      width: 100%;
    }
  }

  &:after {
    position: absolute;
    bottom: -10px;
    content: "";
    display: block;
    width: ${(props) => (props.active ? "100%" : 0)};
    height: 2px;
    border-radius: 1px;
    background: ${colors.veryDarkBlue};
    transition: 300ms ease;
    transform-origin: center center;
  }
`;

export const DivLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1064px) {
    height: 120px;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
`;

export const LinkLeft = styled(Link)`
  margin: 0 0 0 25px;
  color: ${colors.white};
  text-transform: uppercase;
  font-family: "DosisMedium";
  font-size: 18px;
  line-height: 24px;
  @media (max-width: 1064px) {
    margin: 0 !important;
  }
`;

export const DivRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
  @media (max-width: 1064px) {
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    height: 60%;
  }
`;

export const ItemsMobile = styled.ul`
  display: ${({ open }) => (open ? "flex" : "none")};
  height: ${({ open }) => (open ? "100vh" : "unset")};
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  transition: all 300ms ease;
  flex-direction: column;
  padding: 150px 0;

  li {
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
    a {
      text-transform: uppercase;
      font-family: "BrandonBold", sans-serif;
      color: ${colors.veryDarkBlue};
      transition: 300ms ease;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      @media (max-width: 320px) {
        font-size: 18px;
      }

      &:hover {
        color: ${colors.veryDarkBlue};
        &:after {
          width: 100%;
        }
      }

      &:after {
        position: absolute;
        bottom: -10px;
        content: "";
        display: block;
        width: 0;
        height: 2px;
        border-radius: 1px;
        background: ${colors.veryDarkBlue};
        transition: 300ms ease;
        transform-origin: center center;
      }
    }
  }
`;

export const ItemsDesktop = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    margin-right: 24px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const BtnWhatsapp = styled.a`
  background-color: ${colors.black};
  color: ${colors.white};
  text-transform: uppercase;
  width: 212px;
  height: 59px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "BrandonMedium";
  padding: 19px;
  border-radius: 3px;
  line-height: 20px;
`;

export const MenuRight = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1064px) {
    height: 120px;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
  }
`;

export const LinkRight = styled(Link)`
  margin: 0 0 0 25px;
  color: ${colors.white};
  font-family: "SourceSansProSemiBold";
  font-size: 16px;
  line-height: 20px;
  @media (max-width: 1064px) {
    margin: 0 !important;
  }
`;

export const DivContatoNumero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContatoRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .selectCidade {
    width: 170px;
    height: 35px;
  }
  .selectCidade__control {
    background-color: ${colors.black};
    border: none;
    box-shadow: none;
    height: unset;
    &:hover {
      border: none;
    }
  }
  .selectCidade__indicator-separator {
    width: 0;
    margin: 0;
    padding: 0;
  }
  .selectCidade__placeholder {
    color: ${colors.white};
  }
  .selectCidade__menu {
    z-index: 99999;
  }
`;

export const ContatoText = styled.p`
  margin: 0 12px;
  color: ${colors.white};
  font-family: "DosisMedium";
  font-size: 18px;
  line-height: 24px;
`;

export const NumeroSelecionado = styled.a`
  color: ${colors.pumpkinLight};
  font-family: "DosisMedium";
  font-size: 18px;
  line-height: 24px;
`;

export const DivSociais = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 22px;
  width: 50px;
  @media (max-width: 1064px) {
    margin: 0 !important;
  }
`;

export const LinkSocial = styled.a`
  cursor: pointer;
`;
