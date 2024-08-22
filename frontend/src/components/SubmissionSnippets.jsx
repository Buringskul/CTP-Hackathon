import React, { useState } from 'react';
import '../styles/SubmissionSnippets.css';

function SubmissionSnippets() {
    const Submissions = [
        { user: 'Resource 1', title: 'Description of resource 1', category: '#', likes: '' },
        { user: 'Resource 2', title: 'Description of resource 2', category: '#', likes: '' },
        { user: 'Resource 3', title: 'Description of resource 3', category: '#', likes: '' },
        // Add more resources as needed
    ];

    const submissionsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * submissionsPerPage;
    const currentSubmissions = Submissions.slice(startIndex, startIndex + submissionsPerPage);
    const totalPages = Math.ceil(Submissions.length / submissionsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="submission-snippets">
            <div className="submission-list">
                {currentSubmissions.map((submission, index) => (
                    <div key={index} className="submission-item">
                        <a>
                            <h3 className="submission-user">{submission.user}</h3>
                            <p className="submission-title">{submission.title}</p>
                            <span className="submission-category">{submission.category}</span>
                            <span className="submission-likes">{submission.likes}</span>
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
        </div>
    );
}

export default SubmissionSnippets;