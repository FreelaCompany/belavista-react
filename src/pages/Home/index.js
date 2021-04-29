import React from "react";
import { Container } from "./styles";

import useWindowSize from "../../hooks/useWindowSize";

import Banner from "../../components/Banner";
import Sobre from "../../components/Sobre";
import { MenuDesktop as Menu, MenuMobile } from "../../components/Menu2";
import Orcamento from "../../components/Orcamento";
import InspiracaoAmbiente from "../../components/Inspiracao&Ambiente";
import Parceiros from "../../components/Parceiros";
import Footer from "../../components/Footer";
import Produtos from "../../components/Produtos";

export default function Home() {
  const window = useWindowSize();
  return (
    <Container>
      {window.width > 950 ? <Menu /> : <MenuMobile />}
      <Banner />
      <Sobre />
      <Produtos />
      <Orcamento />
      <InspiracaoAmbiente />
      <Parceiros />
      <Footer />
    </Container>
  );
}
