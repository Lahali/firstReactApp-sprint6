import React, { Fragment } from "react";
import Parragraf from "./Parragraf";

const Scene = ({ phrases }) => {
  return (
    <Fragment>
      {phrases.map((item) => (
        <Parragraf key={item.id}>{item.quote}</Parragraf>
      ))}
    </Fragment>
  );
};
// utilizamos un map para recorrer el array y agarrar lo que necesitamos.
// el formato se lo damos dentro del map para que devuelva las frases separadas.

export default Scene;
