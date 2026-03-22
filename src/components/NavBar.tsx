import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box";

const NavBar = () => {
  return (
    <>
    <AppBar position="fixed">
      <Toolbar >
        <Box sx={{ display:"flex" ,gap:5}}>
        <Typography sx={{"&:hover": {opacity: 0.8,},cursor:"pointer"}} variant="h6" component="a" href="/products">Products</Typography>
        <Typography sx={{"&:hover": {opacity: 0.8,},cursor:"pointer"}} variant="h6" component="a" href="/contact">Contact</Typography>
        <Typography sx={{"&:hover": {opacity: 0.8,},cursor:"pointer"}} variant="h6" component="a" href="/cart">Cart</Typography>
        <Typography sx={{"&:hover": {opacity: 0.8,},cursor:"pointer"}} variant="h6" component="a" href="/checkout">Checkout</Typography>
        </Box>
      </Toolbar>

    </AppBar>
    <Toolbar />
    </>
    )
}

export default NavBar