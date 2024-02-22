import React from 'react'
import "./Navbar.css"
import bubbaImagen from "../../assets/Bubba.png"
import { Carrito } from '../Carrito/Carrito'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  
  return (
    <div className='NavbarContainer'>

        <div className="Navbar">

           <Link to={"/"}> <img src={bubbaImagen} alt="" /></Link>


            <div className="menuPrincipal">

                <Link to={"/"}><a href="">INICIO</a></Link>
                <a href="#productos">PRODUCTOS</a>
                <a href="#footer">CONTACTO</a>


                <Carrito></Carrito>





            </div>

            <div className='menuResponsive'>


            <Carrito></Carrito>

            </div>


            




        </div>





    </div>
  )
}
