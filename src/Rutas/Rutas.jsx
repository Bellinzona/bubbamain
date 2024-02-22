import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../Paginas/Home'
import { Compra } from '../Paginas/finalizarCompra/Compra'
import { CompraFinalizada } from '../Paginas/CompraFinalizada/CompraFinalizada'

export const Rutas = () => {
    return (
        <div>

            <BrowserRouter>

                <Routes>

                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/FinalizarCompra' element={<Compra></Compra>}></Route>
                    <Route path='/CompraFinalizada' element={<CompraFinalizada></CompraFinalizada>}></Route>



                </Routes>



            </BrowserRouter>







        </div>
    )
}
