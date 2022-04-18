import React from 'react'
import './styles.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom' 
import Layout from './layout/Layout'
import PaginaPrincipal from './principales/PaginaPrincipal'
import Descuentos from './principales/Descuentos'
import Sorteos from './principales/Sorteos'
import Noticias from './principales/Noticias'
import './main.js'
import Login from './principales/Login'
import DescuentoParticular from './principales/DescuentoParticular'




const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<PaginaPrincipal />} />
                <Route path="descuentos" element={<Descuentos />} />
                <Route path="descuentoParticular" element={<DescuentoParticular/>} /> 
                <Route path="sorteos" element={<Sorteos />} />
                <Route path="noticias" element={<Noticias />} />
                <Route path="login" element={<Login />} />
          </Route>
          <Route path="/clientes" element={<Layout />}>
                <Route index element={<PaginaPrincipal />} />
          </Route>
          
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App

