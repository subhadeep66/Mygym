import {motion} from "framer-motion"
import React, { useState } from "react";
function Eyes(){
    let [a,b]=useState()
    return (
        <div className="eyes">
            <div className="balls"><img src="https://marketplace.canva.com/EAFxdcos7WU/1/0/1600w/canva-dark-blue-and-brown-illustrative-fitness-gym-logo-oqe3ybeEcQQ.jpg" alt="" /></div>
            <div className="ball"><motion.div initial={{x:0}}animate={{x:"700%"}} transition={{ease:"linear",repeat:0,duration:1}} className="bal"></motion.div></div>
            <div className="ball ball_1"><motion.div initial={{x:300}}animate={{x:"100%"}} transition={{ease:"linear",repeat:0,duration:1}} className="bal"></motion.div></div>
            <motion.div initial={{x:200}}animate={{x:"100%"}} transition={{ease:"linear",repeat:0,duration:1}} className="B"></motion.div>
            <div className="anime">🏃‍♂️🏃</div>

        </div>
        
    )
}
export default Eyes;