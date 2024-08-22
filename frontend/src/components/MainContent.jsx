import React from 'react';
import '../styles/MainContent.css';
import cunyStudentsImg from '../images/cuny_students.jpg'; // Import image directly

function MainContent() {
  return (
    <main className="main-content">

      
      <div className='title-block'>
        <img 
         src={cunyStudentsImg} 
         alt="CUNY Students" 
         className="cuny-students-image" 
        />
        <h1 className='main-title'>CUNY Crucial Circle</h1>
        <button type="button" className='join-button'>join the conversation</button>
      </div>

      <div className="categories">
        <h2>Categories</h2>
        <div className="grid-container">
          <div className="grid-item">
            <h2>Academics</h2>
            <p>
              Discussions on student affairs, homework help,
              textbook resources, tutoring, professor advice.
            </p>
          </div>
          <div className="grid-item">
            <h2>Environment Awareness</h2>
            <p>
              Discussions on environmental awareness,
              planting tips.
            </p>
          </div>
          <div className="grid-item">
            <h2>Mental Health</h2>
            <p>
              Body text for whatever you'd like
              to say. Add main takeaway points,
              quotes, anecdotes, or even a very 
              short story.
            </p>
          </div>
          <div className="grid-item">
            <h2>Safety</h2>
            <p>
              Body text for whatever you'd like to say.
              Add main takeaway points, quotes, anecdotes,
              or even a very very short story.
            </p>
          </div>
          <div className="grid-item">
            <h2>Questions</h2>
            <p>
              Body text for whatever you'd like to say.
              Add main takeaway points, quotes, anecdotes,
              or even a very very short story.
            </p>
          </div>
          <div className="grid-item">
            <h2>CUNY Resources</h2>
            <p>
              Body text for whatever you'd like to say.
              Add main takeaway points, quotes, anecdotes,
              or even a very very short story.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;