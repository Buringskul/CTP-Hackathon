import React, { useState } from 'react';
import '../styles/Register.css'; // If you have custom styles for the Register component

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  class User {
    constructor(fname, lname, email, password) {
      this.fname;
      this.lname;
      this.email;
      this.password;
    }
  }

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
    const new_user = new User(fname, lname, email, password);
    console.log("test")
  } 

}


export default Register;
