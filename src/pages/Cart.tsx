import { useSelector } from "react-redux"
import Checkout from "./Checkout"

const Cart = () => {
  const addToCart = useSelector((state) => state.CartSlice.addToCart)
  const cartCount = useSelector((state) => state.CartSlice.cartCount)

  console.log(addToCart)
  
  return (
    <>
      <div>Cart</div>
      {
        addToCart.map((item)=>{
          return(
            <>
            
            <p>{item.title}</p>
            <img src={item.image}></img>
            <p>{item.price}</p>
            
            <p>Quantity:{item.quantity}</p>
            
            
            </>
          )
        })
      }
      <Checkout />
    </>
  )
}

export default Cart