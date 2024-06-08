import React from 'react';
import Carousel from 'nuka-carousel';
import './Carousel.css';
import Milanesas from '../../assets/Milanesas.jpg';
import FlechaDerecha from "../../assets/flechaD.png"
import milanesaPromo from "../../assets/AA.jpg"
import frescosArtesanales from "../../assets/Frescos-Artesanales2.jpg"
import imagenMila from "../../assets/imagenMila.jpg"
import mensajeC from "../../assets/MensajeAA.jpg" 
import mediosPago from "../../assets/MediosPago.jpg"

export const Carrousel = () => {
  const params = {
    autoplay: true,
    wrapAround: true,
  };

  const CustomNextButton = ({ nextSlide }) => (

    <div className="flechaderecha">
        <img src={FlechaDerecha} onClick={nextSlide} alt=""  />

    </div>

    
    
  );

  const CustomPrevButton = ({ previousSlide }) => (
    <div className="flechaIzquierda">
        <img src={FlechaDerecha} onClick={previousSlide} alt=""  />

    </div>
  );

  return (
    <div className="Carrousel">
      <Carousel
        {...params}
        renderCenterLeftControls={({ previousSlide }) => <CustomPrevButton previousSlide={previousSlide} />}
        renderCenterRightControls={({ nextSlide }) => <CustomNextButton nextSlide={nextSlide} />}
      >
        <img src={frescosArtesanales} alt="Milanesas" />
        <img src={imagenMila} alt="Milanesas" />
        <img src={mensajeC} alt="Milanesas" />
        <img src={mediosPago} alt="Milanesas" />
        {/* ... Otras imágenes ... */}
      </Carousel>
    </div>
  );
};
