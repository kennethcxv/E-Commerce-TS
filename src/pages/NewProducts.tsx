import { useSelector } from "react-redux"
import { Link } from "react-router"
import type { RootState } from "../redux/store/store";

const NewProducts = () => {

    const newProducts = useSelector((state:RootState) => state.products.newProducts)

  return (
    <>
        <h1>THis is new Products</h1>

        {
            newProducts.map((item) => {
                return(
                <div key={item.id}>
                    <p>{item.title}{item.slug}{item.price}{item.description}</p>
                    <img src={item.images[0]} />
                    <Link to={`/newProducts/${item.slug}`}>Click</Link>
                </div>
                )
            })
        }
    </>
  )
}

export default NewProducts