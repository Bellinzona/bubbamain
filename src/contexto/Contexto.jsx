import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config';

export const contextoProvider = React.createContext();

export const Contexto = ({ children }) => {
  const [arrayDeObjetos, setArrayDeObjetos] = useState([]);
  const [contador, setContador] = useState(0);
  const [total, setTotal] = useState(0);

  const crearObjeto = (nombre, precio, cantidad, imagen) => {
    setContador((prevContador) => prevContador + 1);
    const objetoExistente = arrayDeObjetos.find((objeto) => objeto.nombre === nombre);

    if (objetoExistente) {
      const nuevoArray = arrayDeObjetos.map((objeto) =>
        objeto.nombre === nombre
          ? { ...objeto, cantidad: objeto.cantidad + cantidad}
          : objeto
      );
      setArrayDeObjetos(nuevoArray);
    } else {
      const nuevoObjeto = { nombre, precio, cantidad, imagen };
      setArrayDeObjetos((prevArray) => [...prevArray, nuevoObjeto]);
    }
    calcularTotal(); // Llama a la función después de modificar el arrayDeObjetos
  };

  const aumentarCantidad = (nombre) => {
    setContador((prevContador) => prevContador + 1);
    setArrayDeObjetos((prevArray) =>
      prevArray.map((item) =>
        item.nombre === nombre ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
    calcularTotal(); // Llama a la función después de modificar el arrayDeObjetos
  };

  const restarCantidad = (nombre) => {
    setContador((prevContador) => prevContador - 1);
    setArrayDeObjetos((prevArray) =>
      prevArray
        .map((item) =>
          item.nombre === nombre ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter((item) => item.cantidad > 0)
    );
    calcularTotal(); // Llama a la función después de modificar el arrayDeObjetos
  };

  const calcularTotal = () => {
    let totalCalculado = 0;

    arrayDeObjetos.forEach((item) => {
      totalCalculado += item.precio * item.cantidad;
    });

    setTotal(totalCalculado);
  };


  useEffect(() => {
    calcularTotal();
  }, [arrayDeObjetos]);


  return (
    <div>
      <contextoProvider.Provider value={{ crearObjeto, arrayDeObjetos, contador, aumentarCantidad, restarCantidad, total }}>
        {children}
      </contextoProvider.Provider>
    </div>
  );
};
