import React, { useState} from "react";
import { MenuItems } from "./MenuItem";
import "../../styles/Navbar.css"

import { motion } from "framer-motion";

const Navbar = () => {
    const [click, setClick] = useState(false)

    return ( 
        <motion.div 
        initial={{y: "-100vw", opacity: 0}}
        layout
        transition={{duration: "1"}}
        animate={{y: "0vw", opacity: 1}} 
        className="nav-container">

        <nav className="NavbarItems">
            <h1 className="navbar-logo">Portafolio {/* <i className="fab fa-react"></i> */}  </h1>
            <div className="menu-icon" onClick={()=> setClick(!click)}>
                <i className={click ? "fas fa-times": "fas fa-bars"}></i>
            </div>
            <ul className={click ? "nav-menu active": "nav-menu"}>
                {MenuItems.map((item, index)=>{
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url} onClick={()=> setClick(!click)}>
                                {item.title}
                            </a>
                        </li>
                    )              
                })}
            </ul>

        </nav>
        </motion.div>
     );
}
 
export default Navbar;