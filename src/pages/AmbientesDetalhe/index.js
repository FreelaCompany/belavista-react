import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaFacebookF, FaInstagram, FaArrowLeft } from "react-icons/fa";
import ListAmbientesActions from "../../store/ducks/ambientes-list";
import api from "../../services/api";
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
import { useParams } from "react-router";

export default function AmbientesDetalhe() {
  const window = useWindowSize();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [fotos, setFotos] = useState([]);
  const params = useParams();

  function handleShow(imagem) {
    setSelected(imagem);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const dispatch = useDispatch();

  async function handleSearchData() {
    dispatch(ListAmbientesActions.listAmbientesRequest());
  }

  useEffect(() => {
    handleSearchData();
  }, []);

  const { data: ambientesList } = useSelector((state) => state.ambientesList);

  const ambiente = ambientesList?.filter(
    (el) => el.id_ambiente === parseInt(params.id)
  )[0];

  const getFotos = async () => {
    try {
      const res = await api.get(
        `/ambiente/fotos?idAmbiente=${ambiente.id_ambiente}`
      );
      setFotos(res?.data?.data);
    } catch (error) {
      console.log("arquitetos error", error?.response?.data);
    }
  };

  useEffect(() => {
    getFotos();
  }, [ambiente]);

  return (
    <Container>
      {window.width > 950 ? <Menu /> : <MenuMobile />}

      <TitlePage>
        <BackButton to="/ambientes">
          <FaArrowLeft size={15} />
          VOLTAR
        </BackButton>
        <TitleAmb>{`${ambiente?.nome_ambiente}, ${ambiente?.nome_arquiteto}`}</TitleAmb>
        <SubtitleArq>
          {`${ambiente?.descricao_ambiente} - ${ambiente?.descricao_arquiteto}`}
        </SubtitleArq>
        <DivSociais>
          <FollowArchitect>SIGA ESSE ARQUITETO(a):</FollowArchitect>
          <DivLogos>
            <Instagram href={ambiente?.instagram} target="_blank">
              <FaInstagram size={22} />
            </Instagram>
            <Facebook href={ambiente?.facebook} target="_blank">
              <FaFacebookF size={22} />
            </Facebook>
          </DivLogos>
        </DivSociais>
      </TitlePage>
      <Estilos>
        {fotos.map((foto, index) => (
          <EstiloBox
            key={index}
            onclick={() => handleShow(foto.foto)}
            img={foto.foto}
          />
        ))}
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
