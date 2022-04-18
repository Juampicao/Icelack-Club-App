import React from 'react'
import { Outlet } from 'react-router-dom'
import CardDescuentos from '../componentes/cards/CardDescuentos'
import Spinner from '../componentes/spinner/Spinner'


const Descuentos = () => {
  
  return (
    <>
      <div className='pt-10'>
        <h1 className=''> Descuentos.jsx </h1>
        <Spinner/>
      </div>
      <div className=''> 
        border-4 border-slate-900 p-3 rounded-full
      </div>
      <CardDescuentos />
      <CardDescuentos />
      <CardDescuentos />
      <CardDescuentos />
      <CardDescuentos />
      <CardDescuentos />


      

      <Outlet />
    </>
  )
}

export default Descuentos