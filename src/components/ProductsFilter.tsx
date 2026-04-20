import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { filterbyCategory } from "../redux/slices/productsSlice"

const ProductsFilter = () => {

    const Filters = ["men's clothing", "jewelery","electronics","women's clothing"]

    const [category, setCategory] = useState<string>("")

    const dispatch = useDispatch()

    console.log("This is category", category)

    const handleChange = (e) => {
        setCategory(e.target.value)
        dispatch(filterbyCategory(category))
    }

    // We need to add a filter Based on categories
    // Step 1: Create a filters Arr
    // Step 2: If the filters item is clicked then compare it with each items category. 
    // Step 3: IF the item category exist the use that
  return (
    <>
        <FormControl sx={{width:"200px"}}>
            <InputLabel id="demo-multiple-name-label">Filters</InputLabel>
            <Select labelId="demo-multiple-name-label" id="demo-multiple-name"
        value={category} onChange={(e) => handleChange(e)}> 
                {
                    Filters.map((item) => {
                        return(
                            <MenuItem value={item}>{item}</MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>

        
    </>
  )
}

export default ProductsFilter