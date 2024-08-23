import React, { useState, useEffect } from 'react';
import '../styles/DiscussionBoardPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function DiscussionBoardPage() {

    // Function to fetch posts
    // const getPosts = async () => {
    //     try {
    //         const response = await axios.get("http://localhost:5000/discussions");
    //         setPosts(response.data);
    //     } catch (error) {
    //         console.error("Error fetching posts:", error);
    //     }
    // };

    const staticPosts = {
        0: {
            user: 'rafid',
            title: 'Why One Piece is the Best',
            category: 'Academics',
            likes: 999999999999999,
            body: 'Here is why One Piece is the best '
        },
        1: {
            user: 'alysa',
            title: 'Why HZD is the Best',
            category: 'Questions',
            likes: 2,
            body: 'Here is why HZD is the best'
        }
        // Add more posts if needed
    };

    const categoryColors = {
        'Academics': 'red',
        'Environment Awareness': 'green',
        'Mental Health': 'blue',
        'Safety': 'orange',
        'Questions': 'purple',
        'CUNY Resources': 'teal'
    };

    const [posts, setPosts] = useState({});

    // Function to set posts
    const getPosts = () => {
        setPosts(staticPosts);
    };

    useEffect(() => {
        getPosts();
    }, []);

    // Render posts
    const renderPosts = () => {
        const postKeys = Object.keys(posts);

        if (postKeys.length === 0) {
            return <div>No posts available</div>;
        }

        return postKeys.map((postKey) => (
            <div className='submission'>
                <a key={postKey} className='submission-holder'>
                <div className="board-submission-title">
                    {posts[postKey].title}
                    <div className='category-name-snippet'>
                        <div className="color-box" style={{ backgroundColor: categoryColors[posts[postKey].category] }}></div>
                        <div className="submission-category">{posts[postKey].category}</div>
                    </div>
                </div>
                <div className='submission-profile'>
                    <FontAwesomeIcon className='profile' icon={faUser} />
                </div>
                <div className='discussion-submission-description'>{posts[postKey].body}</div>
                <div className='submission-likes'>
                    <FontAwesomeIcon className='heart' icon={faHeart} />
                    <div className='like-number'>{posts[postKey].likes}</div>
                </div>
            </a>
            </div>
            
        ));
    };

    return (
        <div className='DiscussionBoard'>
            {renderPosts()}
        </div>
    );
}

export default DiscussionBoardPage;