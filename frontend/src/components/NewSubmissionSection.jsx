import React, { useState } from 'react';
import '../styles/NewSubmissionSection.css';
import axios from 'axios';

function NewSubmissionSection({ category }) {
    
    const [user, setUser] = useState('');
    const [title, setTitle] = useState('');
    const [type, setType] = useState(''); // category
    const [body, setBody] = useState('');

    const postCategory=category?category:null;
    return (
        <div className='new-submission-overlay'>
            <div className='new-submission-container'>
            <form className="new-submission-form">
                    <input 
                        type="text" 
                        placeholder='Title' 
                        className="title-text" 
                        name="title" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required 
                    />
                    <select 
                        name="category" 
                        id="category" 
                        className="category-select" 
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    >
                        <option value="" disabled selected>Select a category</option>
                        <option value="academics">Academics</option>
                        <option value="environment">Environment Awareness</option>
                        <option value="mental_health">Mental Health</option>
                        <option value="safety">Safety</option>
                        <option value="questions">Questions</option>
                        <option value="cun_resources">CUNY Resources</option>
                    </select>
                    <textarea 
                        placeholder="Description" 
                        className="description-text" 
                        name="description" 
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required 
                    ></textarea>
                    <button type="submit" className='submit-button' onClick={() => { create_post(user, title, type, body) }}>Submit</button>
                </form>
            </div>
        </div>
    );

    function create_post(user, title, type, body) {
        const new_post = [user, title, type, body];
        axios.post("http://localhost:5000/api/posts", new_post)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export default NewSubmissionSection;