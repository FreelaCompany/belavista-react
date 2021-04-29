import styled, { css } from "styled-components";

import { colors } from "../../../styles/colors";

import logo from "../../../assets/images/logo.png";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  background-color: ${colors.grayishOrange};
  z-index: 1000;
  transition: all 300ms ease;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Items = styled.ul`
  display: ${({ open }) => (open ? "flex" : "none")};
  height: ${({ open }) => (open ? "100vh" : "unset")};
  align-items: center;
  justify-content: space-around;
  transition: all 300ms ease;
  flex-direction: column;
  padding: 150px;

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

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  color: ${colors.black};
  font-family: "MuseoSlab700", serif;
  font-size: 18px;
  z-index: 101;
  position: absolute;
  right: 32px;
  top: 100px;
  transform: translateY(-50%);

  svg {
    color: ${colors.black};
  }
`;

export const Bars = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  transition: all 200ms ease;

  > div {
    width: 100%;
    height: 3px;
    border-radius: 4px;
    background-color: ${({ open }) =>
      open ? `${colors.white}` : `${colors.black}`};
    transition: all 200ms ease;

    ${({ open }) =>
      open &&
      css`
        display: none;

        &:first-child {
          display: block;
          transform: translateY(9px) rotate(-45deg);
          width: 120%;
        }

        &:last-child {
          display: block;
          transform: translateY(-9px) rotate(45deg);
          width: 120%;
        }
      `}
  }
`;
