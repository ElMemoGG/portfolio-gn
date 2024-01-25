import React from 'react'
import { motion, Variants } from "framer-motion";
import "../styles/TimeLine.scss"

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

const TimeLine = () => {

	
    return ( 
        <motion.div 
		initial="offscreen"
      
		whileInView="onscreen"
		viewport={{ once: true, amount: 0.8 }}
		
		className="container">
	
	<motion.div className="timeline-item" date-is='Agosto-2014 – Junio-2017' variants={cardVariants}>
		<h1>Preparatoria</h1>
		<p>
			Inicie mis estudios y los termine en la Preparatoria no.7.
		</p>
	</motion.div>
	
	<motion.div className="timeline-item" date-is='Agosto-2017 – Junio2022 ' variants={cardVariants}>
		<h1>Universidad </h1>
		<p>
			Inicie mis estudios en le universidad Tec MM campus Zapopan, actualmente soy egresado en proceso de titulación.
		</p>
	</motion.div>
	
	<motion.div className="timeline-item" date-is='Enero 2022 – Noviembre 2023' variants={cardVariants}>
		<h1>Experiencia</h1>
		<p>
		Realicé mi residencia en la empresa Code Nation Studio y, continúe hasta noviembre del 2023 en el área del front-end usando react.
		</p>
	</motion.div>

	<motion.div className="timeline-item" date-is=' ' variants={cardVariants}>
		<h1>En busca de nuevas fronteras </h1>
		<p>
			...
		</p>
	</motion.div>


	
</motion.div>
     );
}
 
export default TimeLine;