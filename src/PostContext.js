// src/PostContext.js
import React from 'react';

const PostContext = React.createContext();

class PostProvider extends React.Component {
    state = {
        posts: [],
    };

    addPost = (post) => {
        this.setState({ posts: [...this.state.posts, post] });
    };

    updatePost = (updatedPost) => {
        this.setState({
            posts: this.state.posts.map(post =>
                post.id === updatedPost.id ? updatedPost : post
            ),
        });
    };

    render() {
        return (
            <PostContext.Provider
                value={{
                    posts: this.state.posts,
                    addPost: this.addPost,
                    updatePost: this.updatePost,
                }}
            >
                {this.props.children}
            </PostContext.Provider>
        );
    }
}

export { PostProvider, PostContext };
