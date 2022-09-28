import React from 'react'

import { motion } from 'framer-motion';


const HomeTitle = () => {
    return ( 
        <motion.div 
        initial={{x: "-100vw", opacity: 0}}
        layout
        transition={{duration: "1"}}
        animate={{x: "0vw", opacity: 1}} 

        className='title-container'>
            <h1 className='title'>Hola, Soy Guillermo</h1>
            <p className='info'>
                Soy egresado del Tec MM campus Zapopan, actualmente soy desarrollador front-end en Code nation, 
                busco ampliar mis conocimientos para la elaboracion de sitios web, así como mejorar mis skills en desarrollar sitios responsive. 
            </p>
        </motion.div>
     );
}
 
export default HomeTitle;