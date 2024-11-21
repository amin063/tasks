import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <ul className='flex w-12/12 py-5 justify-evenly bg-blue-600 text-white'>
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/admin/managment">Managment</Link></li>
    </ul>
  )
}

export default Header