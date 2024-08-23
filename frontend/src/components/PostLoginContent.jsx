import React from 'react';
import '../styles/PostLoginContent.css'; // Ensure this CSS file exists and is correctly linked
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTreeCity, faHandHoldingHeart, faShieldHeart, faQuestion, faLeaf } from '@fortawesome/free-solid-svg-icons';

function PostLoginContent(){
    return(
        <div className="PostLoginContent">
        <h1 className='post-login-title'>Welcome to Your Dashboard</h1>
        <h2 className="category-title">Categories</h2>
        <p className="category-description">topics and resources</p>
        <div className="category-container">
          <a href='/discussionboard' className="post-login-grid-item discussionboard">
            <FontAwesomeIcon className='post-login-icon' icon={faPencil}/>
            <h2>Academics</h2>
          </a>
          <a href='/discussionboard' className="post-login-grid-item">
            <FontAwesomeIcon className='post-login-icon' icon={faLeaf}/>
            <h2>Environment Awareness</h2>
          </a>
          <a href='/discussionboard' className="post-login-grid-item">
            <FontAwesomeIcon className='post-login-icon' icon={faHandHoldingHeart}/>
            <h2>Mental Health</h2>
          </a>
          <a href='/discussionboard' className="post-login-grid-item">
          <FontAwesomeIcon className='post-login-icon' icon={faShieldHeart}/>
            <h2>Safety</h2>
          </a>
          <a href='/discussionboard' className="post-login-grid-item">
            <FontAwesomeIcon className='post-login-icon' icon={faQuestion}/>
            <h2>Questions</h2>
          </a>
          <a href='/discussionboard' className="post-login-grid-item">
            <FontAwesomeIcon className='post-login-icon' icon={faTreeCity}/>
            <h2>CUNY Resources</h2>
          </a>
        </div>
      </div>
    );
}

export default PostLoginContent;
