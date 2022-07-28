import React from "react";
import { Parragraf } from "./Styles";
// import { BodyStyled } from "./Styles";
import Phrases from "./Phrases";

// el counter pasa de app a escena
const Scene = ({ counter }) => {
  return (
    <>
      {Phrases.map((item) => (
        <Parragraf key={item.id} active={item.id === counter ? true : false}>
          {item.quote}
        </Parragraf>
        
      ))}
    </>
  );
};
// utilizamos un map para recorrer el array y agarrar lo que necesitamos.
// el formato se lo damos dentro del map para que devuelva las frases separadas.

export default Scene;
