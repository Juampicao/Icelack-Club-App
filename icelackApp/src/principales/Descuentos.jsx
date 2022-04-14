import React from 'react'
import { Outlet } from 'react-router-dom'
import Spinner from '../componentes/spinner/Spinner'


const Descuentos = () => {
  
  return (
    <div>
      <div className='pt-10'>
        <h1 className=''> Descuentos.jsx </h1>
        <Spinner/>
      </div>

      <Outlet />
    </div>
  )
}

export default Descuentos