import './App.css'
import { Rutas } from './Rutas/Rutas'
import { Contexto } from './contexto/Contexto'

function App() {


  return (
    <div>

      <Contexto>
        <Rutas></Rutas>
      </Contexto>

    </div>
  )
}

export default App
