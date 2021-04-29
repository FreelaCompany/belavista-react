import React from "react";
import { Container, Estilos, TitlePage, Divider, TitleAmbIns, SubtitlePagAmbIns  } from "./styles";

import useWindowSize from "../../hooks/useWindowSize";

import { MenuDesktop as Menu, MenuMobile } from "../../components/Menu2";
import Footer from "../../components/Footer";
import EstiloBox from "../../components/EstiloBox";

import moderno from "../../assets/images/moderno.png";
import rustico from "../../assets/images/rustico.png";
import vintage from "../../assets/images/vintage.png";
import retro from "../../assets/images/retro.png";
import industrial from "../../assets/images/industrial.png";
import tropical from "../../assets/images/tropical.png";

export default function Ambientes() {
  const window = useWindowSize();
  return (
    <Container>
      {window.width > 950 ? <Menu /> : <MenuMobile />}
      <TitlePage>
        <TitleAmbIns>Ambientes e Inspirações</TitleAmbIns>
        <SubtitlePagAmbIns>
          Veja referências de decoração em diversos estilos e ambientes para
          você se inspirar.
        </SubtitlePagAmbIns>
      </TitlePage>
      <Estilos>
        <EstiloBox
          link="/ambientes-detalhe"
          img={moderno}
          title="Nome do ambiente, Nome do arquiteto"
        />
        <EstiloBox
          link="/ambientes-detalhe"
          img={rustico}
          title="Nome do ambiente, Nome do arquiteto"
        />
        <Divider />
        <EstiloBox
          link="/ambientes-detalhe"
          img={vintage}
          title="Nome do ambiente, Nome do arquiteto"
        />
        <EstiloBox
          link="/ambientes-detalhe"
          img={retro}
          title="Nome do ambiente, Nome do arquiteto "
        />
        <Divider />
        <EstiloBox
          link="/ambientes-detalhe"
          img={industrial}
          title="Nome do ambiente, Nome do arquiteto"
        />
        <EstiloBox
          link="/ambientes-detalhe"
          img={tropical}
          title="Nome do ambiente, Nome do arquiteto"
        />
      </Estilos>
      <Footer />
    </Container>
  );
}
