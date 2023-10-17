import { useState } from 'react'
import './App.css'
import NavBar from './Components/Navbar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>

      <NavBar></NavBar>
      <div className='min-h-screen'>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>


    </>
  )
}

export default App
