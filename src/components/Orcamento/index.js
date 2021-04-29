import React from "react";

import { FaWhatsapp } from "react-icons/fa";

import {
  Container,
  Content,
  DivLeft,
  DivRight,
  Title,
  Description,
  WhatsApp,
} from "./styles";

export default function Orcamento() {
  return (
    <Container>
      <Content>
        <DivLeft />
        <DivRight>
          <Title>
            Orçamento por WhatsApp<span>.</span>
          </Title>
          <Description>
            Consulte nossos produtos e preços direto pelo WhatsApp. Nossa equipe
            terá prazer em atende-lo(a).
          </Description>
          <WhatsApp>
            <FaWhatsapp size={28} />
            <span>(24) 99317-9822</span>
          </WhatsApp>
        </DivRight>
      </Content>
    </Container>
  );
}
