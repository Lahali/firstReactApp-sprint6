import React, { Fragment } from "react";
import Parragraf from "./Parragraf";
import Phrases from "./Phrases";


// el counter pasa de app a escena
const Scene = () => {
  return (
    <Fragment>
      {Phrases.map((item) => (
        <Parragraf key={item.id}>{item.quote}</Parragraf>
      ))}
    </Fragment>
  );
};
// utilizamos un map para recorrer el array y agarrar lo que necesitamos.
// el formato se lo damos dentro del map para que devuelva las frases separadas.

export default Scene;
