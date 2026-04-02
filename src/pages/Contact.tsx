import Button from "@mui/material/Button"
import { useState } from "react"
import type { ContactInterface } from "../types/ContactInterface"

const Contact = () => {
    // In the contact page you will have a form where it will have name, email, subject, and description 
    // And then return it in the conseol then show it on screen
    const [userInformation,setUserInformation] = useState<ContactInterface>({
      name:"",
      email:"",
      subject:"",
      description:""
    })

    const [storeUserInformation,setStoreUserInformation] = useState<ContactInterface[]>([])

      const handleSubmit = (e:React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStoreUserInformation((prev) => [...prev, userInformation]) 
      }

    return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="name" value={userInformation.name} onChange={(e) => setUserInformation({...userInformation,name:e.target.value})} />
        <input type="email" placeholder="email" value={userInformation.email} onChange={(e) => setUserInformation({...userInformation,email:e.target.value})} />
        <input type="text" placeholder="subject" value={userInformation.subject} onChange={(e) => setUserInformation({...userInformation,subject:e.target.value})} />
        <input type="text" placeholder="description" value={userInformation.description} onChange={(e) => setUserInformation({...userInformation,description:e.target.value})} />
        <Button type="submit" variant="contained">Submit</Button>
      </form>
      {
        storeUserInformation.map((item:ContactInterface) => {
          return(
            <>
              <p>{item.name} {item.email} {item.subject} {item.description}</p>
            </>
          )
        })
      }
    </>
  )
}

export default Contact