import React from "react";
import Eyes from "./Eyes";

function Greet(){
    const currentTime=new Date()
    const day=currentTime.getDay()
    let a="";
    if(day===1){
        a="monday"
    }
    else if(day===2){
        a="tuesday"
    }
    else if(day===3){
        a="wednesday"
    }
    else if(day===4){
        a="thursday"
    }
    else if(day===5){
        a="friday"
    }
    else if(day===6){
        a="saturday"
    }
    else {
        a="sunday"
    }
    return(<div>
        <h1 className="greet">Welcome to MyGym🏋️‍♀️ </h1>
        <Eyes/>
        <h3 id="des">Today is {a}</h3>
    </div>)
}
export default Greet;