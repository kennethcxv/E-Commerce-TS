import './App.css'
import { Route,Routes } from 'react-router-dom'
import Products from './pages/Products'
import Checkout from './pages/Checkout'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import { useEffect } from 'react'
import { fetchNewProducts } from './redux/slices/productsSlice'
import {useDispatch} from 'react-redux'
import ProductDetails from './pages/ProductDetails'
import NewProducts from './pages/NewProducts'
import NewProductDetails from './pages/NewProductDetails'
import type { AppDispatch } from './redux/store/store'
import Profile from './pages/Profile'

function App() {
  const dispatch = useDispatch<AppDispatch>()    
        useEffect(() => {
            // dispatch(fetchProducts()) 
            dispatch(fetchNewProducts()) 
        },[dispatch]
    )

  return (
    <>
      <Routes>
        <Route path='products'  element={<Products />}  />
        <Route path='checkout' element={<Checkout />}  />
        <Route path='contact' element={<Contact />}  />
        <Route path='cart' element={<Cart />}  />
        <Route path='products/:id'  element={<ProductDetails />}  />
        <Route path='newProducts'  element={<NewProducts />}  />
        <Route path='newProducts/:slug' element={<NewProductDetails />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      
    </>
  )
}

export default App
