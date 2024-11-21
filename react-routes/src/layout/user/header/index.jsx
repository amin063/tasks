import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <ul className='flex w-12/12 py-5 justify-evenly bg-blue-600 text-white'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/suppliers">Suppliers</Link></li>
        <li><Link to="/about">About</Link></li>
    </ul>
  )
}

export default Header