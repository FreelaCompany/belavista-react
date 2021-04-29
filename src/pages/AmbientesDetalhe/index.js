import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaArrowLeft } from "react-icons/fa";
import {
  Container,
  Estilos,
  TitlePage,
  BackButton,
  FollowArchitect,
  Instagram,
  Facebook,
  DivSociais,
  DivLogos,
  TitleAmb,
  SubtitleArq,
  Modal,
  BtnFecharModal,
  BoxModal,
} from "./styles";

import useWindowSize from "../../hooks/useWindowSize";

import { MenuDesktop as Menu, MenuMobile } from "../../components/Menu2";
import Footer from "../../components/Footer";
import EstiloBox from "../../components/EstiloBox";

import moderno from "../../assets/images/salarusticacomp.png";
import rustico from "../../assets/images/salarustcomp01.png";
import vintage from "../../assets/images/estante.png";
import retro from "../../assets/images/salarustcomp02.png";
import industrial from "../../assets/images/mesacadeira.png";
import tropical from "../../assets/images/poltrona.png";
import quarto from "../../assets/images/quarto.png";
import quartorustico from "../../assets/images/quartorustico.png";

export default function AmbientesDetalhe() {
  const window = useWindowSize();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  function handleShow(imagem) {
    setSelected(imagem);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <Container>
      {window.width > 950 ? <Menu /> : <MenuMobile />}

      <TitlePage>
        <BackButton to="/ambientes">
          <FaArrowLeft size={15} />
          VOLTAR
        </BackButton>
        <TitleAmb>Nome do ambiente, Nome do arquiteto</TitleAmb>
        <SubtitleArq>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </SubtitleArq>
        <DivSociais>
          <FollowArchitect>SIGA ESSE ARQUITETO(a):</FollowArchitect>
          <DivLogos>
            <Instagram>
              <FaInstagram size={22} />
            </Instagram>
            <Facebook>
              <FaFacebookF size={22} />
            </Facebook>
          </DivLogos>
        </DivSociais>
      </TitlePage>
      <Estilos>
        <EstiloBox onclick={() => handleShow(moderno)} img={moderno} />
        <EstiloBox onclick={() => handleShow(rustico)} img={rustico} />

        <EstiloBox onclick={() => handleShow(vintage)} img={vintage} />
        <EstiloBox onclick={() => handleShow(retro)} img={retro} />

        <EstiloBox onclick={() => handleShow(industrial)} img={industrial} />
        <EstiloBox onclick={() => handleShow(tropical)} img={tropical} />

        <EstiloBox onclick={() => handleShow(quarto)} img={quarto} />
        <EstiloBox
          onclick={() => handleShow(quartorustico)}
          img={quartorustico}
        />
      </Estilos>
      <Modal open={open} onClick={() => setOpen(!open)}>
        <BoxModal>
          <BtnFecharModal onClick={handleClose}>X</BtnFecharModal>
          {selected && <img src={selected} alt={"Imagem"} />}
        </BoxModal>
      </Modal>
      <Footer />
    </Container>
  );
}
