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

import Menu from "../../components/Menu";

import Parceiros from "../../components/Parceiros";

import sier from "../../assets/images/parceiro1.png";
import bellart from "../../assets/images/parceiro2.png";
import greenhouse from "../../assets/images/parceiro3.png";
import Footer from "../../components/Footer";

export default function Sobre() {
  const window = useWindowSize();

  return (
    <Container>
      <Menu />
      <Banner />
      <Content>
        <Title>Sobre nós</Title>
        <DivTexto>
          <Paragraph>
            A Casa Bela Vista é um novo conceito no segmento de alta decoração
            na região Sul Fluminense. A loja consta com 22 ambiente que foram
            projetados e decorados pelos arquitetos mais renomados. São 1000 m²
            de mostra com ambientes únicos.
          </Paragraph>
          <Paragraph>
            Você encontra qualidade, móveis exclusivos assinados pelos maiores
            designers do mundo e grandes marcas. E variados estilos sendo
            clássico, romântico, moderno, vintage, retrô e rústico.
          </Paragraph>
          <Paragraph>
            Todas as opções de móveis expostos podem estar na sua casa! Mude
            completamente o seu ambiente com as opções da Casa Bela Vista!
          </Paragraph>
          <Paragraph>Inovação, design, requinte e exclusividade.</Paragraph>
        </DivTexto>
        <Divider />
      </Content>
      <Parceiros />
      <Footer />
    </Container>
  );
}
