
  import { useSelector } from "react-redux"

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

            
            </>
          )
        })
      }
    </>
  )
}

export default Cart