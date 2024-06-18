import React, { useEffect, useState } from 'react'
import { Navbar } from '../../componentes/Navbar/Navbar'
import { db } from '../../firebase/config'
import { collection, addDoc } from 'firebase/firestore'
import "./CompraFinalizada.css"

export const CompraFinalizada = () => {
  const [paymentInfo, setPaymentInfo] = useState(null);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const collectionStatus = urlParams.get('collection_status'); //NO ES LA DE FINALIZAR COMPRA NO CONFUNDIRSE



  useEffect(() => {

    fetch(`https://bs-i4ni.onrender.com/CompraFinalizada`)
      .then(response => response.json())
      .then(data => setPaymentInfo(data))
      .catch(error => console.error('Error al obtener la información del pago:', error));

  

  }, []);



  useEffect(() => {
    const guardarInformacion = async () => {
      if (paymentInfo && paymentInfo.RequestBodyInfo) {
        const clienteData = {
          Nombre: paymentInfo.RequestBodyInfo.nombre,
          Apellido: paymentInfo.RequestBodyInfo.apellido,
          Producto: paymentInfo.RequestBodyInfo.description,
          Local: paymentInfo.RequestBodyInfo.local,
          Horario: paymentInfo.RequestBodyInfo.horario,
          telefono: paymentInfo.RequestBodyInfo.telefono,
          IdCompra: paymentInfo.QueryParams.payment_id
        };




      }
    };

    guardarInformacion();
  }, [paymentInfo]);



  return (


    <div className='CompraFinalizada'>

      {collectionStatus ? (

        <>

          <h3 className='aaa'>Tu compra se realizo con exito</h3>



          <p>Nombre: {paymentInfo?.RequestBodyInfo?.nombre ?? 'No disponible'}</p>
          <p>Producto: {paymentInfo?.RequestBodyInfo?.description ?? 'No disponible'} ${paymentInfo?.RequestBodyInfo?.price ?? 'No disponible'}</p>
          <p>Local: {paymentInfo?.RequestBodyInfo?.local ?? 'No disponible'}</p>
          <p>{paymentInfo?.RequestBodyInfo?.horario ?? 'No disponible'}</p>
          <p>Id de la compra: {paymentInfo?.QueryParams?.payment_id ?? 'No disponible'}</p>

        </>
      ) : <p>NO DISPONIBLE</p>}






    </div>
  )
}
