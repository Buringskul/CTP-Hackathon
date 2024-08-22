import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import './App.css'
import Resources from './components/Resources';  // Import the Resources component


function postloginpage() {
    return (
      <div className="postLoginPage">
        <Header />
        <PostLoginContent />
        <SubmissionSnippets />
        <Footer />
      </div>
    );
}
export default postloginpage