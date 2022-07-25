import React, { Fragment, useState, useEffect } from "react";
import Scene from "./components/scene/Scene";
import "./App.css";
import Action from "./components/scene/Action";
import Phrases from "./components/scene/Phrases";

function App() {
  //poner aquí las funciones next y previous. Aquí iría toda la funcionalidad

  const [counter, setCounter] = useState(0);

  

  useEffect(() => {
    console.log(counter, "cambio");
  }, [counter]);

  const next = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const previous = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <Fragment>
      <Action next={next} previous={previous} />{" "}
      {/* //así estamos pasando las accciones por props */}
      <Scene Phrases={Phrases} counter={counter} />{" "}
      {/* // aquí hay q pasar el counter a escena */}
    </Fragment>
  );
}

export default App;
