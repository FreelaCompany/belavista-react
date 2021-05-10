import React from "react";

import { FaFacebookF, FaInstagram } from "react-icons/fa";

import {
  Container,
  Content,
  DivSuperior,
  Logo,
  DivEndereco,
  Descricao,
  Endereco,
  Ligue,
  DivMenu,
  DivSociais,
  TitleSociais,
  DivLogos,
  Instagram,
  Facebook,
  Separator,
  DivDev,
  Direitos,
  Dev,
  LinkFooter,
} from "./styles";

import map from "../../assets/images/map.png";

export default function Footer() {
  return (
    <Container>
      <Content>
        <DivSuperior>
          <Logo />
          <DivEndereco>
            <Descricao>Loja de móveis e alta decoração.</Descricao>
            <Endereco>
              Rua Dezenove-A, 172, Bela Vista, Volta Redonda/RJ CEP: 27240-120
              <a
                className="linkMaps"
                href="https://goo.gl/maps/LTE6m28BJDPMh7jd7"
                target="_blank"
                rel="noopener noreferrer">
                Abrir no Google Maps
              </a>
              |
              <a
                className="linkMaps"
                href="https://www.waze.com/pt-BR/live-map/directions/brazil/rio-de-janeiro/r.-dezenove-a,-172?place=ChIJu0xD3W6YngARAcJkQk7Cs6I&utm_campaign=waze_website&utm_medium=website_menu&utm_source=waze_website"
                target="_blank"
                rel="noopener noreferrer">
                Abrir no Waze
              </a>
            </Endereco>
            <Ligue>Ligue: (24) 3343-1350 | (24) 99317-9822</Ligue>
          </DivEndereco>
          <DivMenu>
            <LinkFooter>Menu</LinkFooter>
            <LinkFooter to="../">Início</LinkFooter>
            <LinkFooter to="../sobre">Sobre Nós</LinkFooter>
            <LinkFooter to="../ambientes">Ambientes e Inspirações</LinkFooter>
            <LinkFooter to="../contato">Contato</LinkFooter>
          </DivMenu>
          <DivSociais>
            <TitleSociais>Siga-nos</TitleSociais>
            <DivLogos>
              <a href="https://www.instagram.com/casabelavistavr/">
                <Instagram>
                  <FaInstagram size={32} />
                </Instagram>
              </a>
              <a href="https://www.facebook.com/casabelavistavr">
                <Facebook>
                  <FaFacebookF size={32} />
                </Facebook>
              </a>
            </DivLogos>
          </DivSociais>
        </DivSuperior>
        <Separator />
        <DivDev>
          <Direitos>Casa Bela Visa - Todos os direitos reservados.</Direitos>
          <Dev>
            Desenvolvido por: <img src={map} alt="" />
          </Dev>
        </DivDev>
      </Content>
    </Container>
  );
}
