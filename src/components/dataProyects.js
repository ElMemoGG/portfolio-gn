import image1 from "../imgs/wallhaven-2eroxm_1920x1080.png"
import image2 from "../imgs/wallhaven-m965vm_1920x1080.png"
import appChat1 from "../imgs/proyects/appChat1.jpg"
import appChat2 from "../imgs/proyects/appChat2.jpg"
import appChat3 from "../imgs/proyects/appChat3.jpg"
import appChat4 from "../imgs/proyects/appChat4.jpg"
import appChat5 from "../imgs/proyects/appChat5.jpg"
import compresor1 from "../imgs/proyects/compresor1.png"
import compresor2 from "../imgs/proyects/compresor2.PNG"
import compresor3 from "../imgs/proyects/compresor3.PNG"
import piano1 from "../imgs/proyects/piano1.jpg"
import piano2 from "../imgs/proyects/piano2.jpg"

export const data = [

    {
        id: 1,
        title: "AppChat",
        img: [
            appChat1,
            appChat2,
            appChat3,
            appChat4,
            appChat5,
      
        ],
        description: "Entre uno de los proyectos que desarrolle en la universidad se encuentra la appchat la cual es una aplicación de mensajería instantánea desarrollada en java y utilizando firebase como la base de datos"
        
    },
    {
        id: 2,
        title: "CropSize",
        class: "big",
        img: [
            compresor1,
            compresor2,
            compresor3,

        ],
        description: "CropSize es un pequeño proyecto que desarrolle para la creación de un componente, el cual su principal objetivo es hacer un recorte y editar parámetros básicos como la rotación y acercamiento a una imagen para al final hacerle una compresión y dejarla lista para mandarla a algún servidor "
        
    },
    {
        id: 3,
        title: "Magic Piano",
        class: "piano",
        img: [
            piano2,
            piano1,
   
        ],
        description: "Magic Piano es una aplicación que desarrolle en el aprendizaje de unity y c# su uso es como su nombre lo indica “un simple piano”"
        
    }

]
