import { useState } from 'react'
import './App.css'
import NavBar from './Components/Navbar/NavBar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>

      <NavBar></NavBar>
      <Outlet></Outlet>


    </>
  )
}

export default App
