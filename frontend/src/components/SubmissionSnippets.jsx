import React, { useState } from 'react';
import '../styles/SubmissionSnippets.css';

function SubmissionSnippets() {
    const Submissions = [
        { user: 'Resource 1', title: 'My bad experience at CISC 3115', category: 'Academics', likes: '' },
        { user: 'Resource 1', title: 'My bad experience at CISC 3115', category: 'Academics', likes: '' },
        { user: 'Resource 1', title: 'My bad experience at CISC 3115', category: 'Academics', likes: '' },
        { user: 'Resource 1', title: 'My bad experience at CISC 3115', category: 'Academics', likes: '' },
        { user: 'Resource 1', title: 'My bad experience at CISC 3115', category: 'Academics', likes: '' },
        { user: 'Resource 1', title: 'My bad experience at CISC 3115', category: 'Academics', likes: '' },
        { user: 'Resource 1', title: 'My bad experience at CISC 3115', category: 'Academics', likes: '' },
        { user: 'Resource 1', title: 'My bad experience at CISC 3115', category: 'Academics', likes: '' },
        { user: 'Resource 1', title: 'My bad experience at CISC 3115', category: 'Academics', likes: '' },
        { user: 'Resource 1', title: 'My bad experience at CISC 3115', category: 'Academics', likes: '' },
        { user: 'Resource 1', title: 'My bad experience at CISC 3115', category: 'Academics', likes: '' },
        { user: 'Resource 1', title: 'My bad experience at CISC 3115', category: 'Academics', likes: '' },
        { user: 'Resource 1', title: 'My bad experience at CISC 3115', category: 'Academics', likes: '' },
        { user: 'Resource 1', title: 'My bad experience at CISC 3115', category: 'Academics', likes: '' },
        { user: 'Resource 1', title: 'My bad experience at CISC 3115', category: 'Academics', likes: '' },
        { user: 'Resource 1', title: 'My bad experience at CISC 3115', category: 'Academics', likes: '' },
        { user: 'Resource 1', title: 'My bad experience at CISC 3115', category: 'Academics', likes: '' },
        { user: 'Resource 1', title: 'My bad experience at CISC 3115', category: 'Academics', likes: '' },
    ];

    const categoryColors = {
        'Academics': 'red',
        'Environment Awareness': 'green',
        'Mental Health': 'blue',
        'Safety': 'orange',
        'Questions': 'purple',
        'CUNY Resources': 'teal'
    };

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
                            <p className="submission-title">{submission.title}</p>
                            <div className="color-box" style={{ backgroundColor: categoryColors[submission.category] }}></div>
                            <span className="submission-category">{submission.category}</span>
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