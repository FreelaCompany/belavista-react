import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Content,
  Items,
  Logo,
  BtnWhatsapp,
  MenuButton,
  Bars,
} from "./styles";

import { FaWhatsapp } from "react-icons/fa";

export default function Menu() {
  const [abrir, setAbrir] = useState(false);
  return (
    <Container>
      <Content>
        <Link to="/">
          <Logo />
        </Link>
        <MenuButton type="button" onClick={() => setAbrir(!abrir)}>
          <Bars open={abrir}>
            <div />
            <div />
            <div />
          </Bars>
        </MenuButton>
        <Items open={abrir}>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre Nós</Link>
          </li>
          <li>
            <Link to="/ambientes">Ambientes e Inspirações</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
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
