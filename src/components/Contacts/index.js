import React, { useState, useEffect } from 'react'
import List from './List'
import Form from './Form';

function Contacts() {

  const [contacts, setContacts] = useState ([
    {
      fullname: 'Mehmet',
      phone_number:  "05368976567"
    },{
      fullname: "Ali",
      phone_number: "05325580907"
    }, {
      fullname: "Emre",
      phone_number: "05557898875"
    }
  ]);
  
  useEffect (() => {
    console.log(contacts);
  }, [contacts])

  return (
    <div id="container">    

        <h1 id='contactH1'>Contacts</h1>
    
        <List contacts={contacts}/>

        <Form addContact={setContacts} contacts={contacts}/>

    </div>

  )
}

export default Contacts