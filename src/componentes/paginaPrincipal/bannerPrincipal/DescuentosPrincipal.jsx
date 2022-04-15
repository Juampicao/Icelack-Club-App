import React from 'react'
import { Link } from 'react-router-dom'

const DescuentosPrincipal = () => {
  return (
    < >
       <div className='h-52 bg-slate-400'>
        <h1> <Link to="descuentos"> Descuentos</Link> </h1>
        <div className=''>
          <ul className='flex justify-evenly'>
            <li className='bg-white p-8 rounded-full'></li>
            <li className='bg-white p-8 rounded-full'></li>
            <li className='bg-white p-8 rounded-full'></li>
            <li className='bg-white p-8 rounded-full'></li>
            <li className='bg-white p-8 rounded-full'></li>        
          </ul>

        </div>

      </div>
      
    </>
  )
}

export default DescuentosPrincipal