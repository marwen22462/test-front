import React, { Component } from "react";

import PostCard from "./PostCard";

export default class PostList extends Component {
  componentDidMount = ()=> {
    const ID = this.props.match.params.id
    this.props.getPosts(ID)
  }

  render() {
    return (
      <div className='posts-f'>
        <h1 className='title'>Posts</h1>
        <ul className="userCard">
          {this.props.posts.map((post, key) => (
            <PostCard post={post} key={key} />
          ))}
        </ul>
      </div>
    );
  }
}
