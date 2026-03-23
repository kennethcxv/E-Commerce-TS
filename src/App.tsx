import './App.css'
import { Route,Routes } from 'react-router-dom'
import Products from './pages/Products'
import Checkout from './pages/Checkout'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import { useEffect } from 'react'
import { fetchProducts } from './redux/slices/productsSlice'
import {useDispatch} from 'react-redux'

function App() {
  const dispatch = useDispatch()    
        useEffect(() => {
            dispatch(fetchProducts()) 
        },[dispatch]
    )

  return (
    <>
      <Routes>
        <Route path='products' element={<Products />}  />
        <Route path='checkout' element={<Checkout />}  />
        <Route path='contact' element={<Contact />}  />
        <Route path='cart' element={<Cart />}  />
      </Routes>
      
    </>
  )
}

export default App
