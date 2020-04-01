import React, { Component } from "react";
import axios from "axios";

import PostCard from "./PostCard";

export default class PostList extends Component {
  state = {
    posts: []
  };
  componentDidMount = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/`).then(response => {
      // console.log(response);
      this.setState({ posts: response.data });
    });
  };

  render() {
    return (
      <div>
        <ul className="userCard">
          {this.state.posts.map((post, key) => (
            <PostCard post={post} key={key} />
          ))}
        </ul>
      </div>
    );
  }
}
