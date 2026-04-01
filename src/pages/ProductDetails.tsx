// import Button from "@mui/material/Button"
// import { useSelector } from "react-redux"
// import { useParams } from "react-router"

// const ProductDetails = () => {
    
//     const params = useParams()
//     console.log("This is params", params)
//     // const product = useSelector((state) => state.products.products.find((item) => item.id === Number(id)))
//     const newProduct = useSelector((state) => state.products.newProduct.find((item) => item.slug === slug))
//     // Find is basically a filter but it just shows the first element in the array and stops the loop
    

//     // console.log(product)

//     // console.log("This is params", id)

//   return (
//     <>
//         {/* <h1 className="text-center">{product.title}</h1>
//         <p>{product.description}{product.price}</p>
//         <img src={product.image} />
//         <Button>Add to Cart</Button> */}
//         <h1>{newProduct.name}</h1>
//         {/* <p>{product.id}</p> */}
//     </>
//   )
// }

// export default ProductDetails