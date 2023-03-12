import React from 'react';
import { useState, useEffect } from 'react'; 
import Contacts from '..';
import "./style.css";

function Form({addContact, contacts}) {

  const initialFormValues = {fullname: "", phone_number: ""};

  const [form,setForm] = useState(initialFormValues);

  useEffect(()=> {
    setForm(initialFormValues);
  }, [contacts])


  const onChangeInput = (e) => {
    setForm({...form,[e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
      addContact([...contacts, form]);

  };

  

  return (

    <form onSubmit={onSubmit}>

        <div>
        <input name='fullname' placeholder='full name' value={form.fullname} onChange={onChangeInput}/>
        </div>

        <div>
        <input name='phone_number' placeholder='phone number' value={form.phone_number} onChange={onChangeInput}/>
        </div>

        <div>
          <button>Add</button>
        </div>

    </form>
    
    

  )
};

export default Form;