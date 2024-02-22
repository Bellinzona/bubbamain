import React, { useContext, useState } from 'react'
import "./Carrito.css"
import '../CarritoLugar/CarritoLugar.css';
import carritoComprar from "../../assets/carroCompra.png"
import { CarritoLugar } from '../CarritoLugar/CarritoLugar';
import { contextoProvider } from '../../contexto/Contexto';

export const Carrito = () => {

  const [mostrarCarritoLugar, setMostrarCarritoLugar] = useState(false);
  const {contador} = useContext(contextoProvider)


  const toggleCarritoLugar = () => {
    setMostrarCarritoLugar((prevMostrarCarritoLugar) => !prevMostrarCarritoLugar);
  };
  


  return (

    <div className="carroTodo">



    
    <div className='carrito'>
      <img src={carritoComprar} alt="" onClick={toggleCarritoLugar} />
      <span>{contador}</span>

      
    </div>

    {mostrarCarritoLugar && <CarritoLugar />}

    </div>
  );
};