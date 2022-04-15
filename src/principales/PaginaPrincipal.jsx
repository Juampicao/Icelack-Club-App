import React from 'react'
import BannerPrincipal from '../componentes/paginaPrincipal/bannerPrincipal/BannerPrincipal'
import DescuentosPrincipal from '../componentes/paginaPrincipal/bannerPrincipal/DescuentosPrincipal'
import SorteosPrincipal from '../componentes/paginaPrincipal/bannerPrincipal/SorteosPrincipal'
import NoticiasPrincipal from '../componentes/paginaPrincipal/bannerPrincipal/NoticiasPrincipal'


import { Link } from 'react-router-dom'

const PaginaPrincipal = () => {
    return (
        <>
            <h1> Pagina Principal.jsx</h1>
            <BannerPrincipal />
            <DescuentosPrincipal />
            <SorteosPrincipal />
            <NoticiasPrincipal/>
            
        </>        
  )
}

export default PaginaPrincipal