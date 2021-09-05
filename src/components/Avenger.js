import React from "react";

function Avengers(props){

    return(
        <div className="avenger" onClick={() => props.chooseAvenger(props.elementId)}>
            <img className="avenger-photo" src={props.image} alt="show-avenger" />
            <span className="avenger-name">{props.name}</span>
        </div>
    )
}

export default Avengers;