import React, { useEffect, useState, useRef, useContext } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import "./Productos.css"
import { contextoProvider } from '../../contexto/Contexto';
import Swal from 'sweetalert2';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarrouselProducts } from '../carrouselProducts/CarrouselProducts';
import { ProductosNormal } from '../ProductosNormal/ProductosNormal';

export const Productos = () => {
  const { crearObjeto, arrayDeObjetos } = useContext(contextoProvider);
  const [productos, setProductos] = useState(null);
  const productosRef = useRef(null);
  const [productosFiltrados, setProductosFiltrados] = useState(null); // Inicializado como null

  useEffect(() => {
    const obtenerProductos = async () => {
      const ProductosRef = collection(db, 'Productos');
      const resp = await getDocs(ProductosRef);
      const productosData = resp.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setProductos(productosData);
    };

    obtenerProductos();
  }, []);

  const filtrarProductos = (categoria) => {
    if (!categoria) {
      // Si la categoría es null, mostrar todos los productos
      setProductosFiltrados(null); // Restablecer productosFiltrados
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
      {productosFiltrados !== null ? <ProductosNormal productoss={productosFiltrados} /> : <CarrouselProducts />}
    </section>
  );
};
