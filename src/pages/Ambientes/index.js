import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Estilos,
  TitlePage,
  TitleAmbIns,
  SubtitlePagAmbIns,
} from "./styles";
import useWindowSize from "../../hooks/useWindowSize";

import ListAmbientesActions from "../../store/ducks/ambientes-list";

import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import EstiloBox from "../../components/EstiloBox";

export default function Ambientes() {
  const window = useWindowSize();
  const dispatch = useDispatch();

  async function handleSearchData() {
    dispatch(ListAmbientesActions.listAmbientesRequest());
  }

  useEffect(() => {
    handleSearchData();
  }, []);

  const { data: ambientesList } = useSelector((state) => state.ambientesList);

  return (
    <Container>
      <Menu />
      <TitlePage>
        <TitleAmbIns>Ambientes e Inspirações</TitleAmbIns>
        <SubtitlePagAmbIns>
          Veja referências de decoração em diversos estilos e ambientes para
          você se inspirar.
        </SubtitlePagAmbIns>
      </TitlePage>
      <Estilos>
        {ambientesList?.map((ambiente) => (
          <EstiloBox
            link={`/ambientes/${ambiente.id_ambiente}`}
            img={ambiente.foto}
            title={`${ambiente.nome_ambiente}, ${ambiente.nome_arquiteto}`}
          />
        ))}
      </Estilos>
      <Footer />
    </Container>
  );
}
