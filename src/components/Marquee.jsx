import {motion} from "framer-motion"
import React from "react";
function Marquee(){
    return(
        <div className="marquee">
            <div className="text">
                <motion.h1 initial={{x:500}}animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:3}} className="text_animate">10% Discount </motion.h1>
                <motion.h1 initial={{x:500}}animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:3}} className="text_animate">10% Discount </motion.h1>
                <motion.h1 initial={{x:500}}animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:3}} className="text_animate">10% Discount </motion.h1>

            </div>
        </div>
    )
}
export default Marquee;