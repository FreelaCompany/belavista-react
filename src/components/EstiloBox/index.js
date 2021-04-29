import React from "react";
import { Container, Titlestyle } from "./styles";

export default function EstiloBox({ img, title, onclick, link }) {
  return (
    <Container onClick={onclick} to={link}>
      <img src={img} className="imgEstilo" alt="" />
      <Titlestyle>{title}</Titlestyle>
    </Container>
  );
}
