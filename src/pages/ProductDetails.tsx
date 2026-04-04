import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import type { RootState } from "../redux/store/store";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  actionDecrementQuantity,
  actionIncrementQuantity,
} from "../redux/slices/addToCartSlice";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const ProductDetails = () => {
  const { id } = useParams();
  const itemID = Number(id);

  console.log("THis is id", id);

  const dispatch = useDispatch();

  const handleIncrementQuantity = (itemID: number) => {
    dispatch(actionIncrementQuantity(itemID));
  };

  const handleDecrementQuantity = (itemID: number) => {
    dispatch(actionDecrementQuantity(itemID));
  };

  const products = useSelector((state: RootState) =>
    state.products.products.find((item) => item.id === Number(id)),
  );
  const cartItem = useSelector((state: RootState) =>
    state.CartSlice.addToCart.find((item) => item.id === itemID),
  );

  console.log(products);
  // const newProduct = useSelector((state) => state.products.newProduct.find((item) => item.slug === slug))
  // Find is basically a filter but it just shows the first element in the array and stops the loop

  return (
    <Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", mt: 10 }}>
        <Box
          component="img"
          src={products?.image}
          sx={{ height: "400px", width: "400px", ml: 10, objectFit: "contain" }}
        ></Box>
        <Box sx={{ mr: 15 }}>
          <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
            {products?.title}
          </Typography>
          <Typography sx={{ mt: 2 }}>{products?.description}</Typography>
          <Typography sx={{ mt: 2, fontWeight: 600 }}>
            Rating:{products?.rating.rate}
          </Typography>
          <Typography sx={{ mt: 2, fontWeight: 600 }}>Quantity:</Typography>
          <Box sx={{ display: "flex", mt: 1 }}>
            <Button
              variant="text"
              onClick={() => handleDecrementQuantity(itemID)}
              sx={{
                color: "black",
                mr: 1,
                borderRadius: "50%",
                border: 1,
                borderColor: "lightgray",
                minWidth: "25px",
                height: "25px",
              }}
            >
              -
            </Button>
            <Typography>{cartItem ? cartItem.quantity : 0}</Typography>
            <Button
              variant="text"
              onClick={() => handleIncrementQuantity(itemID)}
              sx={{
                color: "black",
                ml: 1,
                borderRadius: "50%",
                border: 1,
                borderColor: "lightgray",
                minWidth: "25px",
                height: "25px",
              }}
            >
              +
            </Button>
          </Box>

          <Box sx={{ display: "flex", mt: 2 }}>
            <Checkbox
              sx={{ mb: 1 }}
              checkedIcon={<RadioButtonCheckedIcon />}
              icon={<RadioButtonUncheckedIcon />}
            />

            <Box sx={{ mt: 1 }}>
              <Typography sx={{ fontSize: 17, fontWeight: 600 }}>
                Buy once - ${products?.price}
              </Typography>
              <Typography>
                Or 4 installment payments of{" "}
                {products ? (products.price / 4).toFixed(2) : "0.00"}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", mt: 2 }}>
            <Checkbox
              sx={{ mb: 1 }}
              checkedIcon={<RadioButtonCheckedIcon />}
              icon={<RadioButtonUncheckedIcon />}
            />

            <Box sx={{ mt: 1 }}>
              <Typography sx={{ fontSize: 17, fontWeight: 600 }}>
                Subscribe &
                <Box component="span" sx={{ color: "green" }}>
                  {" "}
                  save "$5"{" "}
                </Box>{" "}
                - ${products ? (products?.price - 5).toFixed(2) : "0.00"}
              </Typography>
              <Typography>
                Never run out of a good product. Cancel Anytime
              </Typography>
            </Box>
          </Box>
          <Box sx={{ border: 1, mt: 4 }}>
            <Button
              sx={{ width: "100%", height: "55px", gap: 0.5 }}
              variant="contained"
            >
              <ShoppingBagOutlinedIcon /> Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;
