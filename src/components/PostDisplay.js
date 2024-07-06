// src/components/PostDisplay.js
import React from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../PostContext';

class PostDisplay extends React.Component {
    static contextType = PostContext;

    render() {
        const { posts } = this.context;

        return (
            <div>
                <h1>Posts</h1>
                <Link to="/create">
                    <button>Create Post</button>
                </Link>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                            <Link to={`/edit/${post.id}`}>
                                <button>Edit</button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PostDisplay;
