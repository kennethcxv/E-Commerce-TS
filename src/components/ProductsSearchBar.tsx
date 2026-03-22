import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// Steps to add a search bar
// Step 1 Create a search bar component and add a input field
// Step 2 Create a state variable since we are chaning the UI in react
// Step 3 Create a button to submit your word
// Step 4 Create a for loop and if statement that compars the searched word with the title of each product
type ProductsSearchBarProps = {
  SearchBar: string;
  setSearchBar: React.Dispatch<React.SetStateAction<string>>;
};
const ProductsSearchBar = ({SearchBar,setSearchBar}:ProductsSearchBarProps) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
  return (
    <>
    <form onSubmit={(e)=>handleSubmit(e)}>
        <TextField id="outlined-basic" label="Search" variant="outlined" value={SearchBar} onChange={(e) => setSearchBar(e.target.value)} />
        <Button type='submit'> Submit Here</Button>
    </form>

    </>
  )
}

export default ProductsSearchBar