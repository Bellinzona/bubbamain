import React, { useContext, useState } from 'react'
import { Navbar } from '../../componentes/Navbar/Navbar'
import { contextoProvider } from '../../contexto/Contexto'
import "./Compra.css"
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios"
import Swal from "sweetalert2"
import { useEffect } from 'react'


export const Compra = () => {

  const { arrayDeObjetos, total } = useContext(contextoProvider)
  const [preferenceId, setPreferenceId] = useState(null);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [horario, setHorario] = useState("Turno mañana: 12hrs - 14hrs");
  const [local, setLocal] = useState("Curapaligue 47");

  initMercadoPago('APP_USR-9b77572e-5f56-4e1a-8d74-bce531ae93f7');


  const obtenerNombresProductos = () => {
    const nombresUnicos = [...new Set(arrayDeObjetos.map((producto) => producto.nombre))];

    const nombresConCantidad = nombresUnicos.map((nombre) => {
      const cantidad = arrayDeObjetos.reduce((total, producto) => {
        return producto.nombre === nombre ? total + producto.cantidad : total;
      }, 0);
      return cantidad > 1 ? `${nombre} x ${cantidad}` : nombre;
    });


    return nombresConCantidad.join(', ');
  };

  useEffect(() => {

    Swal.fire({
      title: 'Atención!',
      text: 'Los sábados y feriados no se toman pedidos online',
      confirmButtonText: 'ok',
      toast: true,
      position: 'top-right'
    })

  }, [])





  const createPreference = async (Precio) => {
    try {

      const descripcionProductos = obtenerNombresProductos();
      const response = await axios.post("https://bs-i4ni.onrender.com/create_preference", {
        description: descripcionProductos, // Usa la descripción generada por obtenerNombresProductos
        price: Precio,
        quantity: 1,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        horario: horario,
        local: local
      });

      const { id } = response.data;
      return id;

    } catch (error) {
      console.log(error)
    }
  }

  const btnComprar = async (e, Precio) => {

    if (nombre === "" || apellido === "" || telefono === "" || horario === "" || local === "") {
      Swal.fire({
        text: 'Faltan datos por completar',
        confirmButtonText: 'ok',
        title:"Error"
      })

    }else if (total == 0){
      Swal.fire({
        text: 'El carrito esta vacio',
        confirmButtonText: 'ok',
        title:"Error"
      })

    }
    else {
      e.preventDefault();
      const id = await createPreference(Precio);

      if (id) {
        setPreferenceId(id)
      }

    }

  }





  return (
    <div>

      <Navbar></Navbar>

      <div className="estasLlevando" id='productos'>

        <h1>Estas Llevando :</h1>

        {arrayDeObjetos.length === 0 ? (
          <p>no hay nada en el carrito</p>
        ) : (<div className="productosLlevando">

          {arrayDeObjetos.map((item, index) => (
            <div key={index} className='productllevar'>

              <img src={item.imagen} alt="" />

              <p>{item.nombre} x {item.cantidad}</p>






            </div>
          ))}





        </div>)}



        <div className="totalLlevado">

          <p>Total : {total}</p>
        </div>


      </div>

      <div className="Datos">

        <h1>Tus Datos</h1>

        <span>Necesitamos tus datos de contacto para asegurarnos que el pedido se entregue correctamente</span>

        <div className="form">
          <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
          <input type="number" placeholder="Numero de Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

          <p>Horario para retirar pedido</p>
          <select value={horario} onChange={(e) => setHorario(e.target.value)}>
            <option value="Turno mañana : 12 hrs - 14 hrs">Turno mañana : 12 hrs - 14 hrs</option>
            <option value="Turno tarde : 17 hrs - 20 hrs">Turno tarde : 17 hrs - 20 hrs</option>
          </select>

          <p>Local a Retirar</p>
          <select value={local} onChange={(e) => setLocal(e.target.value)}>
            <option value="Curapaligue 47">Curapaligue 47</option>
            <option value="Avenida Rivadavia 6027">Avenida Rivadavia 6027</option>
          </select>

          <button className="Pagar" onClick={(e) => btnComprar(e, total)}>
            Pagar
          </button>

          <div className="wallet-Container">

          {preferenceId && <Wallet initialization={{ preferenceId }} />}


          </div>
          
        </div>


      </div>



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
