import { useSelector } from "react-redux";
import { useParams } from "react-router";
import type { RootState } from "../redux/store/store";

const NewProductDetails = () => {
    const {slug} = useParams()

    console.log("This is params",slug)
    const newProducts = useSelector((state:RootState) => state.products.newProducts.find((item) => item.slug === slug))
    console.log(newProducts)
    return (
    <>
        <h1>{newProducts?.title}</h1>
    </>
  )
}

export default NewProductDetails