import TextField from "@mui/material/TextField";

// Steps to add a search bar
// Step 1 Create a search bar component and add a input field
// Step 2 Create a state variable since we are chaning the UI in react
// Step 3 Create a button to submit your word
// Step 4 Create a for loop and if statement that compars the searched word with the title of each product

import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProducts } from "../redux/slices/productsSlice";

const ProductsSearchBar = () => {
  const [SearchBar,setSearchBar] = useState<string>("")

  const dispatch = useDispatch()

  const handleSearch = (e) => {
      setSearchBar(e.target.value)
      console.log(e.target.value,"This is the data sent to redux")
      dispatch(searchProducts(e.target.value))
  }

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={SearchBar}
        onChange={(e) => handleSearch(e)}
      />
    </>
  );
};

export default ProductsSearchBar;
