import React from 'react';
import '../styles/SubmissionSnippets.css';

function SubmissionSnippets() {
    const Submissions = [
        { user: 'Resource 1', title: 'Description of resource 1', category: '#', likes:'', },
        { user: 'Resource 2', title: 'Description of resource 2', category: '#', likes:'', },
        { user: 'Resource 3', title: 'Description of resource 3', category: '#', likes:'', },
      ];
      const submissionsPerPage=12;

      const [currentPage, setCurrentPage] = useState(1);
      const startIndex = (currentPage - 1) * submissionsPerPage;
      const currentSubmissions = Submissions.slice(startIndex, startIndex+submissionsPerPage);
      const totalPages= Math.ceil(Submissions.length/submissionsPerPage);
      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

      return(
        <div>
            <ul>
                {currentSubmissions.map((submission,index) => (
                    <li key={index}>
                        <h3>{submission.user}</h3>
                        <p>{submission.title}</p>
                        <span>{submission.category}</span>
                        <span>{submission.likes}</span>
                    </li>
                ))}
            </ul>
            <div>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
      )
}

export default SubmissionSnippets