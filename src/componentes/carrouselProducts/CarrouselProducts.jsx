import React, { useContext, useEffect, useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { contextoProvider } from '../../contexto/Contexto';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

import "./CarrouselProducts.css"

export const CarrouselProducts = () => {
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

    // Esta función filtra los productos según la categoría
   

    console.log(productos)

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

    return (
        <div>
            <Carousel
                swipeable={true}
                draggable={true}
                infinite={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                showDots={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                
                partialVisible={false}
            >
                {productos ? (
                    productos.map((item, index) => (
                        <div key={index} className='containerArticle'>
                            <article className='articleCarrousel'>
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
            </Carousel>
        </div>
    );
};
