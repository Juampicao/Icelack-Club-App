import React from 'react'

const CardDescuentos = () => {
  return (
      <div>
          <div className='marginGeneral bg-slate-200 rounded-xl shadow-lg flex'>
        <div className='w-3/5 bg-image-general'>
             {/* <img src="./src/img/banner1.jpg"  className="" alt=""/>  */}
        </div>
        <div className='paddingGeneral items-end	'>
          <h1> Descuento 20% </h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisici</p>
          <button className='botonGeneral m-2 		'> Canjear </button>


        </div>
          </div>
          
      </div>
  )
}

export default CardDescuentos