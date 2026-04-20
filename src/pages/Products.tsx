import { useSelector } from "react-redux";
import ProductsSearchBar from "../components/ProductsSearchBar";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { actionAddToCart } from "../redux/slices/addToCartSlice";
import type { Product } from "../types/Product";
import { Link } from "react-router";
import type { RootState } from "../redux/store/store";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProductsFilter from "../components/ProductsFilter";

const Products = () => {
  // const filteredProducts = useSelector((state:RootState) => state.products.filteredProducts)
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);

  const filteredProducts = useSelector((state:RootState) => state.products.filteredProducts)

  const handleAddToCart = (product: Product) => {
    console.log("before dispatch", product);
    dispatch(actionAddToCart(product));
  };

  return (
    <div className="mt-4">
      <ProductsSearchBar />
      <ProductsFilter />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 2,
          m: 3,
        }}
      >
        {filteredProducts.map((item) => {
          return (
            <Box>
              <Box
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  p: 2,
                  backgroundColor: "rgb(228, 237, 240)",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: "220px",
                    height: "220px",
                    objectFit: "contain",
                    mx: "auto",
                  }}
                />{" "}
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ m: 2 }}>{item.title}</Typography>
                  <Typography sx={{ m: 2 }}>{item.price}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Button
                    sx={{ m: 2 }}
                    variant="contained"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to cart
                  </Button>
                  <Link style={{ marginTop: "20px" }} to={`/products/${item.id}`}>
                    View Details
                  </Link>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </div>
  );
};

export default Products;
