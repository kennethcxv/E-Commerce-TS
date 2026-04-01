import { useSelector } from "react-redux"
import { Link } from "react-router"


const NewProducts = () => {

    const newProducts = useSelector((state) => state.products.newProducts)

  return (
    <>
        <h1>THis is new Products</h1>

        {
            newProducts.map((item) => {
                return(
                <div key={item.id}>
                    <p>{item.title}{item.slug}{item.price}{item.description}</p>
                    <img src={item.images} />
                    <Link to={`/newProducts/${item.slug}`}>Click</Link>
                </div>
                )
            })
        }
    </>
  )
}

export default NewProducts