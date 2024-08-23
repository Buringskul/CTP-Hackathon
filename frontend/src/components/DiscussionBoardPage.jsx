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
                //const posts = response['data']

                const posts = {
                    0: {
                        'user': 'rafid',
                        'title': 'why one piece is the best',
                        'category': 'Academics',
                        'likes': 999999999999999,
                        'body': 'here is why one piece is the best'
                    },
                    1: {
                        'user': 'alysa',
                        'title': 'why hzd is the best',
                        'category': 'Questions',
                        'likes': 2,
                        'body': 'here is why hzd is the best'
                    }
                }
                setPosts(posts);
            })
            .catch((error) => {
                console.log(error);
            });
        console.log('test')
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
                        <div key="sample">
                            <p>{posts[postKey]['user']}</p>
                            <p>{posts[postKey]['category']}</p>
                            <p>{posts[postKey]['title']}</p>
                            <p>{posts[postKey]['body']}</p>
                            <p>{posts[postKey]['likes']}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return

    }



export default DiscussionBoardPage