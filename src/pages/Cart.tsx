import { useSelector,useDispatch } from "react-redux"
import Checkout from "./Checkout"
import Button from "@mui/material/Button"
import { actionIncrementQuantity } from "../redux/slices/addToCartSlice"
import { actionDecrementQuantity } from "../redux/slices/addToCartSlice"
import { actionDeleteItem } from "../redux/slices/addToCartSlice"

const Cart = () => {
  const addToCart = useSelector((state) => state.CartSlice.addToCart)
  const cartCount = useSelector((state) => state.CartSlice.cartCount)


  const dispatch = useDispatch()

  const handleIncrementQuantity = (itemID:number) => {
    dispatch(actionIncrementQuantity(itemID))
  }

  const handleDecrementQuantity = (itemID:number) => {
    dispatch(actionDecrementQuantity(itemID))
  }

  const handleDelete = (itemID:number) => {
    dispatch(actionDeleteItem(itemID))
  }

  return (
    <>
      <div>Cart</div>
      {
        addToCart.map((item)=>{
          return(
            <>
            
            <p>{item.title}</p>
            <img src={item.image}></img>
            <p>{(item.price * item.quantity).toFixed(2)}</p> 
            {/*  tofixed is a javascript method that essentially rounds the number to n deceminal points*/}
            
            <Button onClick={() => handleDecrementQuantity(item.id)} variant="contained">-</Button>
            <p>Quantity:{item.quantity}</p>            
            <Button onClick={() => handleIncrementQuantity(item.id)} variant="contained">+</Button>
            <Button onClick={() => handleDelete(item.id)}>Delete</Button>
            </>
          )
        })
      }
      <Checkout />
    </>
  )
}

export default Cart