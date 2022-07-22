import React, { Fragment } from "react";
import Button from "./Button"

const Action = ({phrases}) => {
// const previous = ({phrases}) => {
//     phrases.map((item) => {
//         if(item.id < 0) return 
//     })
// }


  return (
    <Fragment>
      <Button >Anterior</Button>
      <Button >Següent</Button>
    </Fragment>
  );
};

export default Action
