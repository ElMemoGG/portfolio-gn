import React, { useEffect, useRef, useState } from "react";
import image from "../imgs/technologysLogos/image";

import "../styles/tecnologys.css";
import { motion } from "framer-motion";

const Tecnologys = () => {
    const [width, setWith]= useState(0)
    const carousel = useRef();
    useEffect(()=>{
            /* console.log(carousel.current) */
            setWith(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])

  return (<> 
  
    <div className="content">
     
    <motion.div ref={carousel} className="carrousel">
      <motion.div 
      drag="x"  
      dragConstraints={{right: 0, left: -width}} className="inner-carrousel">
        {image.map((images, index) => {
          return (
            <motion.div className="item" key={index}>
              <img src={images}></img>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
    </div>
    </>
  );
};

export default Tecnologys;
