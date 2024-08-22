import React from 'react';
import '../styles/PostLoginContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTreeCity, faHandHoldingHeart, faShieldHeart, faQuestion, faLeaf } from '@fortawesome/free-solid-svg-icons';

function PostLoginContent(){
    return(
        <div className="PostLoginContent">
        <h2 className="category-title">Categories</h2>
        <p className="category-title">topics and resources</p>
        <div className="grid-container">
          <div className="grid-item">
            <FontAwesomeIcon className='icon' icon={faPencil}/>
            <h2>Academics</h2>
            <p>
              Discussions on student affairs, homework help,
              textbook resources, tutoring, professor advice.
            </p>
          </div>
          <div className="grid-item">
            <FontAwesomeIcon className='icon' icon={faLeaf}/>
            <h2>Environment Awareness</h2>
            <p>
              Discussions on environmental awareness,
              planting tips.
            </p>
          </div>
          <div className="grid-item">
            <FontAwesomeIcon className='icon' icon={faHandHoldingHeart}/>
            <h2>Mental Health</h2>
            <p>
            Conversations on mental well-being, 
            stress management, counseling resources, 
            coping strategies, and support systems.
            </p>
          </div>
          <div className="grid-item">
          <FontAwesomeIcon className='icon' icon={faShieldHeart}/>
            <h2>Safety</h2>
            <p>
            Conversations on mental well-being, 
            stress management, counseling resources,
             coping strategies, and support systems.            </p>
          </div>
          <div className="grid-item">
            <FontAwesomeIcon className='icon' icon={faQuestion}/>
            <h2>Questions</h2>
            <p>
            A space for general inquiries, seeking 
            advice, clarifications on various topics, 
            and engaging in Q&A.
            </p>
          </div>
          <div className="grid-item">
            <FontAwesomeIcon className='icon' icon={faTreeCity}/>
            <h2>CUNY Resources</h2>
            <p>
            A collection of useful materials, guides, 
            and tools, including reference 
            links, and other helpful resources.

            </p>
          </div>
        </div>
      </div>
    );
}

export default PostLoginContent