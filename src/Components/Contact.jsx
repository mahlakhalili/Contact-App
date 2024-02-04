import React, { useState } from "react";

function Contact(){

    const[contact , setContact] = useState({
        name : "", lastName : "" , email:"" , phone:""
    })

    const ChangeHandler = event=>{
        const name  = event.target.name
        const value = event.target.value

        setContact(contact =>({...contact , [name] : value}))
    }

    const addHandler = ()=>{

    }

    return(
            <div>
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
            </div>
    )
}

export default Contact