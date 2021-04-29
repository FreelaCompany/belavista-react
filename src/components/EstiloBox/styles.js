import styled from "styled-components";
import { colors } from "../../styles/colors";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  width: 590px;
  height: 364px;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  .imgEstilo {
    width: 100%;
    height: 311px;
    object-fit: cover;
  }
`;

export const Titlestyle = styled.h1`
  color: ${colors.black};
  font-family: "BrandonBold";
  font-size: 22px;
  line-height: 47px;
  text-transform: uppercase;
`;
