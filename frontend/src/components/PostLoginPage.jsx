import React from 'react';
import '../styles/PostLoginPage.css'; // Adjust the path as necessary
import SubmissionSnippets from './SubmissionSnippets';
import PostLoginContent from './PostLoginContent';

function PostLoginPage() {
  return (
    <>
        <h1>Welcome to Your Dashboard</h1>
        <PostLoginContent />
        <SubmissionSnippets />
    </>
  );
}

export default PostLoginPage;
