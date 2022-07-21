
import React, {Fragment} from "react"

const Scene = ({phrases}) => {
    return (
        <Fragment>
            <p>{phrases.quote1} </p>
            <p>{phrases.quote2} </p>
            <p>{phrases.quote3} </p>
            <p>{phrases.quote4} </p>
        </Fragment>
    )
}


export default Scene
