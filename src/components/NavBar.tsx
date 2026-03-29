import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";


const NavBar = () => {

  const cartCount = useSelector((state) => state.CartSlice.cartCount)
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ display: "flex", gap: 5 }}>
            <Typography component={Link} to="/products"
              sx={{ "&:hover": { opacity: 0.8 }, cursor: "pointer" }}
              variant="h6"

            >
              Products
            </Typography>
            <Typography component={Link} to="/contact"
              sx={{ "&:hover": { opacity: 0.8 }, cursor: "pointer" }}
              variant="h6"

            >
              Contact
            </Typography>
            <Typography component={Link} to="/cart"

              sx={{
                "&:hover": { opacity: 0.8 },
                cursor: "pointer",
                alignItems: "right",
              }}
              variant="h6"
            >
              <Box sx={{position:"relative"}}>

                <ShoppingCartOutlinedIcon />
                { 
                  cartCount > 0 && <span style={{backgroundColor:"black", fontSize:"12px", position:"absolute", right:"-1px", borderRadius:"50%", height:"14px", width:"14px", textAlign:"center"}}>
                  { cartCount}
                </span>
                }


              </Box>

            </Typography>
            <Typography>
              {
                cartCount > 10 &&                <span>
                settings
              </span>
              }

            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default NavBar;
