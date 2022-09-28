import React, { useEffect, useRef, useState } from "react";
import image from "../imgs/technologysLogos/image";

import "../styles/tecnologys.css";
import { motion } from "framer-motion";

const cardVariants = {
	offscreen: {
	  x: "-100vw"
	},
	onscreen: {
	  x: 0,
	   /* rotate: "360deg", */
	  transition: {
		type: "spring",
		bounce: 0.4,
		duration: 0.8
	  }
	}
  };

const Tecnologys = () => {
    const [width, setWith]= useState(0)
    const carousel = useRef();
    useEffect(()=>{
            /* console.log(carousel.current) */
            setWith(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])

  return (<> 
    <motion.div
        initial="offscreen"
      
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}>

    
    <motion.div className="content" variants={cardVariants}> 
     
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
    </motion.div>
    </motion.div>
    </>
  );
};

export default Tecnologys;
