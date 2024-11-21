import React from 'react'
import AppRoutes from './routers'
import { BrowserRouter, Routes } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}

export default App