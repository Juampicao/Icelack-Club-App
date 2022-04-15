import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Header from './header/Header'
import BarraInicio from './barraInicio/BarraInicio'



const Layout = () => {
  return (
      <div>
      <Header/>
      <p className='titulo_general'> Antes de Outlet </p>
      <Outlet />
      <p className='titulo_general'> Despues de Outlet </p>
      <BarraInicio/>
    </div>
  )
}

export default Layout