{/*  Importamos iconos de la libreria , hook de usestate 
  para darle funcion al abrir la barra de navegacion en celulares,
  logo de rsp en el encabezado , nav items para extraer el texto del encabezado
  y link para darle la navegacion de los textos de inicio , servicios
  a su respectivo sitio. */}

import {Menu, X} from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.jpg";
import { navItems } from "../constants/info";
import { Link } from "react-router-dom";

{/*Importacion del logo en el encabezado */}

import wspIcon from "../assets/wspicon.png"



const Navbar = () => {

  {/* funcion para dispositivos mobiles abrir la barra de navegacion */}
   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

   const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
   };

  return (
    <nav className="sticky top-0 z-50 py-6   backdrop-blur-lg border-b  border-neutral-700/80   bg-gradient-to-t from-transparent to-black/25">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">

            {/* importamos el logo del encabezado con su nombre de rsp 
            y el icono de whatsAPP con su funcion */}

            <div className="flex items-center flex-shrink-0">
                <img className="h-14 w-14 mr-2 rounded-sm" src={logo} alt="logo" />
                <span className="max-[370px]:text-[11px] text-xs sm:text-sm md:text-base  lg:text-base   xl:text-lg tracking-tighter font-medium text-white  drop-shadow-lg">RSP (Reclutamiento y Selección de Personal)</span>
           
           
               <div className="pl-5 hidden sm:block">
                     <a href={`https://wa.me/573216143596?text=${encodeURIComponent('Hola, quisiera más información.')}`}
                                       target="_blank"
                                         rel="noopener noreferrer">
                      <img src={wspIcon} className="w-9 h-9 transform rotate-[10deg]" />  
                               
                       </a>
                  </div>

           
            </div>

          {/* ul es una lista ordenada para colocar en fila 
          los textos extraidos de info.jsx de const
          aca va la informacion de la barra de navegacion de la derecha 
          con sus respectiva libreria link para darle la navegacion al usuario
            */}
            
            <ul className="hidden lg:flex ml-3 xl:space-x-9 lg:space-x-5">
                {navItems.map((item , index ) => (
                  <li key={index}>
                    <Link className={`lg:text-sm  xl:text-base font-semibold drop-shadow-lg   transition-colors duration-300    hover:border-b-2 border-gray-200  pb-1
                       ${ item.label === "Servicios" ? "text-yellow-200   hover:text-yellow-300 " : "text-white hover:text-purple-200 "}`}
                       to={item.href} onClick={() => window.scrollTo(0, 0)}>{item.label}</Link> 
                  </li>
                ))}
            </ul>
            
            {/*boton hamburguesa que aparece en dispositivos de <768 px  */}

             <div className="lg:hidden md:flex flex-col justify-end">
                <button onClick={toggleNavbar}>
                   {mobileDrawerOpen ? <X className="text-gray-100" /> : <Menu className="text-gray-100" />}
                </button>
             </div>
            </div>
           {/* Se importa la funcion para abrir la navegacion en celulares y dispositivos <768px */}
            {mobileDrawerOpen && (
              <div className="fixed right-0 top-24 z-20 bg-gray-200 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                 <ul>
                   {navItems.map((item, index) => (
                     <li key={index} className={`py-4 text-base  transition-colors duration-100   ${ item.label === "Servicios" ? "text-blue-600 hover:text-blue-300  " : "text-black hover:text-yellow-100"} `}>
                       <Link to={item.href} onClick={() => {window.scrollTo(0, 0); toggleNavbar();}}>{item.label}</Link>
                     </li>
                   ))}
                 </ul>
              </div>
            )}
     </div>
    </nav>
  );
};

export default Navbar