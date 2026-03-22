import { useSelector } from "react-redux"
import ProductsSearchBar from "../components/ProductsSearchBar"
import { useState } from "react"

const Products = () => { 


    const apiProducts = useSelector((state) => state.products.products)
      const [SearchBar,setSearchBar] = useState<string>("")

      const filteredProducts = apiProducts.filter((item) => {
        return item.title.includes(SearchBar)
      })

    console.log(apiProducts)
    return (
    <>
    <ProductsSearchBar SearchBar={SearchBar} setSearchBar={setSearchBar} />
      
      {
        filteredProducts.map((item)=>{
          return(
          <p>{item.title}</p>
          )
        })
      }
    </>
  )
}

export default Products