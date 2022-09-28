import React from "react";
import "../styles/Contact.css";
import cvTest from "./CV-Guillermo-Emanuel-Navarro-García.pdf";

const Contact = () => {


  return (
    <>
      <div className="line"></div>
      <div className="contact-container">

        <div className="icon-container">
          <ul>
            <li className="li-c">
                <div className="action" ><a href="https://github.com/ElMemoGG" target="_blank" >
                    <i className="fab fa-github icon"></i> <h2>GitHub</h2>
                </a>
              </div>
            </li>
            <li className="li-c">
            <div className="action" ><a href="https://www.linkedin.com/in/guillermo-navarro-513426223/" target="_blank" >
                  <i className="fab fa-linkedin"></i><h2>Linkedin</h2>
                </a>
              </div>
               
            </li>

          </ul>
        </div>
        <div className="other-container">
        <ul>
            <li className="other-li">
                <h3 className="other-action" >
                  Email: guillermo.navarro.dev@gmail.com
              </h3>
            </li>
            <li className="other-li">
                <h3 className="other-action" >
                  Teléfono: 3339708329 
              </h3>
            </li>
            <li className="other-li">
              <div className="other-action">

         
                <a className="button-dow"  href={cvTest} download="CV-Guillermo-Emanuel-Navarro-García.pdf">
                  Descargar CV
                </a>
                </div>
            </li>
            

          </ul>
        </div>



      </div>
    </>
  );
};

export default Contact;
