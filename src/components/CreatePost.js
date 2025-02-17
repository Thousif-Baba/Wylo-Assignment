import React from 'react';
import { withRouter } from 'react-router-dom';
import { PostContext } from '../PostContext';
import './CreatePost.css';

class CreatePost extends React.Component {
    static contextType = PostContext;

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        const { posts } = this.context;
        if (id) {
            const post = posts.find(p => p.id === id);
            if (post) {
                this.setState({
                    title: post.title,
                    content: post.content,
                });
            }
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { id } = this.props.match.params;
        const { addPost, updatePost } = this.context;
        const post = { id: id ? id : Date.now().toString(), ...this.state };

        if (id) {
            updatePost(post);
        } else {
            addPost(post);
        }

        this.props.history.push('/');
    };

    render() {
        return (
            <div className="create-post">
                <h1 className="create-post-title">{this.props.match.params.id ? 'Edit Post' : 'Create Post'}</h1>
                <form className="create-post-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        required
                        className="create-post-input"
                    />
                    <textarea
                        name="content"
                        placeholder="Content"
                        value={this.state.content}
                        onChange={this.handleChange}
                        required
                        className="create-post-textarea"
                    />
                    <button type="submit" className="create-post-button">
                        {this.props.match.params.id ? 'Update' : 'Create'}
                    </button>
                </form>
            </div>
        );
    }
}

export default withRouter(CreatePost);
