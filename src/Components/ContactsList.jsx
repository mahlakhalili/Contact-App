import React from "react";

function ContactsList({contacts}){
    return(
        <div>
            <h3>Contact List</h3>
            {
                contacts.length ? (<ul>
                    {
                        contacts.map((contact) => (<li key={contact.id}>
                            <p>{contact.name} {contact.lastName}</p>
                            <p>
                                {contact.email}
                            </p>
                            <p>
                                {contact.phone}
                            </p>
                            <button></button>
                        </li>))
                    }
                </ul>) 
                : (<p>No Contacts Yet!</p>)

            }
            
        </div>
    )
}

export default ContactsList