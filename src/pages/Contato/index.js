import React from "react";

import {
  Container,
  Banner,
  Content,
  Title,
  SubTitle,
  WhatsAppBox,
  NumeroWhatsapp,
  Divider,
  DataRegistration,
  Form,
  RowForm,
  InputText,
  TextArea,
  Button,
  Iframe,
} from "./styles";

import useWindowSize from "../../hooks/useWindowSize";

import { FaWhatsapp } from "react-icons/fa";

import { MenuDesktop as Menu, MenuMobile } from "../../components/Menu2";
import Footer from "../../components/Footer";
import { colors } from "../../styles/colors";

export default function Contato() {
  const window = useWindowSize();

  return (
    <Container>
      {window.width > 950 ? <Menu /> : <MenuMobile />}
      <Banner />
      <Content>
        <Title>Orçamentos por WhatsApp</Title>
        <SubTitle>
          Consulte nossos produtos e preços direto pelo WhatsApp. Nossa equipe
          terá prazer em atende-lo(a).
        </SubTitle>
        <WhatsAppBox
          href="https://api.whatsapp.com/send?phone=5524993179822"
          target="_blank">
          <FaWhatsapp size={30} color={colors.pumpikinLight1} />
          <NumeroWhatsapp>(24) 99317-9822</NumeroWhatsapp>
        </WhatsAppBox>
        <Divider contato />
        <Title contato>Contato</Title>
        <SubTitle ligue>
          Ligue: (24) 3343-1350 | (24) 99317-9822. Ou mande-nos uma mensagem:
        </SubTitle>
        <DataRegistration>
          <Form>
            <InputText nome type="text" placeholder="Seu Nome" />
            <RowForm>
              <InputText type="text" placeholder="E-mail" />
              <InputText type="text" placeholder="Telefone" />
            </RowForm>
            <TextArea placeholder="Mensagem" />
            <Button>ENVIAR MENSAGEM</Button>
          </Form>
        </DataRegistration>
        <Divider contato />
        <Title>Onde Estamos</Title>
        <SubTitle endereco>
          Rua Dezenove-A, 172, Bela Vista, Volta Redonda/RJ CEP: 27240-120
        </SubTitle>
        <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29492.794352275087!2d-44.5030786!3d-22.4816875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e986edd434cbb%3A0xa2b3c24e4264c201!2sR.%20Dezenove-A%2C%20172%20-%20Bela%20Vista%2C%20Volta%20Redonda%20-%20RJ%2C%2027262-305!5e0!3m2!1spt-BR!2sbr!4v1617906780902!5m2!1spt-BR!2sbr" />
      </Content>
      <Footer />
    </Container>
  );
}
