import React from 'react';
import Carousel from 'nuka-carousel';
import './Carousel.css';
import Milanesas from '../../assets/Milanesas.jpg';
import FlechaDerecha from "../../assets/flechaD.png"
import milanesaPromo from "../../assets/AA.jpg"

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
        <img src="https://media.a24.com/p/8330d1140a87dada130d2e662bf96915/adjuntos/296/imagenes/009/243/0009243905/1200x675/smart/pexels-gonzalo-ruiz-18275671jpg.jpg" alt="Milanesas" />
        <img src="https://resizer.glanacion.com/resizer/v2/milanesas-con-papas-fritas-el-plato-mas-elegido-W6TTCYOSCZC7BKYFVPGP5C5BCI.jpeg?auth=365ea38f8c093c9e8bbcdb5373eb903fd31e97f3bb77f1fe25161b93d8671d11&width=880&height=586&quality=70&smart=true" alt="Milanesas" />
        <img src={milanesaPromo} alt="Milanesas" />
        {/* ... Otras imágenes ... */}
      </Carousel>
    </div>
  );
};
