import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
// import { Collection } from 'mongoose'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOder from './pages/PlaceOder'
import Order from './pages/Order'
import Navbar from './components/Navbar'
import Collection from "./pages/Collection";
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivacyPolicy from './pages/PrivacyPolicy'
import Register from './pages/Register'
import Delivery from './pages/Delivery'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] ms:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar />
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<PrivacyPolicy />}/>
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/place-order" element={<PlaceOder />} />
        <Route path="/orders" element={<Order />} />
        <Route path='/delivery' element={<Delivery/>} />
        {/* <Route path='/login' element={<Login/>}/> */}
      </Routes>
      <Footer/>

    </div>
  )
}

export default App