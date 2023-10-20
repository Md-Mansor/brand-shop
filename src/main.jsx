import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import AddItem from './Components/AddItem/AddItem.jsx';
import Cart from './Components/Cart/Cart.jsx';
import LogIn from './Components/LogIn/LogIn.jsx';
import Register from './Components/Register/Register.jsx';
import About from './Components/Footer/AboutUs/About.jsx';
import Contact from './Components/Footer/Contact/Contact.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import Data from './Components/Data/Data.jsx';
import Brand from './Components/Brand/Brand.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/brand')
      },

      {
        path: "/addItem",
        element: <AddItem></AddItem>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/data",
        element: <Data></Data>
      },
      {
        path: "/brand",
        element: <Brand></Brand>
      },
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
