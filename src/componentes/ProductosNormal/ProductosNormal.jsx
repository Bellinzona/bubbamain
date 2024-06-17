import React, { useContext, useEffect, useRef, useState } from 'react';
import { contextoProvider } from '../../contexto/Contexto';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import "./ProductosNormal.css"
import Swal from 'sweetalert2';

export const ProductosNormal = ({ productoss }) => {
    const { crearObjeto, arrayDeObjetos } = useContext(contextoProvider);
    const [productos, setProductos] = useState(null);

    useEffect(() => {
        setProductos(productoss); // Establece productos como los productos filtrados
    }, [productoss]);


    const handleComprar = (nombre, precio, imagen) => {
        crearObjeto(nombre, precio, 1, imagen);

        Swal.fire({
            text: 'Se añadio al carrito',
            confirmButtonText: 'ok',
            toast: true,
            position: 'top-right',
            timer:800
          })
      };

    return (
        <div className='ProductosSectorTodos'>
            {productos && productos.map((item, index) => (
                <div key={index}>
                    <article>
                        {item.Campo === 'promos' && <span className='promoSpan' onClick={() => filtrarProductos('promos')}>Promo</span>}
                        <img src={item.Imagen} alt='' />
                        <div className='informacion'>
                            <p>{item.Nombre}</p>
                            <p>$ {item.Precio}</p>
                        </div>
                        <button onClick={() => handleComprar(item.Nombre, item.Precio, item.Imagen)} className='btnAñadirC'>Añadir al Carrito</button>
                    </article>
                </div>
            ))}
        </div>
    );
};
