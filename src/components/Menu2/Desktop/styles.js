import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../styles/colors";

import logo from "../../../assets/images/logo.png";

export const Container = styled.nav`
  width: 100%;
  height: 117px;
  background-color: transparent;
  top: 32px;
  z-index: 999;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Items = styled.ul`
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

export const Logo = styled.img.attrs({
  src: logo,
})`
  width: 100%;
  max-width: max-content;
  height: max-content;
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
