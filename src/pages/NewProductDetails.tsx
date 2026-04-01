import { useSelector } from "react-redux";
import { useParams } from "react-router";

const NewProductDetails = () => {
    const {slug} = useParams()

    console.log("This is params",slug)
    const newProducts = useSelector((state) => state.products.newProducts.find((item) => item.slug === slug))
    console.log(newProducts)
    return (
    <>
        <h1>{newProducts.title}</h1>
    </>
  )
}

export default NewProductDetails