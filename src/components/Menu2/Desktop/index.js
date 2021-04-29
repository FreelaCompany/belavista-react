import React from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Container,
  Content,
  Items,
  Logo,
  BtnWhatsapp,
  LinkMenu,
} from "./styles";

import { FaWhatsapp } from "react-icons/fa";

export default function Menu() {
  const location = useLocation();

  return (
    <Container>
      <Content>
        <Link to="/">
          <Logo />
        </Link>
        <Items>
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
        </Items>
      </Content>
    </Container>
  );
}
