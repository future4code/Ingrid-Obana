import React from "react";

const Match = (props) => {
    return(
        <div>
            <p>{props.name}</p>
            <img src= {props.photo} alt=""/>
        </div>
    )
}

export default Match;