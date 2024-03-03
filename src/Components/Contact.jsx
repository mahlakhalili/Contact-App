import React, { useState } from "react";

import ContactsList from "./ContactsList";
import inputs from "../Constants/inputs";

function Contact(){

   

    const [contacts , setContacts] = useState([])

    const[contact , setContact] = useState({
        name     : "",
        lastName : "" , 
        email    : "" , 
        phone    : "",
    })

    const[alert , setAlert] = useState("")

    const ChangeHandler = event=>{
        const name  = event.target.name
        const value = event.target.value

        setContact(contact =>({...contact , [name] : value}))
    }

    const addHandler = ()=>{
        if(
            !contact.name || 
            !contact.lastName || 
            !contact.email || 
            !contact.phone
            ) {
            setAlert("Please enter valid data!")
            return;
            }
        setAlert("")
        setContacts(contacts =>([...contacts , contact]));
        setContact({
            name     : "",
            lastName : "" , 
            email    : "" , 
            phone    : "",
        })
    }

    return(
            <div>
                {  
                  inputs.map((input , index) =>(
                  <input 
                        key         = {index}
                        type        = {input.type}
                        placeholder = {input.placeholder}
                        name        = {input.name}
                        value       = {contact[input.name]}
                        onChange    = {ChangeHandler}
                    />))}
                <div>
                    <input
                        type="text" 
                        placeholder="Name" 
                        name="name"
                        value={contact.name} 
                        onChange={ChangeHandler} />
                    <input 
                        type="text" 
                        placeholder="Last Name" 
                        name="lastName"
                        value={contact.lastName} 
                        onChange={ChangeHandler}/>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        name="email"
                        value={contact.email} 
                        onChange={ChangeHandler} />
                    <input 
                        type="number" 
                        placeholder="Phone" 
                        name="phone"
                        value={contact.phone} 
                        onChange={ChangeHandler}/>
                    <button onClick={addHandler}>Add Contact</button>
                </div>
                <div>
                    {alert && <p>{alert}</p>}
                </div>
                <ContactsList contacts = {contacts} />
            </div>
    )
}

export default Contact