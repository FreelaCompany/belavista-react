import React from "react";

import {
  Container,
  Content,
  DivLeft,
  Title,
  SubTitle,
  DivRight,
  Description,
  Separator,
  DivBottom,
  Location,
  WhatsApp,
  LocationIMG,
  WhatsAppIMG,
} from "./styles";

export default function Sobre() {
  return (
    <Container id="sobre">
      <Content>
        <DivLeft>
          <Title>Casa Bela Vista</Title>
          <SubTitle>
            Loja de móveis e alta decoração<span>.</span>
          </SubTitle>
        </DivLeft>
        <DivRight className="espaço"></DivRight>
        <DivRight>
          <Description>
            Queremos trazer mais personalidade pra sua casa ou empresa! Somos
            uma loja que acredita no poder de belos ambientes no cotidiano, por
            isso investimos para trazer até você não apenas designs bonitos, mas
            produtos práticos e de alto padrão.
          </Description>
          <Separator />
          <DivBottom>
            <Location>
              <LocationIMG />
              <span>
                Rua Dezenove-A, 172,
                <br /> Bela Vista, Volta Redonda/RJ
              </span>
            </Location>
            <WhatsApp>
              <WhatsAppIMG />
              <span>(24) 99317-9822</span>
            </WhatsApp>
          </DivBottom>
        </DivRight>
      </Content>
    </Container>
  );
}
