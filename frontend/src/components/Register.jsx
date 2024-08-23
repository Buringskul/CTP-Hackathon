import React, { useState } from 'react';
import '../styles/Register.css'; // If you have custom styles for the Register component
import axios from 'axios';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration submitted:', { firstName, lastName, email, password });
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister} method="post">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button style={{ backgroundColor: '#555' }} type="submit" onClick={() => { create_user(firstName, lastName, email, password) }}>Register</button>
      </form>
    </div>
  );

  function create_user(fname, lname, email, password) {
    const new_user = [fname, lname, email, password];
    axios.post("http://localhost:5000/api/register", new_user)
      .then((response) => {
        const data = response['data'] // data is an array of [boolean, fname, lname, email, password, username]
        { data[0] ? console.log("Success!") : console.log("Fail") }
        // change above to reload page if unsuccessful, possibly display message that it was unsuccessful
          // if successful, log user in and send to login home page
      })
      .catch((error) => {
      console.log(error);
      });
  } 

}


export default Register;
