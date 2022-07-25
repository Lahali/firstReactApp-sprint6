
import styled from "styled-components"; 

const Parragraf = styled.p`
border: solid 2px #413F42;
color: #413F42;
padding: 1rem;
text-align: center;
margin: 2rem;
border-radius: 2rem;

/* para cambiar el color no hace falta una clase diferente, se hace con la pseudoclase active */
&:active {
border: solid  #FF8C8C;
/* #FF5D5D; color alternativo*/
background-color: #FF8C8C;
color: #4C3A51;
}
`

export default Parragraf
