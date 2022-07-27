import React, { Fragment, useState, useEffect } from "react";
import Scene from "./components/scene/Scene";
import "./App.css";
import Action from "./components/scene/Action";
import Phrases from "./components/scene/Phrases";


function App() {
  //poner aquí las funciones next y previous. Aquí iría toda la funcionalidad

  const [counter, setCounter] = useState(0);

  //ponemos así el useState porque es un array de objetos. Lo empezamos vacío para que recoja la info del useEffect
  const [selectedPhrase, setSelectedPhrase] = useState({})

  // hacemos un counter para luego buscar el elemento por id
  useEffect(() => {
    console.log(counter, "cambio");
  }, [counter]);

  const next = () => {
    if (counter >= Phrases.length) return setCounter(0);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const previous = () => {
    if (counter <= 0) return setCounter(4);
    setCounter((prevCounter) => prevCounter - 1);
  };

  useEffect(() => {
    setSelectedPhrase(Phrases.find((item) => item.id === counter))
  }, [counter])


  return (
    <Fragment>
      <Action next={next} previous={previous} />{" "}
      {/* //así estamos pasando las accciones por props */}
      <Scene Phrases={Phrases} counter={counter} selectedPhrase={selectedPhrase} />{" "}
      {/* // aquí hay q pasar el counter a escena */}
    </Fragment>
  );
}

export default App;
