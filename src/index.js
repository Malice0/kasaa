import React from 'react'
import ReactDOM from 'react-dom/client'

import './Styles/normalize.css'

import Home from './Pages/Home/home'
import About from './Pages/About/About'
import Housing from './Pages/Housing/Housing'
import Header from './Components/header/Hearder'
import Footer from './Components/Footer/Footer'
import Error from './Components/Error/error'

import { BrowserRouter, Routes, Route } from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/housing/:id" element={<Housing />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
)
