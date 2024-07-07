import React from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../PostContext';
import './PostDisplay.css';

class PostDisplay extends React.Component {
    static contextType = PostContext;

    handleDelete = (id) => {
        const { deletePost } = this.context;
        deletePost(id);
    };

    render() {
        const { posts } = this.context;

        return (
            <div className="post-display">
                <h1 className="post-display-title">Random Posts</h1>
                <ul className="post-display-list">
                    {posts.map(post => (
                        <li key={post.id} className="post-display-item">
                            <h2 className="post-display-item-title">{post.title}</h2>
                            <p className="post-display-item-content">{post.content}</p>
                            <div className="post-display-item-buttons">
                                <Link to={`/edit/${post.id}`}>
                                    <button className="post-display-item-edit-button">Edit</button>
                                </Link>
                                <button onClick={() => this.handleDelete(post.id)} className="post-display-item-delete-button">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <Link to="/create">
                    <button className="post-display-create-button">Create Post</button>
                </Link>
            </div>
        );
    }
}

export default PostDisplay;
