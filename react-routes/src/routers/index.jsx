import React from 'react'
import Home from '../pages/user/home'
import About from '../pages/user/about'
import { Route, Routes } from 'react-router-dom'
import Suppliers from '../pages/user/suppliers'
import SupplierDetails from '../pages/user/supplier_details'
import Dashboard from '../pages/admin/dashboard'
import Managment from '../pages/admin/suppliersManagement'
import UserLayout from '../layout/user'
import AdminLayout from '../layout/admin'

function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<UserLayout />}>
                    <Route index element={<Home />} />
                    <Route path="suppliers" element={<Suppliers />} />
                    <Route path="suppliers/:id" element={<SupplierDetails />} />
                    <Route path="about" element={<About />} />
                </Route>
                <Route path='/admin' element={<AdminLayout/>} >
                    <Route index element={<Dashboard />} />
                    <Route path="managment" element={<Managment />} />
                </Route>
            </Routes>
        </div>

    )
}

export default AppRoutes