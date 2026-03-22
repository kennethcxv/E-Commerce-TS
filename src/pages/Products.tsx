import { useSelector } from "react-redux"

const Products = () => { 
    
    const apiProducts = useSelector((state) => state.products.products)
  
    console.log(apiProducts)
    return (
    <>
      
    </>
  )
}

export default Products