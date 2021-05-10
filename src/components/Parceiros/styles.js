import styled from "styled-components";

import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 308px;
  background: ${colors.white};
  padding: ${(props) => (props.sobre ? "42px 72px 72px 72px" : "72px")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${colors.black};
  font-family: "BrandonBold", sans-serif;
  font-size: 43px;
  line-height: 47px;
  width: 324px;
`;

export const Content = styled.div`
  width: 70%;
  height: 87px;
  position: relative;

  .swiper-pagination {
    position: unset;
    text-align: center;
    margin-top: 20px;
  }

  .swiper-pagination-bullet {
    border: 2px solid ${colors.grayLight};
  }

  .swiper-pagination-bullet-active {
    background: ${colors.black};
    border: 2px solid ${colors.black};
  }
`;

export const Slide = styled.div`
  width: 205px;
  height: 87px;
  background: ${({ url }) =>
    url ? `url(${url}) no-repeat center center;` : `none`};
`;
