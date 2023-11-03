import React from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import { RegisterPage } from './RegisterPage'
import LoginPage from './LoginPage'

const Navbar = () => {
  return (
    <div>
        <BrowserRouter>
        
        <div className="bg-slate-800">
            <NavLink className="text-white flex justify-evenly p-4 text-[25px]">
                <Link className="hover:text-blue-300 " to='/'>Home</Link>
                <Link className="hover:text-blue-300 " to='/register-page'>Register</Link>
                <Link className="hover:text-blue-300 " to='/login-page'>Login</Link>
            </NavLink>
        </div>

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/register-page' element={<RegisterPage/>} />
            <Route path='/login-page' element={<LoginPage/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Navbar