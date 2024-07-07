// src/PostContext.js
import React from 'react';

const PostContext = React.createContext();

class PostProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: JSON.parse(localStorage.getItem('posts')) || [],
        };
    }

    saveToLocalStorage = (posts) => {
        localStorage.setItem('posts', JSON.stringify(posts));
    };

    addPost = (post) => {
        this.setState((prevState) => {
            const newPosts = [...prevState.posts, post];
            this.saveToLocalStorage(newPosts);
            return { posts: newPosts };
        });
    };

    updatePost = (updatedPost) => {
        this.setState((prevState) => {
            const newPosts = prevState.posts.map((post) =>
                post.id === updatedPost.id ? updatedPost : post
            );
            this.saveToLocalStorage(newPosts);
            return { posts: newPosts };
        });
    };

    deletePost = (id) => {
        this.setState((prevState) => {
            const newPosts = prevState.posts.filter((post) => post.id !== id);
            this.saveToLocalStorage(newPosts);
            return { posts: newPosts };
        });
    };

    render() {
        return (
            <PostContext.Provider
                value={{
                    posts: this.state.posts,
                    addPost: this.addPost,
                    updatePost: this.updatePost,
                    deletePost: this.deletePost,
                }}
            >
                {this.props.children}
            </PostContext.Provider>
        );
    }
}

export { PostProvider, PostContext };
