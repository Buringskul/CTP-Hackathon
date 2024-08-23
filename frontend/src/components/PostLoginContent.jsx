import React from 'react';
import '../styles/PostLoginContent.css'; // Ensure this CSS file exists and is correctly linked
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTreeCity, faHandHoldingHeart, faShieldHeart, faQuestion, faLeaf } from '@fortawesome/free-solid-svg-icons';

function PostLoginContent() {
    return (
        <div className="post-login-content">
            <h1>Welcome to Your Dashboard</h1>
            <div className="grid-container">
                <a href='/discussionboard' className="grid-items">
                    <FontAwesomeIcon className='icon' icon={faPencil} />
                    <h2>Academics</h2>
                </a>
                <a href='/discussionboard' className="grid-items">
                    <FontAwesomeIcon className='icon' icon={faLeaf} />
                    <h2>Environment Awareness</h2>
                </a>
                <a href='/discussionboard' className="grid-items">
                    <FontAwesomeIcon className='icon' icon={faHandHoldingHeart} />
                    <h2>Mental Health</h2>
                </a>
                <a href='/discussionboard' className="grid-items">
                    <FontAwesomeIcon className='icon' icon={faShieldHeart} />
                    <h2>Safety</h2>
                </a>
                <a href='/discussionboard' className="grid-items">
                    <FontAwesomeIcon className='icon' icon={faQuestion} />
                    <h2>Questions</h2>
                </a>
                <a href='/discussionboard' className="grid-items">
                    <FontAwesomeIcon className='icon' icon={faTreeCity} />
                    <h2>CUNY Resources</h2>
                </a>
            </div>
        </div>
    );
}

export default PostLoginContent;
