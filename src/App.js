import React from "react";
import Scene from "./components/scene/Scene"
import './App.css';

function App() {
  const phrases = {
    quote1: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
    quote2:  "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
    quote3: "L'heroi va decidir travessar la porta que el portava a casa",
    quote4: "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ...",
  }

  return (
 <Scene phrases = {phrases}/>
   );
 
}

export default App;
