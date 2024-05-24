import React, { useState } from "react";
function NavBar(){
    var [a,b]=useState(false)
    return (
    <div className="navBar1">
        <div className="logo">MyGym</div>
        <div className="links">
            <ul>
                <li><a href="">about us</a></li>
                <li><a href="">contact us</a></li>
                <li><a href="">programs</a></li>
                <button onClick={()=>b(!a)}>{a===false?"sign up":"signing"}</button>
            </ul>
        </div>
    </div>)
}
export default NavBar;
