import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Cart from './Components/Pages/Cart'
import Checkout from './Components/Pages/Checkout'
import Products from './Components/Pages/Products'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import { Toaster } from 'react-hot-toast'
import Subscription from './Components/Pages/Subscription'

const App = () => {
  return (
    <>

    <Navbar/>
 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/subscription' element={<Subscription/>}/>
    </Routes>

    <Footer/>
    <Toaster position='top-center'/>
    </>
  )
}
export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}