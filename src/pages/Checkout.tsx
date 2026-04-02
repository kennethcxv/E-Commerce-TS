import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { actionPlaceOrder } from "../redux/slices/addToCartSlice";
import type { Product } from "../types/Product";
import type { RootState } from "../redux/store/store"

const Checkout = () => {
  const cartItems = useSelector((state:RootState) => state.CartSlice.addToCart);
  const cartTotal = useSelector((state:RootState) => state.CartSlice.cartTotal);

  const dispatch = useDispatch();

  const handlePlaceOrder = (cartItems: Product[]) => {
    console.log(cartItems);
    dispatch(actionPlaceOrder(cartItems));
  };

  return (
    <Box
      sx={{
        backgroundColor: "#e7e5e4",
        height: "100%",
        py: 4,
        display: "flex",
      }}
    >
      <form>
        <Box
          sx={{
            borderRadius: 2,
            alignItems: "flex-start",

            width: "100%",

            mt: 3,
            ml: 2,
            backgroundColor: "rgba(250, 249, 247)",
            p: 3,
            pl: 4,
            pr: 4,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ mt: 2, fontWeight: "600", fontSize: 17 }}>
              CONTACT INFORMATION
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                mt: 2,
                justifyContent: "center",
                display: "flex",
                fontSize: 17,
              }}
            >
              * Required
            </Typography>
          </Box>
          <Typography sx={{ mt: 1 }}>Email*</Typography>
          <TextField
            sx={{
              width: "100%",
              mt: 1,
              minHeight: "50%",
              backgroundColor: grey[200],
              size: "small",
            }}
            variant="outlined"
            type="email"
          />
          <Typography sx={{ mt: 3, fontWeight: "600", fontSize: 17 }}>
            SHIPPING ADDRESS
          </Typography>
          <Typography sx={{ mt: 1 }}>Full Name*</Typography>
          <TextField
            sx={{ mt: 1, width: "100%", backgroundColor: grey[200] }}
            variant="outlined"
            type="text"
          />
          <Typography sx={{ mt: 2, mb: 1 }}>Street Address*</Typography>
          <TextField
            sx={{ width: "100%", mb: 2, backgroundColor: grey[200] }}
            variant="outlined"
            type="text"
          />
          <TextField
            sx={{ width: "100%", backgroundColor: grey[200] }}
            variant="outlined"
            type="text"
          />
          <Box
            sx={{ display: "grid", mt: 2, gridTemplateColumns: "1fr 1fr 1fr" }}
          >
            <Typography sx={{ mb: 1 }}>City*</Typography>
            <Typography>State/Province</Typography>
            <Typography>Zip/Postal Code</Typography>
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
            <TextField
              sx={{ mr: 2, backgroundColor: grey[200] }}
              variant="outlined"
              type="text"
            />
            <TextField
              sx={{ mr: 2, backgroundColor: grey[200] }}
              variant="outlined"
              type="text"
            />
            <TextField
              sx={{ mr: 2, backgroundColor: grey[200] }}
              variant="outlined"
              type="text"
            />
          </Box>
          <Typography sx={{ mt: 2, mb: 1 }}>Country*</Typography>
          <TextField
            sx={{ width: "100%", backgroundColor: grey[200], mb: 3 }}
            variant="outlined"
            type="Text"
          />

          <Box>
            <Typography sx={{ fontSize: 17, fontWeight: 600 }}>
              {" "}
              PAYMENT INFO
            </Typography>
            <Typography sx={{ mt: 1 }}>Credit Card Number</Typography>
            <TextField
              sx={{
                width: "100%",
                mt: 1,
                minHeight: "50%",
                backgroundColor: grey[200],
                size: "small",
              }}
            />
            <Typography sx={{ mt: 2 }}>Credit Card Number</Typography>
            <TextField
              sx={{
                width: "100%",
                mt: 1,
                minHeight: "50%",
                backgroundColor: grey[200],
                size: "small",
              }}
            />
            <Typography sx={{ mt: 2, mb: 1 }}>Expiration date</Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                width: "65%",
              }}
            >
              <TextField
                label="Month"
                sx={{ mr: 2, backgroundColor: grey[200] }}
              />
              <TextField label="Year" sx={{ backgroundColor: grey[200] }} />
            </Box>
            <Typography sx={{ mt: 2, mb: 1 }}>Security Code</Typography>
            <TextField sx={{ backgroundColor: grey[200], width: "30%" }} />
          </Box>
        </Box>
      </form>
      <Box
        sx={{
          width: "40%",
          ml: "auto",
          mr: 4,
          mt: 3,
        }}
      >
        {cartItems.map((item) => {
          return (
            <Box
              sx={{
                mb: 4,
                width: "100%",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr" }}>
                <img src={item.image} className=" " />
                <Typography sx={{ ml: 4, mt: 2, width: "70%" }}>
                  {item.title}
                </Typography>
                <Typography sx={{ mt: 2, mr: "auto", width: "120px" }}>
                  ${item.price * item.quantity} USD
                </Typography>
              </Box>
            </Box>
          );
        })}
        <Typography sx={{ border: 1, color: "lightgray" }}></Typography>
        <TextField label="Discount Code" sx={{ mt: 3, width: "100%", mb: 3 }} />
        <Typography sx={{ border: 1, color: "lightgray" }}></Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
          <Typography>SubTotal</Typography>
          <Typography>${cartTotal} USD</Typography>
        </Box>
        <Typography sx={{ border: 1, color: "lightgray" }}></Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Typography>Total</Typography>
          <Typography sx={{ fontSize: 20 }}>${cartTotal} USD</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => handlePlaceOrder(cartItems)}
            variant="outlined"
            sx={{
              mt: 2,
              width: "50%",
              height: "50px",
              borderRadius: "50px",
              color: "black",
              borderColor: "black",
            }}
          >
            Place Order
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
