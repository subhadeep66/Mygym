import React from "react";
function Membership(props){
    return(
        <div className="membership">
            <h1 id="trainer">{props.name}</h1>
            <h3 id="trainer_q">{props.speciality}</h3>
            <p id="trainer_i">{props.info}</p>
        </div>
    )
}
export default Membership;