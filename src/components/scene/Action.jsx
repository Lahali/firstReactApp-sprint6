import React, { Fragment, useState } from "react";
import Button from "./Button";
import ParragrafSelected from "./ParragrafSelected";

const Action = ({ phrases }) => {

  //Mi idea es poner un contador para recorrer el array
  const [counter, setCounter] = useState(0)

  const next = ({phrases}) => {
    setCounter(counter + 1)
    console.log(counter, "next")
    {phrases.map((item, index) => {
      <ParragrafSelected key={index}>{item[counter].quote}</ParragrafSelected>
    })}
  };

  // const previous = () => {
  //   setCounter(counter - 1)
  //   console.log(counter, "previous")
  //}

  return (
    <Fragment>
      <Button >Anterior</Button>
      <Button onClick={next}>Següent</Button>
    </Fragment>
  );
};

export default Action;
