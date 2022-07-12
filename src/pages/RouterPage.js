import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Test from './Test'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Login from './Login'

function RouterPage() {
  return (
    <BrowserRouter>

        <Routes>

            <Route path="/" element={<Test />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

        </Routes>

    </BrowserRouter>
  )
}

export default RouterPage