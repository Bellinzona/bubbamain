import React, { useEffect, useState, useRef, useContext } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import "./Productos.css"
import { contextoProvider } from '../../contexto/Contexto';
import Swal from 'sweetalert2';

export const Productos = () => {
  const { crearObjeto, arrayDeObjetos } = useContext(contextoProvider);
  const [productos, setProductos] = useState(null);
  const productosRef = useRef(null);
  const [productosFiltrados, setProductosFiltrados] = useState(null); // Nuevo estado para almacenar productos filtrados

  useEffect(() => {
    const ProductosRef = collection(db, 'Productos');
    getDocs(ProductosRef).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  const handleComprar = (nombre, precio, imagen) => {
    crearObjeto(nombre, precio, 1, imagen);

    Swal.fire({
        confirmButtonText: 'ok',
        title:"Se añadio al Carrito",
        toast: true,
        position: 'top-right',
        timer:1500
      
    })
  };

  const filtrarProductos = (categoria) => {
    if (!categoria) {
      // Si la categoría es nula, mostrar todos los productos
      setProductosFiltrados(productos);
    } else {
      // Filtrar productos según la categoría
      const productosFiltrados = productos.filter((producto) => producto.Campo === categoria);
      setProductosFiltrados(productosFiltrados);
    }
  };

  return (
    <section ref={productosRef} className='Productos' id='productos'>

      <h1>Productos</h1>

      <div className='MiniNav'>
        <a onClick={() => filtrarProductos(null)}>Todos</a>
        <a onClick={() => filtrarProductos('milanesas')}>Milanesas</a>
        <a onClick={() => filtrarProductos('congelados')}>Congelados</a>
        <a onClick={() => filtrarProductos('veggie')}>Veggie</a>
        <a onClick={() => filtrarProductos('promos')}>Promos</a>
      </div>

      <div className='ProductosSector'>
        {productos || productosFiltrados ? (
          (productosFiltrados || productos).map((item, index) => (
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
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </section>
  );
};
