import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { actionIncrementQuantity } from "../redux/slices/addToCartSlice";
import { actionDecrementQuantity } from "../redux/slices/addToCartSlice";
import { actionDeleteItem } from "../redux/slices/addToCartSlice";
import { Link } from "react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import type { RootState } from "../redux/store/store";

const Cart = () => {
  const addToCart = useSelector((state:RootState) => state.CartSlice.addToCart);
  const cartCount = useSelector((state:RootState) => state.CartSlice.cartCount);
  const cartTotal = useSelector((state:RootState) => state.CartSlice.cartTotal);

  const dispatch = useDispatch();

  const handleIncrementQuantity = (itemID: number) => {
    dispatch(actionIncrementQuantity(itemID));
  };

  const handleDecrementQuantity = (itemID: number) => {
    dispatch(actionDecrementQuantity(itemID));
  };

  const handleDelete = (itemID: number) => {
    dispatch(actionDeleteItem(itemID));
  };

  

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr 1fr 1fr 60px",
          alignItems: "center",
          mx: 20,
          mt: 10,
          fontWeight: 600,
          color: "gray",
          border: 0,
          backgroundColor: "rgba(249, 250, 251)",
          height: "40px",
          borderColor: "gray",
          borderRadius: 2,
        }}
      >
        <Typography sx={{ ml: 2 }}>Product</Typography>
        <Typography>Rating</Typography>
        <Typography>Quantity</Typography>
        <Typography>Price</Typography>
      </Box>
      {addToCart.map((item) => {
        return (
          <>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "3fr 1fr 1fr 1fr 60px",
                alignItems: "center",
                mx: 20,
                mt: 2,
                borderBottom: 1,
                borderColor: "lightgray",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}
              >
                <Box
                  sx={{
                    width: 90,
                    height: 110,
                    objectFit: "contain",
                    bgcolor: "rgba(249, 250, 251)",

                    borderRadius: 2,
                    p: 1,
                  }}
                >
                  <img src={item.image}></img>
                </Box>

                <Box sx={{ width: "60%" }}>
                  <Typography>{item.title}</Typography>
                </Box>
              </Box>

              <Typography>{item.rating.rate}</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  variant="text"
                  onClick={() => handleDecrementQuantity(item.id)}
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
                <Typography>{item.quantity}</Typography>
                <Button
                  variant="text"
                  onClick={() => handleIncrementQuantity(item.id)}
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

              <Typography>{(item.price * item.quantity).toFixed(2)}</Typography>
              <Button onClick={() => handleDelete(item.id)}>
                <ClearOutlinedIcon sx={{ color: "black" }} />
              </Button>

              {/*  tofixed is a javascript method that essentially rounds the number to n deceminal points*/}
            </Box>
            

          </>
        );
      })}
      <Box sx={{display:"flex"}}>
            <Box sx={{border:1, width:"100%", ml:20, mr:3, mt:6,borderColor:"lightgray",  borderRadius:2}}>
              <Box sx={{display:"flex", justifyContent:"space-between", mt:2,mb:1, mx:2}}>
                <Typography sx={{color:"gray",  }}>Discount</Typography>
                <Typography sx={{ color:"black"}}>$0.00</Typography>
                </Box>
               <Box sx={{display:"flex", justifyContent:"space-between", mb:2, mx:2}}>
                <Typography sx={{color:"gray"}}>Delivery</Typography>
                <Typography sx={{color:"black"}}>$20.00</Typography>
              </Box>
            </Box>
            <Box sx={{border:1, width:"100%", mr:20, mt:6,borderColor:"lightgray",  borderRadius:2}}>
              <Box sx={{display:"flex", justifyContent:"space-between", mt:2,mb:1, mx:2}}>
                <Typography sx={{color:"gray",  }}>SubTotal</Typography>
                <Typography sx={{ color:"black"}}>{cartTotal}</Typography>
                </Box>
               <Box sx={{display:"flex", justifyContent:"space-between", mb:2, mx:2}}>
                <Typography sx={{color:"gray"}}>Total</Typography>
                <Typography sx={{color:"black"}}>{cartTotal}</Typography>
              </Box>
            </Box>
            </Box>
      <Box sx={{display:"flex",  justifyContent:"center"}}>

{cartCount > 0 && (
  <Link
    to="/checkout"
    style={{
      display: "block",
      width: "76%",
  
      height:"40px", 
      backgroundColor: "  blue",
      color: "white",
      textDecoration: "none",
      textAlign: "center",
      alignItems:"center",
      padding: "5px",
      borderRadius: "10px",
      fontSize: "20px",
      marginTop:"30px",
      marginBottom:"30px",
    }}
  >
    Checkout
  </Link>
  
)}      </Box>
    </>
  );
};

export default Cart;
