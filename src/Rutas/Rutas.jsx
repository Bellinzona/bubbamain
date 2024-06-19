import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../Paginas/Home'
import { Compra } from '../Paginas/finalizarCompra/Compra'
import { CompraFinalizada } from '../Paginas/CompraFinalizada/CompraFinalizada'
import ErrorBoundary from '../componentes/ErrorPage/ErrorBoundary'

export const Rutas = () => {
    return (
        <div>

            <HashRouter>

            <ErrorBoundary>

                <Routes>

                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/FinalizarCompra' element={<Compra></Compra>}></Route>
                    <Route path='/CompraFinalizada' element={<CompraFinalizada></CompraFinalizada>}></Route>
                    <Route path="/error" element={<Home></Home>} />



                </Routes>

                </ErrorBoundary>



                </HashRouter>







        </div>
    )
}
