import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { useState } from "react"
import Toast from "../components/Toast"

const Profile = () => {
    const [profileInputs, setProfileInputs] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
    })
      const [toastOpen, setToastOpen] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(profileInputs)
        localStorage.setItem("profile", JSON.stringify(profileInputs)) // since profile inputs is a object(also needed for arrays) we need to convert it to a string by using json.stringify
        setToastOpen(true)
        // local Storage only has 3 main methods setitem which is used for saving and updating, getItem which is used for fetching, and deleteItem is to delete
    }

    return (


    <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <TextField type="text" label="First name" value={profileInputs.firstName}  onChange={(e) => setProfileInputs({...profileInputs, firstName:e.target.value})}/>
            <TextField type="text" label="Last name" value={profileInputs.lastName} onChange={(e) => setProfileInputs({...profileInputs,lastName:e.target.value})}/>
            <TextField type="email" label="Email" value={profileInputs.email} onChange={(e) => setProfileInputs({...profileInputs,email:e.target.value})}/>
            <TextField type="text" label="Phone number" value={profileInputs.phoneNumber} onChange={(e) => setProfileInputs({...profileInputs,phoneNumber:e.target.value})}/>
            <Button variant="contained" type="submit">Submit</Button>
        </form>
        <Toast toastOpen={toastOpen} setToastOpen={setToastOpen} message={"Form submitted successfully"}/>
    </>

    )
}

export default Profile