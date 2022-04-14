import React from 'react'
import { Link } from 'react-router-dom'

const NoticiasPrincipal = () => {
  return (
    < >
       <div className='h-56 bg-slate-400'>
         <h1> <Link to='noticias'>Noticias</Link> </h1>
        </div>
    </>
  )
}

export default NoticiasPrincipal