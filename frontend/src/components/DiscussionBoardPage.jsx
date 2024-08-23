import React, { useState } from 'react';
import '../styles/DiscussionBoardPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faX, faHeart } from '@fortawesome/free-solid-svg-icons';
import NewSubmissionSection from './NewSubmissionSection';


function DiscussionBoardPage() {
    const Submissions = [
        { user: 'Resource 1', title: 'My bad experience at CISC 3115', category: 'Academics', likes: '3', description:'I recently completed a Modern Programming Techniques class that, unfortunately, didn’t meet my expectations due to the professor’s teaching style. While the course content was relevant and up-to-date, the professor’s approach was rigid and lacked the flexibility needed to accommodate different learning styles. They often dismissed questions or provided overly technical explanations without ensuring that everyone in the class was on the same page. This made the learning experience frustrating, as it felt like the course was more about memorization rather than understanding the concepts deeply. For future students, I would advise checking in with peers who have taken the class or attending the first few sessions to gauge if the teaching style aligns with your learning needs.'},
        { user: 'Resource 1', title: 'My bad experience at CISC 3115', category: 'Academics', likes: '2', description:'I recently completed a Modern Programming Techniques class that, unfortunately, didn’t meet my expectations due to the professor’s teaching style. While the course content was relevant and up-to-date, the professor’s approach was rigid and lacked the flexibility needed to accommodate different learning styles. They often dismissed questions or provided overly technical explanations without ensuring that everyone in the class was on the same page. This made the learning experience frustrating, as it felt like the course was more about memorization rather than understanding the concepts deeply. For future students, I would advise checking in with peers who have taken the class or attending the first few sessions to gauge if the teaching style aligns with your learning needs.'},
    ];

    const categoryColors = {
        'Academics': 'red',
        'Environment Awareness': 'green',
        'Mental Health': 'blue',
        'Safety': 'orange',
        'Questions': 'purple',
        'CUNY Resources': 'teal'
    };

    const submissionsPerPage = 15;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * submissionsPerPage;
    const currentSubmissions = Submissions.slice(startIndex, startIndex + submissionsPerPage);
    const totalPages = Math.ceil(Submissions.length / submissionsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='DiscussionBoard'>
            <div >
                {currentSubmissions.map((submission, index) => (
                    <div key={index} className="submission">
                        <a className='submission-holder'>
                            
                            <div className="board-submission-title">
                                {submission.title}
                                <div className='category-name-snippet'><div className="color-box" style={{ backgroundColor: categoryColors[submission.category] }}></div>
                                 <div className="submission-category">{submission.category}</div></div>
                            </div>
                            
                            
                            <div className='submission-profile'><FontAwesomeIcon className='profile' icon={faUser}/></div>
                            <div className='submission-description'>{submission.description}</div>
                            <div className='submission-likes'>
                                <FontAwesomeIcon className='heart' icon={faHeart}/> 
                                <div className='like-number'>
                                    {submission.likes}
                                </div>
                                
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <NewSubmissionSection/>
        </div>
    );
}



export default DiscussionBoardPage;