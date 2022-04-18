import React from 'react'

const DescuentoParticular = () => {

    let obtenerCodigoUnico = true; 

    // Funcion numero Aleatorio
    var numeroAleatorio = Math.floor(Math.random() * (123456 - 654321) * -1);
    

    // Funcion Obtener codigo 
    function obtenerCodigo() {
        if (obtenerCodigoUnico == true ) {
        let codigo = document.getElementById(`codigo`)
        let nuevoTitle = document.createElement(`h1`)
        nuevoTitle.textContent = numeroAleatorio
        codigo.appendChild(nuevoTitle)
            obtenerCodigoUnico = false;
          
        }
    }
  
  

    return (
        <div className='bg-slate-200'>
            <h1 className='mt-10'> DescuentoParticular.jsx</h1>
               <div className='border-4 border-slate-900 p-3 rounded-full w-1/6 '>
                   <img src="./src/img/flechaatras.png" className='' alt="" />
               </div>
            <div> 
                <div className='flex justify-between px-5'>
                   <h2 className='paddingGeneral'> Burguer 54 </h2>
                   {/* <img src="./src/img/compartir.png" className='' alt="" /> */}
                </div>
                <img src="./src/img/banner2.jpg" className='w-full' alt="" />
                <div className='m-4 space-y-5 bg-white shadow-lg p-5'>
                    <div className='flex justify-between'>
                        <h3 className='bg-red-500 px-3 py-1 text-white rounded-lg'> 25% </h3>
                        <h3 className='bg-black text-white px-2 rounded-lg py-1'> Exclusivo Icelack Premium</h3>
                    </div>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, praesentium!</p>
                       <div className=''>
                        <ul className='flex justify-evenly'>
                            <li className='  border-4  p-3 rounded-full'>L</li>
                            <li className='  border-4  p-3 rounded-full'>M</li>
                            <li className='  border-4  p-3 rounded-full'>V</li>
                        </ul>
                      </div> {/* Fin Dias  */}
                    <div className='space-y-2'>
                        <div className='flex p-2'>
                             <img src="./src/img/ubicacion.png" className='pr-3' alt="" /> 
                            <p> Cabildo 2626, Caba </p>
                        </div>
                         <div className='flex p-2'>
                            <img src="./src/img/tarjeta.png" className='pr-3' alt="" /> 
                            <p> Efectivo </p>
                        </div>
                    </div> {/* Fin 2 iconos */}
                    <button className='flex mx-auto m-10s p-2 px-5 bg-indigo-600 hover:bg-indigo-700 cursor-pointer rounded-lg text-white'
                    id='obtenerCodigo'
                    onClick={obtenerCodigo }
                    >
                        <h1> Obtener código </h1>
                    </button>
                    
                    <div id='codigo' className=''>  </div>

            {/* <!---------------------------------------- Google Maps   -----------------------------------------------> */}
                    
                    {/* <div id="map" class="h-96 w-full"> </div>  */}
                    {/* CARGAR FUNCION GOOGLE MAPS  */}
                    <img src="./src/img/googlemaps.jpg"  alt="" /> 

          
            {/* <!----------------------------------------  Google Maps -----------------------------------------------> */}
                   </div> {/* Fin Card  */}
            </div>  {/* Fin todo */}

      </div>
    )
}

export default DescuentoParticular