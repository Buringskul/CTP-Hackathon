import React from 'react';
import '../styles/MainContent.css'

function MainContent() {
  return (
    <main className="categories">
      <h2>Categories</h2>
      <p>This is the main content area.</p>
      <div className="grid-container">
        <div className="grid-item">
            <h2>Academics</h2>
            <p1>
                Discussions on student affairs, homework help,
                textbook resources, tutoring, professor adivce.
            </p1>
        </div>
        <div className="grid-item">
            <h2>Environment Awareness</h2>
            <p1>
                Discussions on environmental awareness,
                planting tips.
            </p1>
        </div>
        <div className="grid-item">
            <h2>Mental Health</h2>
            <p1>
                Body text for whatever you'd like
                to say. Add main takeaway points,
                quotes, anecdotes, or even a very 
                short story.
            </p1>
        </div>
        <div className="grid-item">
            <h2>Safety</h2>
            <p1>
                Body text for whatever you'd like to say.
                Add main takeaway points, quotes, anecdotes,
                or even a very very short story.
            </p1>
        </div>
        <div className="grid-item">
            <h2>Questions</h2>
            <p1>
                Body text for whatever you'd like to say.
                Add main takeaway points, quotes, anecdotes,
                or even a very very short story.
            </p1>
        </div>
        <div className="grid-item">
            <h2>CUNY Resources</h2>
            <p1>
                Body text for whatever you'd like to say.
                Add main takeaway points, quotes, anecdotes,
                or even a very very short story.
            </p1>
        </div>
      </div>
    </main>
  );
}

export default MainContent;