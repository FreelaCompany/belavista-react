import React, { useState, useEffect } from "react";
import ListActions from "../../store/ducks/produtos-list";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Title,
  DivBotoes,
  ButtonFiltro,
  DivProdutos,
  Produto,
} from "./styles";

export default function Produtos() {
  const [categoria, setCategoria] = useState(1);

  const dispatch = useDispatch();

  async function handleSearchData() {
    dispatch(ListActions.listRequest());
  }

  useEffect(() => {
    handleSearchData();
  }, []);

  const { data: produtosList } = useSelector((state) => state.produtosList);

  return (
    <Container>
      <Title>Produtos em Destaque</Title>
      <DivBotoes>
        <ButtonFiltro onClick={() => setCategoria(1)} active={categoria === 1}>
          Sala de Jantar
        </ButtonFiltro>
        <ButtonFiltro onClick={() => setCategoria(2)} active={categoria === 2}>
          Sala de Estar
        </ButtonFiltro>
        <ButtonFiltro onClick={() => setCategoria(3)} active={categoria === 3}>
          Quarto
        </ButtonFiltro>
        <ButtonFiltro onClick={() => setCategoria(4)} active={categoria === 4}>
          Iluminação
        </ButtonFiltro>
        <ButtonFiltro onClick={() => setCategoria(5)} active={categoria === 5}>
          Escritório
        </ButtonFiltro>
        <ButtonFiltro onClick={() => setCategoria(6)} active={categoria === 6}>
          Varanda
        </ButtonFiltro>
      </DivBotoes>
      <DivProdutos>
        {produtosList
          ?.filter((produto) => produto.id_categoria === categoria)
          .map((produto, index) => (
            <Produto key={index} url={produto.foto} />
          ))}
      </DivProdutos>
    </Container>
  );
}
