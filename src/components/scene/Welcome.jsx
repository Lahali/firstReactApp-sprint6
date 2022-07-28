import React, { Fragment } from "react";
import { WelcomeButton } from "./Buttons";
import { TitleStyled, WelcomeParragrafStyled, WelcomeContainer } from "./Styles";

const Welcome = ({ hideWelcome }) => {
  return (
    <WelcomeContainer>
      <TitleStyled>BENVINGUTS!!</TitleStyled>
      <WelcomeParragrafStyled>
        Aquesta és la història d'un heroi "especial".
        Feta amb React i Styled Components.
      </WelcomeParragrafStyled>
      <WelcomeButton onClick={hideWelcome}>Comenzar</WelcomeButton>
    </WelcomeContainer>
  );
};

export default Welcome;
