import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='titulo_icelackApp fixed top-0 w-full bg-slate-900 uppercase font-bold text-lg text-white p-5 text-center italic'>  <Link to="/"> Icelack Club App </Link></div>
  )
}

export default Header