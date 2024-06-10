import React from 'react'
import { Navbar } from '../componentes/Navbar/Navbar'
import { Carrousel } from '../componentes/Carrousel/Carrousel'
import { Productos } from '../componentes/Productos/Productos'
import { CarrouselProducts } from '../componentes/carrouselProducts/CarrouselProducts'
import { ProductosNormal } from '../componentes/ProductosNormal/ProductosNormal'


export const Home = () => {
  return (
    <div>

        <Navbar></Navbar>
        
        <Carrousel></Carrousel>
        

        <Productos></Productos>

        

        

        


        <div className='FooterMain' id='footer'>

<div className="informaciones">
    <h3>Contacto :</h3>

    <p>Bubbamilanesas912@gmail.com</p>
    <p>📱 1123150263</p>
    


</div>

<div className="informaciones">
    <h3>Locales :</h3>

    <p>Curapaligue 47 - Flores</p>
    <p>Avenida Rivadavia 6027 - Caballito</p>



</div>

<div className="informaciones">
    <h3>Redes :</h3>

    <p>@BubbaMilanesas</p>

    



</div>










</div>
        
       

        





    </div>
  )
}
