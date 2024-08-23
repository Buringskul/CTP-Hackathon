import React, { useState, useEffect } from 'react';
import '../styles/DiscussionBoardPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faX, faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


function DiscussionBoardPage() {
    const [posts, setPosts] = useState({});

    function get_posts() {
        axios.get("http://localhost:5000/discussions")
            .then((response) => {
                const posts = response['data']

                // const posts = {
                //     0: {
                //         'user': 'rafid',
                //         'title': 'why one piece is the best',
                //         'category': 'Academics',
                //         'likes': 999999999999999,
                //         'body': 'here is why one piece is the best'
                //     },
                //     1: {
                //         'user': 'alysa',
                //         'title': 'why hzd is the best',
                //         'category': 'Questions',
                //         'likes': 2,
                //         'body': 'here is why hzd is the best'
                //     }
                // }
                setPosts(posts);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    useEffect(() => get_posts(), []);
    
    if (posts) {
        let postsKeys = Object.keys(posts)

        return (
            <div className='DiscussionBoard'>
                <div>
                    {posts['post_id']}
                </div>
                <div >
                    {postsKeys.map((postKey) => (
                        // <div key="sample">
                        //     <p>{posts[postKey]['user']}</p>
                        //     <p>{posts[postKey]['category']}</p>
                        //     <p>{posts[postKey]['title']}</p>
                        //     <p>{posts[postKey]['body']}</p>
                        //     <p>{posts[postKey]['likes']}</p>
                        // </div>
                        <a key="test" className='submission-holder'>
                            
                            <div className="board-submission-title">
                                {posts[postKey]['title']}
                                <div className='category-name-snippet'><div className="color-box"></div>
                                    <div className="submission-category">{posts[postKey]['category']}</div></div>
                            </div>
                            
                            
                            <div className='submission-profile'><FontAwesomeIcon className='profile' icon={faUser}/></div>
                            <div className='submission-description'>{posts[postKey]['body']}</div>
                            <div className='submission-likes'>
                                <FontAwesomeIcon className='heart' icon={faHeart}/> 
                                <div className='like-number'>
                                    {posts[postKey]['likes']}
                                </div>
                                
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        );
    }

    return

    }



export default DiscussionBoardPage