import React from "react";
import Button from "./Button";

const Action = ({next, previous}) => {

  //le llegan las funciones por props, no hay funciones en este componente

  //Mi idea es poner un contador para recorrer el array y seleccionar el id correspondiente
  

  return (
    <>
    {/* esto es el hijo y recibe del padre el onclick por props  */}
      <Button onClick={previous}>Anterior</Button>
      <Button onClick={next}>Següent</Button>
      {/* Counter: {counter} */}

    </>
  );
};

export default Action;
