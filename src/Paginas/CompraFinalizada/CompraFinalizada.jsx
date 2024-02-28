import React, { useEffect, useState } from 'react'
import { Navbar } from '../../componentes/Navbar/Navbar'
import { db } from '../../firebase/config'
import { collection, addDoc } from 'firebase/firestore'
import "./CompraFinalizada.css"

export const CompraFinalizada = () => {
  const [paymentInfo, setPaymentInfo] = useState([]);




  return (
    <div className='CompraFinalizada'>



      <h3 className='aaa'>Tu compra se realizo con exito</h3>

      




    </div>
  )
}
