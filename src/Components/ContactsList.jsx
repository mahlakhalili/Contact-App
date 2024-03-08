import React from "react";

import ContactItem from "./ContactItem"

function ContactsList({contacts}){
    return(
        <div>
            <h3>Contact List</h3>
            {
                contacts.length ? (<ul>
                    {
                        contacts.map((contact) => (
                            <ContactItem key={contact.id} data={contact} />
                        ))
                    }
                </ul>) 
                : (<p>No Contacts Yet!</p>)

            }
            
        </div>
    )
}

export default ContactsList