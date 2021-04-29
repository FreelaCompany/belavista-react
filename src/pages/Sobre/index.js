import React from "react";
import {
  Container,
  Banner,
  Content,
  Title,
  DivTexto,
  Paragraph,
  Divider,
  DivParceiros,
  Parceiro,
} from "./styles";

import useWindowSize from "../../hooks/useWindowSize";

import { MenuDesktop as Menu, MenuMobile } from "../../components/Menu2";

import sier from "../../assets/images/parceiro1.png";
import bellart from "../../assets/images/parceiro2.png";
import greenhouse from "../../assets/images/parceiro3.png";
import Footer from "../../components/Footer";

export default function Sobre() {
  const window = useWindowSize();

  return (
    <Container>
      {window.width > 950 ? <Menu /> : <MenuMobile />}
      <Banner />
      <Content>
        <Title>Sobre nós</Title>
        <DivTexto>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
          <Paragraph>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </Paragraph>
          <Paragraph>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate.
          </Paragraph>
        </DivTexto>
        <Divider />
        <Title parceiros>Marcas Parceiras</Title>
        <DivParceiros>
          <Parceiro src={sier} alt="" />
          <Parceiro src={bellart} alt="" />
          <Parceiro src={greenhouse} alt="" />
        </DivParceiros>
      </Content>
      <Footer />
    </Container>
  );
}
