import React from "react";
function Card(props){
    return (
        <div className="card">
            <h1 id="heading">{props.name}{props.details}</h1>
        </div>
    )
}
export default Card;