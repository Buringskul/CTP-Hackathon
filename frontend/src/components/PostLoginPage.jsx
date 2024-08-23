import React from 'react';
import '../styles/PostLoginPage.css'; // Adjust the path as necessary
import SubmissionSnippets from './SubmissionSnippets';
import PostLoginContent from './PostLoginContent';

function PostLoginPage() {
  return (
    <>
        <PostLoginContent />
        <SubmissionSnippets />
    </>
  );
}

export default PostLoginPage;
