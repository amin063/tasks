import React from 'react'
import Header from './header'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>

  )
}

export default AdminLayout