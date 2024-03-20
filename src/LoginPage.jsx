import React from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import Login from './components/Login/Login'

const LoginPage = () => {
  return (
    <div className='App'>
        <div>
            <Login/>
            <ToastContainer/>
        </div>
    </div>
  )
}

export default LoginPage