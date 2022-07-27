import styled, { createGlobalStyle } from "styled-components";
// import primera from "../img/primera.jpg"

export const Parragraf = styled.p`
  border: solid 2px #413f42;
  color: #413f42;
  padding: 1rem;
  text-align: center;
  margin: 2rem;
  border-radius: 2rem;

  ${(props) =>
    props.active === true
      ? "background-color: #FF8C8C"
      : " "}
`;

export const BodyStyled = createGlobalStyle`
   body{
     ${(props) => props.active === true ? "background-image : props.image" : " "}
       background-size: cover;
       background-repeat: no-repeat;
       background-attachment: fixed;
   }
`;

