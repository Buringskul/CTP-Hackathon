import React, { useState } from 'react';
import '../styles/Login.css'; // If you have custom styles for the Login component
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', { email, password });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} method="post">
        <div className="form-group">
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
        <button style={{ backgroundColor: '#555' }} type="submit" onClick={() => { check_user(email, password) }}>Login</button>
      </form>
    </div>
  );

  function check_user(email, password) {
    const returning_user = [email, password];
    axios.post("http://localhost:5000/api/login", returning_user)
      .then((response) => {
        const data = response['data']
        { data[0] == "True" ? console.log("Success!") : console.log("Fail") }
      })
      .catch((error) => {
        console.log(error);
      });
  } 

  
}

export default Login;
