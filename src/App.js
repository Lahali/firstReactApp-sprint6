import React, { Fragment, useState, useEffect } from "react";
import Scene from "./components/scene/Scene";
import "./App.css";
import Action from "./components/scene/Action";
import Phrases from "./components/scene/Phrases";
import { BodyStyled, Container } from "./components/scene/Styles";
import Welcome from "./components/scene/Welcome";

function App() {
  //poner aquí las funciones next y previous. Aquí iría toda la funcionalidad

  const [counter, setCounter] = useState(0);
  //ponemos así el useState porque es un array de objetos. Lo empezamos vacío para que recoja la info del useEffect
  const [selectedPhrase, setSelectedPhrase] = useState({});

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
    setSelectedPhrase(Phrases.find((item) => item.id === counter));
  }, [counter]);

  //ahora va la lógica de la página de inicio, para que se muestre una sola vez
  //para la página de inicio
  const [showWelcome, setShowWelcome] = useState(true);
  
  // para evitar el re-renderizado, lo ponemos así porque sino entra en bucle infinito
  const hideWelcome = () => {
     setShowWelcome(prev => !prev)
  }

  return (
    <>

      {showWelcome ? (
        <Welcome hideWelcome = {hideWelcome} />
      ) : (
      <>
        <Container>
        <Action next={next} previous={previous} />
        {/* //así estamos pasando las accciones por props */}
        <Scene
          Phrases={Phrases}
          counter={counter}
          selectedPhrase={selectedPhrase}
        />
        </Container>
      </>
       )}
    </>
  );
}

export default App;
