import Button from "@mui/material/Button"
import { useSelector } from "react-redux"
import { useParams } from "react-router"

const ProductDetails = () => {
    
    const {id} = useParams()
    console.log("THis is id", id)  

    const products = useSelector((state) => state.products.products.find((item) => item.id === Number(id))) 
        console.log(products)  
    // const newProduct = useSelector((state) => state.products.newProduct.find((item) => item.slug === slug))
    // Find is basically a filter but it just shows the first element in the array and stops the loop

  return (
    <>
         
        <p>{products.description}{products.price}</p>
        <img src={products.image} />
        <Button>Add to Cart</Button> 
        

    </>
  )
}

export default ProductDetails