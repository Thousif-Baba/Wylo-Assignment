// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PostProvider } from './PostContext';
import PostDisplay from './components/PostDisplay';
import CreatePost from './components/CreatePost';
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <PostProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={PostDisplay} />
            <Route path="/create" component={CreatePost} />
            <Route path="/edit/:id" component={CreatePost} />
          </Switch>
        </Router>
      </PostProvider>
    );
  }
}

export default App;
