
import { useState } from 'react';
//import "../css/style.css";

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('')

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e
    const inputType = target.name;
    const inputValue = target.value;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    if(inputType === "firstName"){
       setFirstName(inputValue) 
    }
    else if (inputType === "lastName"){
       setLastName(inputValue);
    }else { 
      setMessage(inputValue)

    }
   
   
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName} ${lastName}`);
    const messageObj ={
      name: firstName,
      last: lastName,
      message: message
    }
    console.log(messageObj)
    setFirstName('');
    setLastName('');
    setMessage("")
  };

  return (
    <div className="container text-center">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
          <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Please Leave a Message"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
