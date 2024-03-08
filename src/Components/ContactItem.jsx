import React from "react";

function ContactItem({data : {name, id, lastName, phone, email} , deleteHandler}){
    return(
        <li key={id}>
                <p>{name} {lastName}</p>
                <p>
                    {email}
                </p>
                <p>
                    {phone}
                </p>
                <button onClick = {() => deleteHandler(id)} > Delete </button>
        </li>
    )
}

export default ContactItem