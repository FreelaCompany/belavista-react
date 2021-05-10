import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp, FaBars } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

import {
  Container,
  ContentDesktop,
  ContentMobile,
  IconMenu,
  MenuMobile,
  IconMenuClose,
  Logo,
  LinkMenu,
  ItemsMobile,
  ItemsDesktop,
  BtnWhatsapp,
} from "./styles";

import logoMenu from "../../assets/images/logo.png";

export default function Menu() {
  const [menuMobile, setMenuMobile] = useState(false);
  const location = useLocation();

  return menuMobile ? (
    <MenuMobile>
      <IconMenuClose onClick={() => setMenuMobile(!menuMobile)}>
        <AiOutlineCloseCircle color="#fff" size={32} />
      </IconMenuClose>
      <ItemsMobile open={menuMobile}>
        <li>
          <LinkMenu active={location.pathname === "/"} to="/">
            Início
          </LinkMenu>
        </li>
        <li>
          <LinkMenu active={location.pathname === "/sobre"} to="/sobre">
            Sobre Nós
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={
              location.pathname === "/ambientes" ||
              location.pathname === "/ambientes-detalhe"
            }
            to="/ambientes">
            Ambientes e Inspirações
          </LinkMenu>
        </li>
        <li>
          <LinkMenu active={location.pathname === "/contato"} to="/contato">
            Contato
          </LinkMenu>
        </li>
        <BtnWhatsapp
          href="https://api.whatsapp.com/send?phone=5524993179822"
          target="_blank">
          <FaWhatsapp />
          nosso whatsapp
        </BtnWhatsapp>
      </ItemsMobile>
    </MenuMobile>
  ) : (
    <Container>
      <ContentDesktop>
        <Link to="/">
          <Logo src={logoMenu} />
        </Link>
        <ItemsDesktop>
          <li>
            <LinkMenu active={location.pathname === "/"} to="/">
              Início
            </LinkMenu>
          </li>
          <li>
            <LinkMenu active={location.pathname === "/sobre"} to="/sobre">
              Sobre Nós
            </LinkMenu>
          </li>
          <li>
            <LinkMenu
              active={
                location.pathname === "/ambientes" ||
                location.pathname === "/ambientes-detalhe"
              }
              to="/ambientes">
              Ambientes e Inspirações
            </LinkMenu>
          </li>
          <li>
            <LinkMenu active={location.pathname === "/contato"} to="/contato">
              Contato
            </LinkMenu>
          </li>
          <BtnWhatsapp
            href="https://api.whatsapp.com/send?phone=5524993179822"
            target="_blank">
            <FaWhatsapp />
            nosso whatsapp
          </BtnWhatsapp>
        </ItemsDesktop>
      </ContentDesktop>
      <ContentMobile>
        <Link to="/">
          <Logo src={logoMenu} />
        </Link>
        <IconMenu onClick={() => setMenuMobile(!menuMobile)}>
          <FaBars color="#fff" size={25} />
        </IconMenu>
      </ContentMobile>
    </Container>
  );
}
