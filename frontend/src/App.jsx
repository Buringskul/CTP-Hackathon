import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Login from './components/Login';  // Import the Login component
import Resources from './components/Resources';  // Import the Resources component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<Login />} />  {/* Add Login route */}
          <Route path="/resources" element={<Resources />} />  {/* Add Resources route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
