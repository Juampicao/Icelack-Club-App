import React from 'react'
import './stylesBarraInicio.css'
import { Link } from 'react-router-dom'


const BarraInicio = () => {
  return (
    <div className=''>
      <section className='flex w-full justify-evenly fixed bottom-0 bg-gray-600 text-white  '>
      
        <a className='p-5 ' href='#'>
            <img src="./src/img/buscar.png" className="h-8" alt=""/>
        </a>
       
        <a className='p-5 ' href='#'>
            <img src="./src/img/buscar.png" className="h-8" alt=""/>
        </a>
        
        <a className='p-5 ' href='#'>
            <img src="./src/img/buscar.png" className="h-8" alt=""/>
        </a>
       
        <a className='p-5 ' href='#'>
            <img src="./src/img/buscar.png" className="h-8" alt=""/>
        </a>
         
        </section>

    </div>
  )
}

export default BarraInicio