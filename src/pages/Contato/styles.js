import styled from "styled-components";

import { colors } from "../../styles/colors";

import contatoPNG from "../../assets/images/contato.png";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.section`
  width: 100%;
  height: 670px;
  background-image: url(${contatoPNG});
  background-position: center;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  max-width: 802px;
  width: 100%;
  padding-top: 79px;
  padding-bottom: 50px;
`;

export const Title = styled.h1`
  font-family: "BrandonBold";
  font-size: 43px;
  line-height: 47px;
  color: ${colors.black};
`;

export const DivTexto = styled.div`
  margin-top: 43px;
  margin-bottom: 79px;
  width: 100%;
`;

export const SubTitle = styled.span`
  max-width: 487px;
  height: 54px;
  font-family: "PlayFair";
  font-size: 18px;
  line-height: 28px;
  margin-top: 43px;
  margin-bottom: 40px;

  ${(props) =>
    props.ligue &&
    `
        max-width: 318px;
        `}

  ${(props) =>
    props.endereco &&
    `
        max-width: 437px;
        `}
`;

export const WhatsAppBox = styled.a`
  height: 67px;
  width: 225px;
  margin-top: 40px;
  border-style: solid;
  border-width: 1px;
  border-color: ${colors.pumpikinLight1};
  padding: 19px 9px 21px 17px;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const NumeroWhatsapp = styled.span`
  font-family: "BrandonBold";
  font-size: 20px;
  color: ${colors.black};
`;

export const Divider = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${colors.grayLight1};

  ${(props) =>
    props.contato &&
    `
      margin-top: 56px;
      margin-bottom: 55px;
    `}
`;

export const DataRegistration = styled.div`
  font-family: "BrandonRegular";
  font-size: 18px;
  border: ${colors.grayLight4};
  display: flex;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const InputText = styled.input`
  width: 385px;
  height: 60px;
  margin-top: 24px;
  margin-bottom: 24px;
  padding-left: 18px;
  border: 1px solid ${colors.grayLight4};
  &:first-child {
    margin-bottom: 0;
  }

  ${(props) => props.nome && `width: 100%;`}
`;

export const RowForm = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 158px;
  padding-left: 18px;
  padding-top: 13px;
  border: 1px solid ${colors.grayLight4};
  resize: none;
`;

export const Button = styled.button`
  margin-top: 45px;
  width: 212px;
  height: 59px;
  background-color: ${colors.pumpikinLight1};
  color: ${colors.white}fff;
  font-family: "BrandonMedium";
  border-radius: 3px;
`;

export const Iframe = styled.iframe`
  width: 802px;
  height: 487px;
  border: none;
`;
