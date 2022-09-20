import React, { useState} from "react";
import { MenuItems } from "./MenuItem";
import "../../styles/Navbar.css"
import { Buttom } from "../Button";
const Navbar = () => {
    const [click, setClick] = useState(false)

    return ( 
        <nav className="NavbarItems">
            <h1 className="navbar-logo">React <i className="fab fa-react"></i> </h1>
            <div className="menu-icon" onClick={()=> setClick(!click)}>
                <i className={click ? "fas fa-times": "fas fa-bars"}></i>
            </div>
            <ul className={click ? "nav-menu active": "nav-menu"}>
                {MenuItems.map((item, index)=>{
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )              
                })}
            </ul>

        </nav>
     );
}
 
export default Navbar;