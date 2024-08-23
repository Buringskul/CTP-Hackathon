import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Login from './components/Login';  // Import the Login component
import Resources from './components/Resources';  // Import the Resources component
import PostLoginPage from './components/PostLoginPage';
import DiscussionBoardPage from './components/DiscussionBoardPage';
import './App.css';
import Register from './components/Register';

function App() {
  const [count, SetCount] = useState(0);
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:5000/api/users")
    console.log(response.data.users);
    setArray(response.data.users);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<Login />} />  {/* Add Login route */}
          <Route path="/resources" element={<Resources />} />  {/* Add Resources route */}
          <Route path="/register" element={<Register />} />
          <Route path="/postlogin" element={<PostLoginPage />} />
          <Route path="/discussionboard" element={<DiscussionBoardPage />} />
        </Routes>
        <Footer />
      </div>
      {/* <div className="Test">
        {array.map((user, index) => (
          <div key={index}>
            <span>{user}</span>
            <br></br>
          </div>
        ))}
      </div> */}
    </Router>
  );
}

export default App;
