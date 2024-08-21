import React from 'react';
import '../styles/Resources.css'; // If you have custom styles for the Resources component

function Resources() {
  const resources = [
    { title: 'Resource 1', description: 'Description of resource 1', link: '#' },
    { title: 'Resource 2', description: 'Description of resource 2', link: '#' },
    { title: 'Resource 3', description: 'Description of resource 3', link: '#' },
  ];

  return (
    <div className="resources-container">
      <h2>Resources</h2>
      <ul className="resources-list">
        {resources.map((resource, index) => (
          <li key={index} className="resource-item">
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              Learn more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resources;
