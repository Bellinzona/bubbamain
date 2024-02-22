import React, { useContext } from 'react'
import "./CarritoLugar.css"
import { contextoProvider } from '../../contexto/Contexto'
import {Link} from "react-router-dom"

export const CarritoLugar = () => {

  const {arrayDeObjetos,aumentarCantidad,restarCantidad,total} = useContext(contextoProvider)




  return (
    <div className='CarritoLugar'>


        <div className="Carro">

          {arrayDeObjetos.map((item,index) => (
            <div key={index} className='Productos'>
              

              <img src={item.imagen} alt="" />
              <p>{item.nombre} x {item.cantidad}</p>

              <div className='botones'>

              <button className='mas' onClick={() => aumentarCantidad(item.nombre)}>+</button>
              <button className='menos' onClick={() => restarCantidad(item.nombre)}>-</button>

              </div>



            </div>
          ))}

          <p>Total: {total}</p>

            


          <Link to={`/FinalizarCompra`}><button className='finalizarCompra'>Finalizar compra</button></Link>




            
        </div>





    </div>
  )
}
