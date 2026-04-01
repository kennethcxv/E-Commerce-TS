import { useSelector } from "react-redux"
import ProductsSearchBar from "../components/ProductsSearchBar"
import Button from "@mui/material/Button"
import { useDispatch } from "react-redux"
import { actionAddToCart } from "../redux/slices/addToCartSlice"
import type { Product } from "../types/Product"
import { Link } from "react-router"

const Products = () => { 

    const filteredProducts = useSelector((state) => state.products.filteredProducts)
    const dispatch = useDispatch()    
    const products = useSelector((state) => state.products.products)

const handleAddToCart = (product:Product) => {
  console.log("before dispatch", product)
  dispatch(actionAddToCart(product))
}

    return (
    <>
    <ProductsSearchBar  />
      {
        products.map((item)=>{
          return(
            <>
          <p>{item.title}</p>
          <img src={item.image} />
          <p>{item.price}</p>
          <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>    
          <Link to={`/products/${item.id}`}>View Details</Link>
          
          </>
          )
        })
      }
    </>
  )
}

export default Products