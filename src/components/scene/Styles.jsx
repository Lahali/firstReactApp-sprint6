import styled, {createGlobalStyle} from "styled-components";
import uno from "../img/1.jpg"


export const Parragraf = styled.p`
  border: solid 2px #413f42;
  color: black;
  padding: 1rem;
  text-align: center;
  margin: 2rem;
  border-radius: 2rem;

  ${(props) =>
    props.active === true
      ? "background-color: #FF8C8C"
      : "background-color: rgba(255, 255, 255, 0.5) "}
`;

export const WelcomeContainer = styled.div`
  background-color: #06283D;
  /* para que ocupe todo el alto!!! */
  height: 100vh;
justify-content: center;
align-items: center;
padding: 5rem;
`

export const TitleStyled = styled.h2`
  color: #DFF6FF;
  text-align: center;

`

export const WelcomeParragrafStyled = styled.article`
  color: #DFF6FF;
  text-align: center;
 font-size: 20px;
 margin-bottom: 2rem;
`

export const Container= styled.div`
  background-image: url(${uno});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  
  
`

// export const BodyStyled = createGlobalStyle`
//    body{
//       background-image: ;
//        /* background: url("${props => props.image}") center no-repeat;     */
//        background-size: cover;
//        background-repeat: no-repeat;
//        background-attachment: fixed;
//    }
// `;

