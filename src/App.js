import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import PostList from "./components/post/PostList";
import CommentsList from "./components/Comments/CommentsList";

class App extends React.Component {
  state = {
    users: [],
    posts: [],
    comments: []
  };
  getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => this.setState({ users: res.data }))
      .catch(error => console.log(error));
  };
  getPosts = userId => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(res => this.setState({ posts: res.data }))
      .catch(error => console.error(error));
  };
  getComments = postId => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(res => this.setState({ comments: res.data }))
      .catch(error => console.error(error));
  };
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" render={Home} />
        <Route
          exact
          path="/Posts/userId=:id"
          render={props => (
            <PostList
              {...props}
              posts={this.state.posts}
              getPosts={this.getPosts}
            />
          )}
        />
        <Route
          exact
          path="/Comments/postId=:id"
          render={props => (
            <CommentsList
              {...props}
              comments={this.state.comments}
              getComments={this.getComments}
            />
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
