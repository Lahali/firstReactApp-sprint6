import React, { Fragment, useState } from "react";
import Scene from "./components/scene/Scene";
import "./App.css";

function App() {
  const phrases = [
    {
      id: 1,
      quote:
        "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
    },
    {
      id: 2,
      quote:
        "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
    },
    {
      id: 3,
      quote: "L'heroi va decidir travessar la porta que el portava a casa",
    },
    {
      id: 4,
      quote:
        "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ...",
    },
  ];

  return (
    <Fragment>
      <Scene phrases={phrases} />
    </Fragment>
  );
}

export default App;
