import React from 'react';
import '../styles/Resources.css'; // If you have custom styles for the Resources component

function Resources() {
  const resources = [
    { title: 'Food Security', description: '20/25 CUNY campuses have food pantries where students can get free products. Stop by your campus food pantry to see what services are available', link: 'https://www.healthycuny.org/cuny-food-pantries' },
    { title: 'Heathcare', description: 'Every CUNY campus has a Health Center that can provide a variety of services.', link: 'https://www.healthycuny.org/cuny-health-centers' },
    { title: 'Housing Insecurity', description: 'Many CUNY students experience housing insecuirty and homelessness. Below are the resources for students in need', link: 'https://younginvincibles.org/part-1-resources-for-homelessness-students-in-nyc/' },
    { title: 'Mental Health', description: 'All CUNY campuses have counseling centers that help students deal with the psychological stress that comes from balancing being a student with daily life.', link: 'https://www.healthycuny.org/oncampus-services' },  
    { title: 'Survival Guide', description: 'Below is a coherent guide if this is your first time going to a CUNY campus.', link: 'https://www.cuny.edu/about/administration/offices/communications-marketing/student-survival-guide/' },
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
