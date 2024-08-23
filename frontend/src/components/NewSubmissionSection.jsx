import React, { useState } from 'react';
import '../styles/NewSubmissionSection.css';

function NewSubmissionSection({category}){
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
                        required 
                    />
                    <select 
                        name="category" 
                        id="category" 
                        className="category-select" 
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
                        required 
                    ></textarea>
                    <button type="submit" className='submit-button'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default NewSubmissionSection;