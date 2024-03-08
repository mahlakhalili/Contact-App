import React from "react";

function ContactItem({data : {name, id, lastName, phone, email}}){
    return(
        <li key={id}>
                <p>{name} {lastName}</p>
                <p>
                    {email}
                </p>
                <p>
                    {phone}
                </p>
                {/* <button></button> */}
        </li>
    )
}

export default ContactItem